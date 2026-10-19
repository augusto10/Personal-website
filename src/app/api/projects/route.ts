import { NextRequest, NextResponse } from 'next/server'
import type { ProjectCase, ProjectImage } from '@/config/site'
import { isAdminRequest } from '@/lib/admin-auth'
import { deleteProjectCase, getProjectCases, saveProjectCase, type ProjectImageUpload } from '@/lib/projects'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_IMAGE_SIZE = 2 * 1024 * 1024
const MAX_UPLOADS = 5
const MAX_UPLOAD_SIZE = 4 * 1024 * 1024
const imageTypes = new Set(['image/jpeg', 'image/png', 'image/webp'])

class InputError extends Error {}

function record(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : null
}

function requiredString(value: unknown, name: string, maxLength: number) {
  if (typeof value !== 'string' || !value.trim() || value.length > maxLength) throw new InputError(`Campo "${name}" obrigatório (máximo de ${maxLength} caracteres).`)
  return value.trim()
}

function optionalString(value: unknown, name: string, maxLength: number) {
  if (value === undefined) return ''
  if (typeof value !== 'string' || value.length > maxLength) throw new InputError(`Campo "${name}" inválido (máximo de ${maxLength} caracteres).`)
  return value.trim()
}

function stringList(value: unknown, name: string) {
  if (!Array.isArray(value) || value.length > 30 || value.some((item) => typeof item !== 'string' || item.length > 160)) {
    throw new InputError(`Campo "${name}" inválido.`)
  }
  return value.map((item) => item.trim()).filter(Boolean)
}

function projectImage(value: unknown, name: string): ProjectImage {
  const image = record(value)
  if (!image) throw new InputError(`Imagem "${name}" inválida.`)
  const src = requiredString(image.src, `${name}.src`, 1000)
  if (!src.startsWith('/projects/') && !src.startsWith('/api/projects/images/')) {
    let imageUrl: URL
    try {
      imageUrl = new URL(src)
    } catch {
      throw new InputError(`Imagem "${name}" inválida.`)
    }
    if (imageUrl.protocol !== 'https:' && imageUrl.protocol !== 'http:') throw new InputError(`Imagem "${name}" inválida.`)
  }
  return {
    src,
    alt: requiredString(image.alt, `${name}.alt`, 250),
    ...(image.placeholder === true ? { placeholder: true } : {}),
    ...(image.kind === 'video' ? { kind: 'video' as const } : {}),
    ...(typeof image.poster === 'string' ? { poster: image.poster.slice(0, 1000) } : {}),
  }
}

function parseProject(value: unknown): ProjectCase {
  const project = record(value)
  if (!project) throw new InputError('Dados do projeto inválidos.')
  const id = requiredString(project.id, 'id', 100)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new InputError('Use um identificador de projeto em letras minúsculas, números e hífens.')
  const category = requiredString(project.category, 'categoria', 20)
  if (!['production', 'development', 'freelance', 'lab'].includes(category)) throw new InputError('Categoria inválida.')
  const url = requiredString(project.url, 'link do projeto', 1000)
  let parsedUrl: URL
  try {
    parsedUrl = new URL(url)
  } catch {
    throw new InputError('Informe um link válido começando com https:// ou http://.')
  }
  if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') throw new InputError('O link do projeto precisa usar HTTP ou HTTPS.')
  const summary = requiredString(project.summary, 'resumo', 500)

  return {
    id,
    name: requiredString(project.name, 'nome', 120),
    category: category as ProjectCase['category'],
    statusLabel: requiredString(project.statusLabel, 'status', 60),
    url: parsedUrl.href,
    featured: project.featured === true,
    privateAccess: project.privateAccess === true,
    summary,
    description: optionalString(project.description, 'descrição', 3000) || summary,
    clientContext: optionalString(project.clientContext, 'contexto', 1000),
    problem: optionalString(project.problem, 'problema', 2000),
    solution: optionalString(project.solution, 'solução', 2000) || summary,
    role: stringList(project.role, 'responsabilidades'),
    features: stringList(project.features, 'funcionalidades'),
    technologies: stringList(project.technologies, 'tecnologias'),
    integrations: stringList(project.integrations, 'integrações'),
    technicalChallenges: stringList(project.technicalChallenges, 'desafios técnicos'),
    image: projectImage(project.image, 'principal'),
    gallery: Array.isArray(project.gallery) ? project.gallery.slice(0, 20).map((image, index) => projectImage(image, `galeria ${index + 1}`)) : [],
    ...(typeof project.publicNote === 'string' ? { publicNote: project.publicNote.slice(0, 1000) } : {}),
  }
}

