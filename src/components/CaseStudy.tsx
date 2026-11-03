import type { ProjectCase } from '@/config/site'
import { site } from '@/config/site'
import { ArrowDown, ArrowUpRight, LockKeyhole, MessageCircle } from 'lucide-react'
import { ProjectGallery } from '@/components/ProjectGallery'

export function CaseStudy({ project }: { project: ProjectCase }) {
  const demoUrl = new URL(site.contacts.whatsapp)
  demoUrl.searchParams.set('text', `Olá! Gostaria de conhecer melhor o projeto ${project.name} e agendar uma demonstração.`)
  const demoRequested = project.privateAccess || project.requestDemo
  const coverImage = project.image.placeholder
    ? project.gallery.find((image) => !image.placeholder) ?? {
        src: '/og.png',
        alt: `Imagem de apresentação do projeto ${project.name}`,
      }
    : project.image
  const galleryImages = project.gallery.filter((image) => image.src !== coverImage.src)

  return (
    <article className="surface-elevated overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_20px_65px_rgba(34,49,40,0.10)]">
      <details className="group">
        <summary className="flex cursor-pointer list-none flex-col gap-5 p-4 marker:hidden sm:flex-row sm:items-center sm:p-5 md:gap-7 md:p-6">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            loading="lazy"
            className="aspect-[16/10] w-full shrink-0 rounded-xl bg-[#edf0eb] object-cover object-top sm:w-56 md:w-64"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#176b4b]/15 bg-[#e8f1e8] px-3 py-1 text-xs font-medium text-[#176b4b]">{project.statusLabel}</span>
              {project.privateAccess ? (
                <span className="inline-flex items-center gap-1 text-xs text-[#829087]"><LockKeyhole size={12} /> Acesso restrito</span>
              ) : null}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#64716b] md:text-base">{project.summary}</p>
            {project.privateAccess ? (
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#64716b]">
                Acesso restrito por login e senha. Posso apresentar o projeto em uma demonstração guiada.
              </p>
            ) : null}
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#176b4b]">
              Conhecer o case
              <ArrowDown size={15} className="transition-transform group-open:rotate-180" />
            </span>
          </div>
        </summary>

        <div className="border-t border-[#17211d]/10 px-4 pb-5 pt-5 sm:px-5 md:px-6 md:pb-7">
          <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#829087]">Sobre o projeto</p>
              <p className="mt-3 leading-7 text-[#46534c]">{project.solution}</p>
              <p className="mt-4 text-sm leading-6 text-[#64716b]">{project.problem}</p>
              {project.publicNote ? <p className="mt-4 text-sm leading-6 text-[#64716b]">{project.publicNote}</p> : null}

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#829087]">O que foi desenvolvido</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#526058] sm:grid-cols-2">
                {project.features.slice(0, 6).map((feature) => <li key={feature}>• {feature}</li>)}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#829087]">Tecnologias</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.slice(0, 8).map((technology) => (
                  <span key={technology} className="rounded-full border border-[#17211d]/10 bg-[#f5f7f3] px-3 py-1 text-xs text-[#64716b]">{technology}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#829087]">Telas do sistema</p>
              <div className="mt-3">
                {galleryImages.some((image) => !image.placeholder) ? (
                  <ProjectGallery images={galleryImages} compact />
                ) : (
                  <p className="text-sm leading-6 text-[#64716b]">A imagem de apresentação está no card. Não há outras telas públicas cadastradas para este projeto.</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-[#17211d]/10 pt-5">
            {demoRequested ? (
              <a href={demoUrl.toString()} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-sm">
                Solicitar demonstração <MessageCircle size={16} />
              </a>
            ) : (
              <>
                <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-sm">
                  Abrir sistema <ArrowUpRight size={15} />
                </a>
                <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2.5 text-sm">
                  <MessageCircle size={16} /> Conversar sobre um projeto
                </a>
              </>
            )}
          </div>
        </div>
      </details>
    </article>
  )
}
