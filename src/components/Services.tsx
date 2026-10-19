import { site } from '@/config/site'

export function Services() {
  return (
    <section id="freelancer" className="section">
      <div className="container-max">
        <div className="surface-elevated rounded-[2rem] p-8 md:p-10">
          <p className="eyebrow">Freelancer</p>
          <h2 className="section-title mt-4">Precisa automatizar um processo da sua empresa?</h2>
          <p className="section-subtitle max-w-3xl">
            Desenvolvo sistemas sob medida, integrações e automações para substituir planilhas, tarefas repetitivas e
            processos manuais.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {site.services.map((service) => (
              <div key={service.title} className="rounded-[1.6rem] border border-white/10 bg-white/4 p-5">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">
              Vamos conversar sobre seu projeto
            </a>
            <a href="#cases" className="btn-secondary">
              Ver cases em produção
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
