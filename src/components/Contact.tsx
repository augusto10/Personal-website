import { site } from '@/config/site'

export function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container-max">
        <div className="contact-layout">
          <h2 className="section-title">O que sua empresa<br />precisa resolver?</h2>
          <div className="contact-copy">
            <p>Atendimento a empresas em Brasília e região. Conte o que está acontecendo hoje e o que gostaria de melhorar; vamos conversar sobre uma solução possível.</p>
            <div className="hero-actions">
              <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">Conversar pelo WhatsApp</a>
              <a href={site.contacts.email} className="text-link">Enviar e-mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
