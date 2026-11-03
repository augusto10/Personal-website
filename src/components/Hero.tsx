import { site } from '@/config/site'
import { ArrowDown, ArrowRight, Check } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="pb-10 pt-24 md:pb-14 md:pt-32">
      <div className="container-max">
        <div className="portfolio-hero relative isolate flex min-h-[38rem] items-center overflow-hidden rounded-[1.75rem] bg-[#101721] shadow-[0_24px_70px_rgba(34,49,40,0.18)] md:min-h-[39rem]">
          <img
            src="/hero-developer.jpg"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,22,0.96)_0%,rgba(8,15,22,0.88)_44%,rgba(8,15,22,0.48)_78%,rgba(8,15,22,0.3)_100%)] max-md:bg-[linear-gradient(90deg,rgba(8,15,22,0.9)_0%,rgba(8,15,22,0.68)_100%)]" />

          <div className="max-w-4xl px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a3e4c1]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Desenvolvedor Full Stack · Brasil
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Sua operação pode funcionar melhor com a tecnologia certa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Sou {site.name}. Desenvolvo sistemas web, APIs e integrações sob medida para simplificar processos e conectar as ferramentas da sua empresa.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-white/75">
              Do entendimento do desafio à implantação e evolução: trabalho próximo de você em cada etapa do projeto.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary bg-[#176b4b] text-white hover:bg-[#10563b]">
                Conversar sobre meu projeto <ArrowRight size={16} />
              </a>
              <a
                href="#projetos"
                className="btn border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Ver projetos
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              {['Sistemas sob medida', 'Integrações com ERP', 'Automação de processos'].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check size={15} className="text-[#a3e4c1]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="#servicos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#17211d]">
          Conheça os serviços
          <ArrowDown size={15} className="ml-2 inline" />
        </a>
      </div>
    </section>
  )
}
