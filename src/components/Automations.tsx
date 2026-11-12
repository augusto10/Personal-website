import { site } from '@/config/site'

const examples = [
  {
    title: 'Rotinas logísticas',
    description: 'Automação de atividades e integração com serviços externos para apoiar o acompanhamento da operação.',
  },
  {
    title: 'Dados conectados',
    description: 'Integrações entre aplicações e ERP para disponibilizar informações onde a equipe precisa consultá-las.',
  },
  {
    title: 'Processos mais organizados',
    description: 'Fluxos digitais sob medida para substituir etapas manuais por uma rotina mais clara e acompanhável.',
  },
]

export function Automations() {
  return (
    <section id="automacoes" className="section">
      <div className="container-max">
        <div className="automation-panel">
          <div className="automation-layout">
            <div className="automation-intro">
              <h2 className="section-title">
                Seu ERP conectado ao que vem depois.
              </h2>
              <p>
                Automação não é só conectar ferramentas: é entender o fluxo atual, identificar tarefas manuais e construir uma integração que faça sentido para a rotina da equipe.
              </p>
              <a
                href={site.contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Conversar sobre automação
              </a>
            </div>

            <div className="automation-examples">
              {examples.map(({ title, description }) => (
                <article key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
              <a href="#projetos" className="text-link">
                Ver exemplos nos projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
