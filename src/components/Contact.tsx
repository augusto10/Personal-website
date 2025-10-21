import { site } from '@/config/site'

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container-max text-center">
        <h2 className="section-title">Vamos conversar?</h2>
        <p className="section-subtitle mx-auto">Está com uma ideia ou precisa de um orçamento? Fale comigo pelos canais abaixo.</p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={site.contacts.whatsapp} target="_blank" className="btn-primary">💬 WhatsApp</a>
          <a href={site.contacts.telegram} target="_blank" className="btn-secondary">✈️ Telegram</a>
          <a href={site.contacts.email} className="btn-secondary">✉️ E-mail</a>
        </div>

        <p className="text-white/40 text-sm mt-6">Resposta rápida. Horário comercial (BRT).</p>
      </div>
    </section>
  )
}
