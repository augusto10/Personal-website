import { site } from '@/config/site'
import { Blocks, Cog, PlugZap, ShieldCheck } from 'lucide-react'

const icons = [Blocks, PlugZap, Cog, ShieldCheck]

export function ProductionExperience() {
  return (
    <section id="producao" className="section pt-4">
      <div className="container-max">
        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div>
            <p className="eyebrow">Experiência em produção</p>
            <h2 className="section-title mt-4">Experiência que vai além do desenvolvimento</h2>
            <p className="section-subtitle max-w-2xl">
              Além de desenvolver novos projetos, atuo diretamente na sustentação e evolução de sistemas utilizados
              diariamente em ambiente de produção.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              Minha atuação envolve levantamento de necessidades com usuários e áreas da empresa, desenvolvimento Full
              Stack, integração com ERP e APIs externas, bancos de dados, deploy, suporte aos usuários, resolução de
              incidentes e implementação contínua de novas funcionalidades.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {site.productionHighlights.map((item, index) => {
              const Icon = icons[index]
              return (
                <div key={item.title} className="surface-card rounded-[1.8rem] p-6">
                  <Icon className="text-brand-light" size={22} />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
