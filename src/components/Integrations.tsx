import { site } from '@/config/site'
import { Braces, ExternalLink } from 'lucide-react'

export function Integrations() {
  return (
    <section id="integracoes" className="section">
      <div className="container-max">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <p className="eyebrow">APIs e integrações</p>
            <h2 className="section-title mt-4">APIs, integrações e sistemas corporativos</h2>
            <p className="section-subtitle">
              Desenvolvo e mantenho integrações entre aplicações próprias e sistemas externos, permitindo
              sincronização de dados, automação de processos e redução de tarefas manuais.
            </p>
          </div>

          <div className="space-y-4">
            {site.integrations.map((integration) => (
              <article key={integration.name} className="surface-card rounded-[1.8rem] p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-brand-light">
                      <Braces size={16} />
                      <span className="text-sm font-medium uppercase tracking-[0.18em]">Integração</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{integration.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">{integration.description}</p>
                  </div>
                  {integration.referenceUrl ? (
                    <a
                      href={integration.referenceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary text-sm"
                    >
                      Referência
                      <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  {integration.flow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">{step}</span>
                      {index < integration.flow.length - 1 ? <span className="text-white/28">→</span> : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {integration.highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm text-white/72">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
