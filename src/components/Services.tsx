import { site } from '@/config/site'
import { AppWindow, Blocks, Cable, Globe2, Smartphone, Workflow } from 'lucide-react'

const solutions = [
  {
    title: 'Sites profissionais',
    icon: Globe2,
    description: 'Sites institucionais e páginas de apresentação com conteúdo claro, identidade própria e navegação responsiva.',
  },
  {
    title: 'Sistemas sob medida',
    icon: AppWindow,
    description: 'Aplicações web que organizam fluxos, informações e tarefas de acordo com a rotina da sua empresa.',
  },
  {
    title: 'Automações',
    icon: Workflow,
    description: 'Rotinas digitais para reduzir etapas manuais e conectar processos que hoje dependem de retrabalho.',
  },
  {
    title: 'Catálogos digitais',
    icon: Blocks,
    description: 'Catálogos pesquisáveis para facilitar a consulta comercial e manter informações alinhadas às fontes de dados.',
  },
  {
    title: 'Integrações com ERP',
    icon: Cable,
    description: 'APIs e integrações para conectar aplicações empresariais com segurança e consistência.',
  },
  {
    title: 'Aplicativos',
    icon: Smartphone,
    description: 'Experiências mobile e aplicações para apoiar serviços, equipes e processos em diferentes dispositivos.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="container-max">
        <div className="services-heading">
          <div>
            <h2 className="section-title">Do site da empresa<br />ao sistema da operação.</h2>
          </div>
          <p className="max-w-2xl leading-7 text-portfolio-muted lg:justify-self-end">
            Sites, sistemas e integrações construídos a partir da rotina da sua equipe, com acompanhamento da ideia à evolução.
          </p>
        </div>

        <div className="solution-list">
          {solutions.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="solution-item"
            >
              <Icon className="solution-icon" size={23} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="service-maintenance">
          <div>
            <h3 className="font-semibold text-portfolio-ink">Precisa manter ou evoluir uma solução existente?</h3>
            <p className="mt-1 text-sm leading-6 text-portfolio-muted">{site.services[3].description}</p>
          </div>
          <a href="#contato" className="btn-primary shrink-0 px-4 py-2.5 text-sm">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}
