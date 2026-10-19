import type { ProjectCase } from '@/config/site'
import { CaseStudy } from '@/components/CaseStudy'

const featuredIds = ['pdv-atacado', 'gestao-logistica', 'catalogo-esplendor-atacadista', 'solucoes-esplendor']

export function Cases({ projects, databaseWarning }: { projects: ProjectCase[]; databaseWarning?: string }) {
  const featured = projects
    .filter((project) => project.featured ?? featuredIds.includes(project.id))
  const featuredProjectIds = new Set(featured.map((project) => project.id))
  const otherProjects = projects.filter((project) => project.category === 'production' && !featuredProjectIds.has(project.id))

  return (
    <section id="projetos" className="section">
      <div className="container-max">
        <p className="eyebrow">Projetos selecionados</p>
        <h2 className="section-title mt-4">Sistemas que resolvem problemas reais</h2>
        <p className="section-subtitle leading-7">Uma seleção curta com as principais telas e o resultado de cada trabalho. Os ambientes privados são apresentados por imagens e demonstrações, sem compartilhar acessos.</p>
        {databaseWarning ? <p role="status" className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100/80">{databaseWarning}</p> : null}

        <div className="mt-12 space-y-8">
          {featured.map((project) => <CaseStudy key={project.id} project={project} />)}
        </div>

        {otherProjects.length ? (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Outros sistemas em produção</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherProjects.map((project) => <span key={project.id} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/65">{project.name}</span>)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
