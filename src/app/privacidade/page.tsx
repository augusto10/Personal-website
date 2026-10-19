import type { Metadata } from 'next'
import { site } from '@/config/site'

export const metadata: Metadata = { title: 'Privacidade | Portfólio' }

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16">
      <article className="container-max max-w-3xl">
        <a href="/" className="text-sm text-brand-light">← Voltar ao portfólio</a>
        <p className="eyebrow mt-10">Privacidade</p>
        <h1 className="mt-4 text-4xl font-semibold">Aviso de privacidade</h1>
        <div className="mt-8 space-y-6 leading-8 text-white/68">
          <p>Este portfólio registra informações técnicas básicas de acesso: endereço IP, data e hora, página visitada, origem do acesso e identificação do navegador.</p>
          <p>Esses dados são usados exclusivamente para entender o alcance do portfólio, identificar problemas e proteger o site contra abuso. Eles não são vendidos nem usados para publicidade.</p>
          <p>Os registros são mantidos por até 90 dias e ficam disponíveis somente em uma área administrativa protegida. O sinal “Não rastrear” do navegador é respeitado.</p>
          <p>Para solicitar informações ou exclusão de um registro, entre em contato por <a className="text-brand-light" href={site.contacts.email}>e-mail</a>.</p>
        </div>
      </article>
    </main>
  )
}
