import { site } from '@/config/site'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#10251d] p-8 text-center text-white shadow-[0_24px_70px_rgba(16,37,29,0.18)] md:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-white/10" />
          <p className="relative eyebrow text-[#a3e4c1]">Próximo passo</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Tem um desafio que sua equipe precisa resolver?</h2>
          <p className="relative mx-auto mt-6 max-w-2xl leading-7 text-white/75">Conte o que está acontecendo hoje e o que gostaria de melhorar. Vamos conversar sobre uma solução possível.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary bg-[#a3e4c1] text-[#10251d] hover:bg-white"><MessageCircle size={17} /> Conversar pelo WhatsApp <ArrowRight size={15} /></a>
            <a href={site.contacts.email} className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10"><Mail size={17} /> Enviar e-mail</a>
          </div>
        </div>
      </div>
    </section>
  )
}
