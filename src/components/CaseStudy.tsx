import type { ProjectCase } from '@/config/site'
import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { ProjectGallery } from '@/components/ProjectGallery'

export function CaseStudy({ project }: { project: ProjectCase }) {
  return (
    <article className="surface-elevated overflow-hidden rounded-[2rem] p-5 md:p-7">
      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 font-medium text-emerald-300">{project.statusLabel}</span>
          {project.privateAccess ? <span className="inline-flex items-center gap-1.5 text-white/50"><LockKeyhole size={13} /> Acesso corporativo</span> : null}
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{project.name}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-white/68">{project.summary}</p>
        <p className="mt-4 max-w-4xl leading-7 text-white/78">{project.solution}</p>
      </div>

      <div className="mt-6">
        <ProjectGallery images={[project.image, ...project.gallery]} compact />
      </div>

      <div className="mt-6 grid gap-7 border-t border-white/10 pt-6 lg:grid-cols-[1fr,0.72fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Principais funcionalidades</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => <li key={feature}>• {feature}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Tecnologias</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">{technology}</span>)}
          </div>
          {project.privateAccess ? (
            <p className="mt-5 text-sm leading-6 text-white/55">{project.publicNote || 'As telas acima demonstram o sistema sem expor credenciais ou informações confidenciais.'}</p>
          ) : (
            <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-light">Abrir projeto <ArrowUpRight size={15} /></a>
          )}
        </div>
      </div>
    </article>
  )
}