async function readUpload(value: FormDataEntryValue | null, field: string): Promise<ProjectImageUpload | undefined> {
  if (!(value instanceof File) || value.size === 0) return undefined
  if (!imageTypes.has(value.type)) throw new InputError(`"${field}" deve ser uma imagem JPEG, PNG ou WebP.`)
  if (value.size > MAX_IMAGE_SIZE) throw new InputError(`Cada imagem pode ter no máximo 2 MB ("${field}").`)
  return { contentType: value.type, base64: Buffer.from(await value.arrayBuffer()).toString('base64'), size: value.size }
}

export async function GET() {
  try {
    return NextResponse.json(await getProjectCases(), { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    console.error('Não foi possível carregar os projetos:', error)
    const message = error instanceof Error ? error.message : 'Não foi possível carregar os projetos.'
    return NextResponse.json({ error: message }, { status: 503 })
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  try {
    const form = await request.formData()
    const projectEntry = form.get('project')
    if (typeof projectEntry !== 'string') return NextResponse.json({ error: 'Dados do projeto ausentes.' }, { status: 400 })
    const cover = await readUpload(form.get('cover'), 'capa')
    const galleryEntries = form.getAll('gallery').filter((entry): entry is File => entry instanceof File && entry.size > 0)
    if (galleryEntries.length + (cover ? 1 : 0) > MAX_UPLOADS) return NextResponse.json({ error: 'Envie no máximo 5 imagens por vez.' }, { status: 400 })
    const totalUploadSize = (cover?.size ?? 0) + galleryEntries.reduce((total, entry) => total + entry.size, 0)
    if (totalUploadSize > MAX_UPLOAD_SIZE) return NextResponse.json({ error: 'O tamanho total das imagens por envio não pode passar de 4 MB.' }, { status: 400 })
    const galleryUploads = await Promise.all(galleryEntries.map((entry, index) => readUpload(entry, `galeria ${index + 1}`)))
    const input = record(JSON.parse(projectEntry))
    if (cover && input) {
      const image = record(input.image)
      if (image && !image.src) {
        image.src = '/api/projects/images/upload-pending'
        if (!image.alt) image.alt = typeof input.name === 'string' ? input.name : 'Imagem principal'
      }
    }
    const project = parseProject(input)
    if (!cover && !project.image.src) return NextResponse.json({ error: 'Escolha uma imagem de capa para o projeto.' }, { status: 400 })
    const createOnly = form.get('create') === 'true'
    const savedProject = await saveProjectCase(project, cover, galleryUploads.filter((item): item is ProjectImageUpload => Boolean(item)), createOnly)
    return NextResponse.json(savedProject, { status: 200 })
  } catch (error) {
    if (error instanceof InputError || error instanceof SyntaxError) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    if (error instanceof Error && error.message.startsWith('Já existe um projeto')) {
      return NextResponse.json({ error: error.message }, { status: 409 })
    }
    console.error('Não foi possível salvar o projeto:', error)
    const detail = error instanceof Error && error.message.includes('DATABASE_URL inválida') ? error.message : null
    return NextResponse.json({ error: detail ?? (process.env.DATABASE_URL ? 'Não foi possível salvar o projeto no banco de dados.' : 'Configure DATABASE_URL para salvar projetos e imagens.') }, { status: 503 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  try {
    const body = await request.json() as { id?: unknown }
    if (typeof body.id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.id)) {
      return NextResponse.json({ error: 'Identificador de projeto inválido.' }, { status: 400 })
    }
    const deleted = await deleteProjectCase(body.id)
    return deleted
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: 'Projeto não encontrado.' }, { status: 404 })
  } catch (error) {
    console.error('Não foi possível excluir o projeto:', error)
    const detail = error instanceof Error && error.message.includes('DATABASE_URL inválida') ? error.message : null
    return NextResponse.json({ error: detail ?? (process.env.DATABASE_URL ? 'Não foi possível excluir o projeto.' : 'Configure DATABASE_URL para gerenciar projetos.') }, { status: 503 })
  }
}
