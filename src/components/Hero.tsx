import { site } from '@/config/site'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Braces, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="container-max">
        <div className="hero-layout">
          <div className="hero-intro">
            <p className="hero-label"><Braces size={18} aria-hidden="true" /> Desenvolvimento com propósito</p>
            <h1>Tecnologia que<br />acompanha a<br />sua empresa.</h1>
            <div className="hero-copy">
              <p>Transformo desafios do dia a dia em sites, sistemas e automações. Soluções sob medida, da primeira ideia à operação.</p>
              <div className="hero-actions">
                <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">Vamos falar do seu projeto <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="#projetos" className="hero-project-link">Conheça meu trabalho <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-personal"><span className="hero-personal-mark" aria-hidden="true">JA</span><div><strong>{site.shortName}</strong><span>Desenvolvedor full stack</span></div></div>
          </div>
          <figure className="hero-showcase">
            <div className="hero-image">
              <Image src="/hero-developer.jpg" alt="Ambiente de desenvolvimento com notebook exibindo código e monitor em uma mesa de trabalho" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="hero-caption">
              <Braces size={24} aria-hidden="true" />
              <div><span>Do código ao que importa.</span><p>Mais clareza, conexão e eficiência para o seu negócio.</p></div>
            </figcaption>
          </figure>
        </div>
        <div className="hero-signoff"><span>Sites profissionais</span><span>Sistemas sob medida</span><span>Automações e integrações</span><span className="hero-location"><MapPin size={15} aria-hidden="true" /> Brasília e região</span></div>
      </div>
    </section>
  )
}
