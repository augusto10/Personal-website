import { site } from '@/config/site'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container-max">
        <div className="surface-elevated rounded-[2rem] p-8 text-center md:p-14">
          <p className="eyebrow">Vamos conversar</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Precisa desenvolver um sistema ou está buscando um profissional para o time?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/62">Conte um pouco sobre o desafio. Respondo por WhatsApp ou e-mail.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} /></a>
            <a href={site.contacts.email} className="btn-secondary"><Mail size={17} /> E-mail</a>
          </div>
        </div>
      </div>
    </section>
  )
}
