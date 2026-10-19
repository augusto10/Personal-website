import { randomUUID } from 'crypto'
import { neon } from '@neondatabase/serverless'
import { site, type ProjectCase, type ProjectImage } from '@/config/site'

const featuredIds = new Set(['pdv-atacado', 'gestao-logistica', 'catalogo-esplendor-atacadista', 'solucoes-esplendor', 'vendas-marketplace'])
const privateFeaturedIds = new Set(['pdv-atacado', 'gestao-logistica', 'solucoes-esplendor'])
let tablesReady = false

export type ProjectImageUpload = { contentType: string; base64: string; size: number }

function database() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL não configurada.')
  let parsedUrl: URL
  try {
    parsedUrl = new URL(url)
  } catch {
    throw new Error('DATABASE_URL inválida. Use a URL de conexão PostgreSQL completa fornecida pelo Neon.')
  }
  if (!['postgres:', 'postgresql:'].includes(parsedUrl.protocol) || !parsedUrl.hostname) {
    throw new Error('DATABASE_URL inválida. Use a URL de conexão PostgreSQL completa fornecida pelo Neon.')
  }
  return neon(url)
}

async function ensureTables() {
  if (tablesReady) return
  const sql = database()
  await sql`CREATE TABLE IF NOT EXISTS portfolio_projects (id VARCHAR(100) PRIMARY KEY, data JSONB NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`
  await sql`CREATE TABLE IF NOT EXISTS portfolio_project_images (id VARCHAR(36) PRIMARY KEY, project_id VARCHAR(100) NOT NULL REFERENCES portfolio_projects(id) ON DELETE CASCADE, content_type VARCHAR(40) NOT NULL, image_data BYTEA NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`
  await sql`CREATE TABLE IF NOT EXISTS portfolio_project_settings (key VARCHAR(100) PRIMARY KEY, value BOOLEAN NOT NULL DEFAULT TRUE)`
  tablesReady = true
}

function defaultProjects(): ProjectCase[] {
  return site.projectCases.map((project) => ({
    ...project,
    featured: featuredIds.has(project.id),
    privateAccess: privateFeaturedIds.has(project.id) || project.privateAccess,
  }))
}

export async function getProjectCasesForPage(): Promise<{ projects: ProjectCase[]; databaseWarning?: string }> {
  try {
    return { projects: await getProjectCases() }
  } catch (error) {
    console.error('Não foi possível carregar os projetos do banco; exibindo os projetos locais:', error)
    return {
      projects: defaultProjects(),
      databaseWarning: 'Não foi possível carregar as atualizações dos projetos. Exibindo a versão disponível no site.',
    }
  }
}

function isProjectCase(value: unknown): value is ProjectCase {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const project = value as Record<string, unknown>
  return typeof project.id === 'string' &&
    typeof project.name === 'string' &&
    typeof project.category === 'string' &&
    typeof project.statusLabel === 'string' &&
    typeof project.url === 'string' &&
    typeof project.summary === 'string' &&
    typeof project.image === 'object' &&
    Array.isArray(project.gallery)
}

function unpackProject(value: unknown): ProjectCase {
  const project = typeof value === 'string' ? JSON.parse(value) as unknown : value
  if (!isProjectCase(project)) throw new Error('Os dados de um projeto armazenado estão inválidos.')
  return project
}

async function seedProjects() {
  const sql = database()
  for (const project of defaultProjects()) {
    await sql`INSERT INTO portfolio_projects (id, data) VALUES (${project.id}, ${JSON.stringify(project)}::jsonb) ON CONFLICT (id) DO NOTHING`
  }
}

