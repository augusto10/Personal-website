import type { Metadata } from 'next'
import { site } from '@/config/site'
import './globals.css'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: 'José Augusto | Sistemas Web, APIs e Integrações',
  description:
    'Desenvolvimento de sistemas web sob medida, APIs, integrações com ERP e automação de processos. Conheça projetos em produção e vamos conversar sobre o seu desafio.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    title: 'José Augusto | Sistemas Web, APIs e Integrações',
    description:
      'Sistemas web sob medida, integrações com ERP e automação de processos para empresas. Conheça os projetos e converse sobre o seu desafio.',
    url: site.baseUrl,
    siteName: 'Jose Augusto | Portfolio profissional',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Portfolio profissional de Jose Augusto' },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Augusto | Sistemas Web, APIs e Integrações',
    description:
      'Sistemas web sob medida, integrações corporativas e automação de processos.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
