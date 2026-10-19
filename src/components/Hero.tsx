import { site } from '@/config/site'
import { ArrowRight, CheckCircle2, Github } from 'lucide-react'

export function Hero() {
  const strengths = ['Sistemas em produção', 'Integrações com ERP e APIs', 'Automação de processos', 'Suporte e evolução contínua']

  return (
    <section id="home" className="section pt-32 md:pt-40">
      <div className="container-max">
        <div className="hero-shell rounded-[2.4rem] p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 xl:grid-cols-[1.2fr,0.8fr] xl:items-end">
            <div>
              <p className="eyebrow">Desenvolvedor Full Stack</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl xl:text-[4.2rem]">{site.name}</h1>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight text-white md:text-4xl">
                Transformo processos de empresas em sistemas simples, integrados e prontos para a operação real.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                Desenvolvimento web, APIs, automações e sustentação de aplicações — da necessidade ao deploy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projetos" className="btn-primary">Ver projetos <ArrowRight size={16} /></a>
                <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">Falar comigo <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/42">Experiência prática</p>
              <div className="mt-6 space-y-4">
                {strengths.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/78">
                    <CheckCircle2 size={18} className="shrink-0 text-brand-light" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
