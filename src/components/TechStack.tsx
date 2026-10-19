import { site } from '@/config/site'
import { TechBadge } from '@/components/TechBadge'

export function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container-max">
        <p className="eyebrow">Stack tecnológica</p>
        <h2 className="section-title mt-4">Tecnologias organizadas por contexto de uso</h2>
        <p className="section-subtitle">
          O foco está nas tecnologias realmente usadas em aplicações web, integrações, sustentação e operação.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {site.stack.map((group) => (
            <article key={group.title} className="surface-card rounded-[1.8rem] p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{group.emphasis}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
