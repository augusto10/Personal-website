import { site } from '@/config/site'
import { ArrowRight, Bot, Code2, PlugZap, Wrench } from 'lucide-react'

const serviceIcons = [Code2, PlugZap, Bot, Wrench]

export function Services() {
  return (
    <section id="servicos" className="section py-14 md:py-20">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Como posso ajudar</p>
            <h2 className="section-title mt-4">Da ideia à solução que sua equipe usa.</h2>
          </div>
          <p className="max-w-2xl leading-7 text-[#64716b]">
            Projetos personalizados para reduzir trabalho manual, conectar sistemas e dar mais clareza aos processos da empresa.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {site.services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article key={service.title} className="surface-card rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(34,49,40,0.08)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f1e8] text-[#176b4b]">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#64716b]">{service.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-[#176b4b]/15 bg-[#eaf2e9] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-2xl text-sm leading-6 text-[#46534c]">
            Tem um processo específico em mente? Vamos entender juntos o que faz sentido construir.
          </p>
          <a href="#contato" className="btn-primary shrink-0 px-4 py-2.5 text-sm">
            Falar do meu projeto <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
