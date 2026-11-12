import { site } from '@/config/site'

const solutions = [
  {
    problem: 'Sua presença digital não representa a qualidade do seu negócio?',
    title: 'Sites profissionais',
    description: 'Sites institucionais e páginas de apresentação com conteúdo claro, identidade própria e navegação responsiva.',
  },
  {
    problem: 'O processo da equipe não cabe em ferramentas prontas?',
    title: 'Sistemas sob medida',
    description: 'Aplicações web que organizam fluxos, informações e tarefas de acordo com a rotina da sua empresa.',
  },
  {
    problem: 'O time repete tarefas que poderiam seguir um fluxo automático?',
    title: 'Automações',
    description: 'Rotinas digitais para reduzir etapas manuais e conectar processos que hoje dependem de retrabalho.',
  },
  {
    problem: 'Seus produtos são difíceis de consultar e apresentar online?',
    title: 'Catálogos digitais',
    description: 'Catálogos pesquisáveis para facilitar a consulta comercial e manter informações alinhadas às fontes de dados.',
  },
  {
    problem: 'Os sistemas da empresa não compartilham as informações necessárias?',
    title: 'Integrações com ERP',
    description: 'APIs e integrações para conectar aplicações empresariais com segurança e consistência.',
  },
  {
    problem: 'Sua operação também precisa funcionar bem no celular?',
    title: 'Aplicativos',
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
          {solutions.map(({ problem, title, description }) => (
            <article
              key={title}
              className="solution-item"
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="solution-problem">{problem}</p>
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
