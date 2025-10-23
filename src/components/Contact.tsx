import { site } from '@/config/site'

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container-max">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="section-title">Pronto para começar seu projeto?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Transforme sua ideia em realidade digital! Entre em contato para um orçamento personalizado e sem compromisso.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">💬 WhatsApp</h3>
              <p className="text-white/70 text-sm mb-4">Resposta rápida e atendimento personalizado</p>
              <a href={site.contacts.whatsapp} target="_blank" className="btn-primary w-full">Chamar agora</a>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">✉️ E-mail</h3>
              <p className="text-white/70 text-sm mb-4">Para propostas detalhadas e documentos</p>
              <a href={site.contacts.email} className="btn-secondary w-full">Enviar e-mail</a>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">✈️ Telegram</h3>
              <p className="text-white/70 text-sm mb-4">Chat direto e comunicação ágil</p>
              <a href={site.contacts.telegram} target="_blank" className="btn-secondary w-full">Conversar</a>
            </div>
          </div>

          <div className="bg-brand/10 rounded-2xl p-6 border border-brand/20">
            <h3 className="text-xl font-bold text-brand mb-3">🚀 Por que escolher meus serviços?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>✅ Qualidade garantida</strong><br />
                <span className="text-white/70">Código limpo e documentado</span>
              </div>
              <div>
                <strong>⚡ Entrega rápida</strong><br />
                <span className="text-white/70">Prazos cumpridos rigorosamente</span>
              </div>
              <div>
                <strong>🎯 Foco em resultados</strong><br />
                <span className="text-white/70">Soluções que geram valor</span>
              </div>
              <div>
                <strong>🔧 Suporte contínuo</strong><br />
                <span className="text-white/70">Acompanhamento pós-entrega</span>
              </div>
            </div>
          </div>

          <p className="text-white/60 text-sm mt-6">
            📞 Atendimento: Segunda a Sexta, 9h às 18h (Horário de Brasília)<br />
            💬 WhatsApp: Resposta em até 2 horas
          </p>
        </div>
      </div>
    </section>
  )
}
