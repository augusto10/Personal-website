import { site } from '@/config/site'

export function MetricsBand() {
  return (
    <section aria-label="Indicadores do portfólio" className="pb-4">
      <div className="container-max">
        <div className="surface-card grid gap-6 rounded-[2rem] p-6 md:grid-cols-2 xl:grid-cols-4">
          {site.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{metric.value}</div>
              <div className="mt-2 text-sm font-medium text-white">{metric.label}</div>
              <p className="mt-3 text-sm leading-7 text-white/58">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
