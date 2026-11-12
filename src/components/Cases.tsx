import type { ProjectCase } from '@/config/site'
import { CaseStudy } from '@/components/CaseStudy'

const featuredIds = ['pdv-atacado', 'gestao-logistica', 'api-integracao-erp', 'catalogo-esplendor-atacadista', 'solucoes-esplendor']

export function Cases({ projects, databaseWarning }: { projects: ProjectCase[]; databaseWarning?: string }) {
  const featured = projects
    .filter((project) => project.featured ?? featuredIds.includes(project.id))
  const catalogProject = projects.find((project) => project.id === 'catalogo-esplendor-atacadista')
  const featuredProjectIds = new Set([
    ...featured.map((project) => project.id),
    ...(catalogProject ? [catalogProject.id] : []),
  ])
  const orderedProjects = [
    ...(catalogProject ? [catalogProject] : []),
    ...featured,
    ...projects.filter((project) => project.category === 'production' && !featuredProjectIds.has(project.id)),
  ].filter((project, index, list) => list.findIndex((candidate) => candidate.id === project.id) === index)

  return (
    <section id="projetos" className="section projects-section">
      <div id="cases" className="container-max scroll-mt-24">
        <div className="section-heading">
          <h2 className="section-title">Software que já<br />faz parte do trabalho.</h2>
          <p className="max-w-2xl leading-7 text-portfolio-muted md:justify-self-end">
            Cases com imagens dos próprios projetos e contexto do que foi desenvolvido. Sistemas com acesso restrito podem ser apresentados em uma demonstração guiada.
          </p>
        </div>
        {databaseWarning ? <p role="status" className="mt-5 rounded-xl border border-amber-700/20 bg-amber-100 px-4 py-3 text-sm text-amber-950/80">{databaseWarning}</p> : null}

        <div className="project-list">
          {orderedProjects.map((project) => (
            <CaseStudy
              key={project.id}
              project={project}
              featured={project.id === 'catalogo-esplendor-atacadista'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
