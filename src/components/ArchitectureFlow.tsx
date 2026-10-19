import { site } from '@/config/site'

export function ArchitectureFlow() {
  return (
    <section id="arquitetura" className="section">
      <div className="container-max">
        <p className="eyebrow">Representação visual da arquitetura</p>
        <h2 className="section-title mt-4">Arquitetura típica da minha experiência</h2>
        <p className="section-subtitle">
          Uma representação visual elegante do tipo de stack e fluxo com que trabalho em aplicações corporativas.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {site.architecture.map((item, index) => (
            <div key={item.title} className="relative">
              <div className="surface-card h-full rounded-[1.8rem] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">Etapa {index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.detail}</p>
              </div>
              {index < site.architecture.length - 1 ? (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-white/16 xl:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