export async function getProjectCases(): Promise<ProjectCase[]> {
  if (!process.env.DATABASE_URL) return defaultProjects()
  await ensureTables()
  const sql = database()
  const [seedState] = await sql`SELECT value FROM portfolio_project_settings WHERE key = 'default_projects_seeded_v2'`
  let rows = await sql`SELECT id, data FROM portfolio_projects ORDER BY created_at ASC`

  if (!seedState) {
    await seedProjects()
    rows = await sql`SELECT id, data FROM portfolio_projects ORDER BY created_at ASC`
    const storedIds = new Set(rows.map((row) => String(row.id)))
    const missingDefaults = defaultProjects().filter((project) => !storedIds.has(project.id))

    if (!missingDefaults.length) {
      await sql`INSERT INTO portfolio_project_settings (key, value) VALUES ('default_projects_seeded_v2', TRUE) ON CONFLICT (key) DO NOTHING`
    } else {
      console.error('Nem todos os projetos originais estão acessíveis no banco; exibindo também os projetos locais ausentes.')
      const savedProjects = rows.map((row) => unpackProject(row.data))
      return [...missingDefaults, ...savedProjects]
    }
  }

  const [marketplaceGallerySeeded] = await sql`SELECT value FROM portfolio_project_settings WHERE key = 'vendas_marketplace_gallery_v1'`
  if (!marketplaceGallerySeeded) {
    const marketplaceIndex = rows.findIndex((row) => String(row.id) === 'vendas-marketplace')
    const defaultMarketplace = defaultProjects().find((project) => project.id === 'vendas-marketplace')

    if (marketplaceIndex >= 0 && defaultMarketplace) {
      const savedProject = unpackProject(rows[marketplaceIndex].data)
      const hasPlaceholderImage = savedProject.image.placeholder === true ||
        savedProject.image.src === '/projects/vendas-marketplace/dashboard-placeholder.svg'
      const updatedProject = {
        ...savedProject,
        ...(hasPlaceholderImage ? { image: defaultMarketplace.image, gallery: defaultMarketplace.gallery } : {}),
        featured: true,
      }
      await sql`UPDATE portfolio_projects SET data = ${JSON.stringify(updatedProject)}::jsonb, updated_at = NOW() WHERE id = 'vendas-marketplace'`
      rows[marketplaceIndex] = { ...rows[marketplaceIndex], data: updatedProject }
      await sql`INSERT INTO portfolio_project_settings (key, value) VALUES ('vendas_marketplace_gallery_v1', TRUE) ON CONFLICT (key) DO NOTHING`
    }
  }

  const [pdvGallerySeeded] = await sql`SELECT value FROM portfolio_project_settings WHERE key = 'pdv_atacado_gallery_v1'`
  if (!pdvGallerySeeded) {
    const pdvIndex = rows.findIndex((row) => String(row.id) === 'pdv-atacado')
    const defaultPdv = defaultProjects().find((project) => project.id === 'pdv-atacado')

    if (pdvIndex >= 0 && defaultPdv) {
      const savedProject = unpackProject(rows[pdvIndex].data)
      const newScreenshotSources = new Set([
        '/projects/pdv-atacado/novo-produto.webp',
        '/projects/pdv-atacado/carrinho-pedido.webp',
        '/projects/pdv-atacado/pedidos-liberados.webp',
      ])
      const retainedGallery = savedProject.gallery.filter((image) =>
        image.kind !== 'video' &&
        !image.src.endsWith('.webm') &&
        !newScreenshotSources.has(image.src),
      )
      const updatedProject = {
        ...savedProject,
        image: defaultPdv.image,
        gallery: [...defaultPdv.gallery.filter((image) => newScreenshotSources.has(image.src)), ...retainedGallery],
      }

      await sql`UPDATE portfolio_projects SET data = ${JSON.stringify(updatedProject)}::jsonb, updated_at = NOW() WHERE id = 'pdv-atacado'`
      rows[pdvIndex] = { ...rows[pdvIndex], data: updatedProject }
      await sql`INSERT INTO portfolio_project_settings (key, value) VALUES ('pdv_atacado_gallery_v1', TRUE) ON CONFLICT (key) DO NOTHING`
    }
  }

  const [support360GallerySeeded] = await sql`SELECT value FROM portfolio_project_settings WHERE key = 'suporte_360_gallery_v1'`
  if (!support360GallerySeeded) {
    const support360Index = rows.findIndex((row) => String(row.id) === 'solucoes-esplendor')
    const defaultSupport360 = defaultProjects().find((project) => project.id === 'solucoes-esplendor')

    if (support360Index >= 0 && defaultSupport360) {
      const savedProject = unpackProject(rows[support360Index].data)
      const newScreenshotSources = new Set([
        '/projects/suporte-360/meus-pedidos.webp',
        '/projects/suporte-360/rastreamento-pedido.webp',
      ])
      const retainedGallery = savedProject.gallery.filter((image) => !newScreenshotSources.has(image.src))
      const updatedProject = {
        ...savedProject,
        name: defaultSupport360.name,
        gallery: [
          ...defaultSupport360.gallery.filter((image) => newScreenshotSources.has(image.src)),
          ...retainedGallery,
        ],
      }

      await sql`UPDATE portfolio_projects SET data = ${JSON.stringify(updatedProject)}::jsonb, updated_at = NOW() WHERE id = 'solucoes-esplendor'`
      rows[support360Index] = { ...rows[support360Index], data: updatedProject }
      await sql`INSERT INTO portfolio_project_settings (key, value) VALUES ('suporte_360_gallery_v1', TRUE) ON CONFLICT (key) DO NOTHING`
    }
  }

  if (!rows.length) {
    console.error('O banco não retornou projetos; exibindo os projetos originais do portfólio.')
    return defaultProjects()
  }
  return rows.map((row) => unpackProject(row.data))
}

