import type { ProjectCase } from '@/config/site'
import { site } from '@/config/site'
import { ArrowDown, LockKeyhole } from 'lucide-react'
import { ProjectGallery } from '@/components/ProjectGallery'

export function CaseStudy({ project, featured = false }: { project: ProjectCase; featured?: boolean }) {
  const demoUrl = new URL(site.contacts.whatsapp)
  demoUrl.searchParams.set('text', `Olá! Gostaria de conhecer melhor o projeto ${project.name} e agendar uma demonstração.`)
  const demoRequested = project.privateAccess || project.requestDemo
  const coverImage = project.image.placeholder
    ? project.gallery.find((image) => !image.placeholder) ?? {
        src: '/og.png',
        alt: `Imagem de apresentação do projeto ${project.name}`,
      }
    : project.image
  const galleryImages = [coverImage, ...project.gallery]

  return (
    <article className={`project-case ${featured ? 'project-case-featured' : ''}`}>
      <details className="group">
        <summary className="project-summary">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            width={1280}
            height={800}
            loading="lazy"
            className={`project-cover ${project.id === 'api-integracao-erp' ? 'project-cover-contained' : ''}`}
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="project-status">{project.statusLabel}</span>
              {project.privateAccess ? (
                <span className="inline-flex items-center gap-1 text-xs text-portfolio-muted"><LockKeyhole size={12} aria-hidden="true" /> Acesso restrito</span>
              ) : null}
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-portfolio-muted md:text-base">{project.summary}</p>
            {project.role?.length ? <p className="project-role">Minha atuação: {project.role.join(', ')}.</p> : null}
            {project.privateAccess ? (
              <p className="mt-3 max-w-3xl text-sm leading-6 text-portfolio-muted">
                Acesso restrito por login e senha. Posso apresentar o projeto em uma demonstração guiada.
              </p>
            ) : null}
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-accent">
              {featured ? 'Explorar o case' : 'Conhecer o case'}
              <ArrowDown size={15} className="transition-transform group-open:rotate-180" aria-hidden="true" />
            </span>
          </div>
        </summary>

        <div className="border-t border-portfolio-line px-4 pb-5 pt-5 sm:px-5 md:px-6 md:pb-7">
          <div className="project-detail-grid">
            <div>
              <p className="text-sm font-semibold text-portfolio-muted">Sobre o projeto</p>
              <p className="mt-3 leading-7 text-portfolio-muted">{project.solution}</p>
              <p className="mt-4 text-sm leading-6 text-portfolio-muted">{project.problem}</p>
              {project.publicNote ? <p className="mt-4 text-sm leading-6 text-portfolio-muted">{project.publicNote}</p> : null}

              <p className="mt-6 text-sm font-semibold text-portfolio-muted">O que foi desenvolvido</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-portfolio-muted sm:grid-cols-2">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <p className="mt-6 text-sm font-semibold text-portfolio-muted">Tecnologias</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-portfolio-line bg-portfolio-surface px-3 py-1 text-xs text-portfolio-muted">{technology}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-portfolio-muted">Telas do sistema</p>
              <div className="mt-3">
                {galleryImages.some((image) => !image.placeholder) ? (
                  <ProjectGallery images={galleryImages} compact />
                ) : (
                  <p className="text-sm leading-6 text-portfolio-muted">A imagem de apresentação está no card. Não há outras telas públicas cadastradas para este projeto.</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </details>
      <div className="project-actions">
        {demoRequested ? (
          <>
            <a href={demoUrl.toString()} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-sm">
              Solicitar demonstração
            </a>
            {project.id === 'api-integracao-erp' && !project.privateAccess ? (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-secondary">Ver documentação</a>
            ) : null}
          </>
        ) : (
          <>
            <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-sm">
              {project.id === 'catalogo-esplendor-atacadista' ? 'Visitar catálogo' : 'Abrir projeto'}
            </a>
            <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2.5 text-sm">
              Conversar sobre projeto
            </a>
          </>
        )}
      </div>
    </article>
  )
}
