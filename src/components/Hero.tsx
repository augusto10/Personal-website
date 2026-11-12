import { site } from '@/config/site'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="container-max">
        <div className="hero-intro">
          <h1>Sites e sistemas<br />para sua operação.</h1>
          <div className="hero-copy">
            <p>Sites, sistemas, automações, aplicativos e integrações com ERP para empresas.</p>
            <div className="hero-actions">
              <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">Conversar pelo WhatsApp</a>
              <a href="#projetos" className="text-link">Ver projetos reais</a>
            </div>
          </div>
        </div>
        <figure className="hero-showcase">
          <div className="hero-image">
            <Image src="/projects/catalogo-esplendor/home-hero.png" alt="Página inicial do catálogo digital Esplendor Atacadista" fill priority sizes="(max-width: 767px) 92vw, (max-width: 1400px) 72vw, 1000px" className="object-cover object-top" />
          </div>
          <figcaption className="hero-caption">
            <span>Catálogo Esplendor Atacadista</span>
            <p>Consulta de produtos.<br />ERP em tempo real.</p>
            <a href="#projetos" className="text-link">Conhecer o projeto</a>
          </figcaption>
        </figure>
        <div className="hero-signoff"><span>{site.shortName}, desenvolvimento de soluções digitais</span><span>Brasília e região</span></div>
      </div>
    </section>
  )
}