function imageIds(project: ProjectCase) {
  return [project.image, ...project.gallery]
    .map((image) => image.src.match(/^\/api\/projects\/images\/([0-9a-f-]{36})$/i)?.[1])
    .filter((id): id is string => Boolean(id))
}

export async function saveProjectCase(project: ProjectCase, cover?: ProjectImageUpload, galleryUploads: ProjectImageUpload[] = [], createOnly = false) {
  await ensureTables()
  const sql = database()
  const [oldRow] = await sql`SELECT data FROM portfolio_projects WHERE id = ${project.id}`
  const oldProject = oldRow ? unpackProject(oldRow.data) : null
  if (createOnly && oldProject) throw new Error('Já existe um projeto com esse identificador. Altere o nome antes de cadastrar.')
  const inserted = await sql`INSERT INTO portfolio_projects (id, data) VALUES (${project.id}, ${JSON.stringify(project)}::jsonb) ON CONFLICT (id) DO NOTHING RETURNING id`
  if (!oldProject && !inserted.length) {
    throw new Error(createOnly
      ? 'Já existe um projeto com esse identificador. Altere o nome antes de cadastrar.'
      : 'O projeto existe no banco, mas não está acessível para edição. Verifique as permissões da tabela portfolio_projects.')
  }

  async function storeImage(upload: ProjectImageUpload) {
    const id = randomUUID()
    await sql`INSERT INTO portfolio_project_images (id, project_id, content_type, image_data) VALUES (${id}, ${project.id}, ${upload.contentType}, decode(${upload.base64}, 'base64'))`
    return { src: `/api/projects/images/${id}`, alt: project.name }
  }

  const newCover = cover ? await storeImage(cover) : undefined
  const newGallery = await Promise.all(galleryUploads.map(storeImage))
  const savedProject = {
    ...project,
    ...(newCover ? { image: { ...newCover, alt: `${project.name} — imagem principal` } } : {}),
    ...(newGallery.length ? { gallery: [...project.gallery, ...newGallery.map((image, index) => ({ ...image, alt: `${project.name} — imagem ${index + 2}` }))] } : {}),
  }

  await sql`INSERT INTO portfolio_projects (id, data) VALUES (${savedProject.id}, ${JSON.stringify(savedProject)}::jsonb) ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()`

  if (oldProject) {
    const retainedImageIds = new Set(imageIds(savedProject))
    for (const id of imageIds(oldProject)) {
      if (!retainedImageIds.has(id)) await sql`DELETE FROM portfolio_project_images WHERE id = ${id}`
    }
  }

  return savedProject
}

export async function deleteProjectCase(id: string) {
  await ensureTables()
  const sql = database()
  const rows = await sql`DELETE FROM portfolio_projects WHERE id = ${id} RETURNING id`
  return rows.length > 0
}

export async function getProjectImage(id: string) {
  await ensureTables()
  const sql = database()
  const [row] = await sql`SELECT content_type, encode(image_data, 'base64') AS image_data FROM portfolio_project_images WHERE id = ${id}`
  if (!row) return null
  return {
    contentType: String(row.content_type),
    data: Buffer.from(String(row.image_data), 'base64'),
  }
}
