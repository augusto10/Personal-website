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
        <h2 className="section-title">Serviços que ofereco</h2>
        <p className="section-subtitle">
          Soluções completas para sua presença digital. Da ideia ao deploy, com foco em qualidade e resultados.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles
            return (
              <div key={s.title} className="glass rounded-3xl p-6 hover:scale-105 transition-transform">
                <Icon className="text-brand mb-4" size={32} />
                <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{s.description}</p>
                <div className="mt-auto">
                  <a href="#contato" className="btn-primary text-sm w-full">Solicitar orçamento</a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p className="text-white/70 mb-6">
              Desenvolvo soluções personalizadas para qualquer necessidade. Conte-me sobre seu projeto e vamos criar algo incrível juntos!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#contato" className="btn-primary">Conversar sobre meu projeto</a>
              <a href="#projetos" className="btn-secondary">Ver projetos realizados</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
