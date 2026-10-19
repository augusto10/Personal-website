import type { Metadata } from 'next'
import { site } from '@/config/site'
import './globals.css'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: 'Jose Augusto | Desenvolvedor Full Stack, APIs e Integracoes',
  description:
    'Desenvolvedor Full Stack especializado em aplicacoes web, APIs, integracoes com ERP, automacao de processos e sustentacao de sistemas em producao.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    title: 'Jose Augusto | Desenvolvedor Full Stack, APIs e Integracoes',
    description:
      'Portfolio profissional com cases em producao, integracoes com ERP, automacao de processos e sustentacao de aplicacoes corporativas.',
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
    title: 'Jose Augusto | Desenvolvedor Full Stack, APIs e Integracoes',
    description:
      'Cases em producao, integracoes corporativas, automacao de processos e sustentacao de aplicacoes.',
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
