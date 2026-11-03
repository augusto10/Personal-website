import type { ProjectCase } from '@/config/site'
import { CaseStudy } from '@/components/CaseStudy'

const featuredIds = ['pdv-atacado', 'gestao-logistica', 'api-integracao-erp', 'catalogo-esplendor-atacadista', 'solucoes-esplendor']

export function Cases({ projects, databaseWarning }: { projects: ProjectCase[]; databaseWarning?: string }) {
  const featured = projects
    .filter((project) => project.featured ?? featuredIds.includes(project.id))
  const featuredProjectIds = new Set(featured.map((project) => project.id))
  const orderedProjects = [
    ...featured,
    ...projects.filter((project) => project.category === 'production' && !featuredProjectIds.has(project.id)),
  ]

  return (
    <section id="projetos" className="section pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="container-max">
        <p className="eyebrow">Experiência aplicada</p>
        <h2 className="section-title mt-4">Soluções que já fazem parte da operação.</h2>
        <p className="section-subtitle leading-7">Conheça projetos, desafios e soluções desenvolvidos para contextos reais. Nos cases com acesso restrito, posso apresentar o sistema em uma demonstração guiada.</p>
        {databaseWarning ? <p role="status" className="mt-5 rounded-xl border border-amber-700/20 bg-amber-100 px-4 py-3 text-sm text-amber-950/80">{databaseWarning}</p> : null}

        <div className="mt-10 space-y-4">
          {orderedProjects.map((project) => <CaseStudy key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}
