import { site } from '@/config/site'
import { Shield, Globe, ShoppingBag, Truck, Sparkles } from 'lucide-react'

const iconMap = {
  truck: Truck,
  sparkles: Sparkles,
  shield: Shield,
  globe: Globe,
  shoppingBag: ShoppingBag,
} as const

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container-max">
        <h2 className="section-title">Serviços</h2>
        <p className="section-subtitle">De ponta a ponta: da estratégia ao deploy. Foco em performance e resultados.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles
            return (
              <div key={s.title} className="glass rounded-3xl p-6">
                <Icon className="text-brand mb-3" />
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-white/60 mt-1">{s.description}</p>
                <div className="mt-4">
                  <a href="#contato" className="btn-secondary text-sm">Solicitar orçamento</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
