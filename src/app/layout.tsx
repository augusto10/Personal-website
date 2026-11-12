import type { Metadata } from 'next'
import { site } from '@/config/site'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import localFont from 'next/font/local'

const archivo = localFont({
  src: './fonts/archivo-latin.woff2',
  weight: '400 600',
  variable: '--font-archivo',
  display: 'swap',
})
const sourceSans = localFont({
  src: './fonts/source-sans-latin.woff2',
  weight: '400 600',
  variable: '--font-source',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: 'José Augusto | Sites, Sistemas e Automações em Brasília',
  description:
    'Sites profissionais, sistemas sob medida, automações, aplicativos, catálogos digitais e integração com ERP para empresas em Brasília. Conheça projetos reais.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    title: 'José Augusto | Sites, Sistemas e Automações em Brasília',
    description:
      'Desenvolvimento de sites, sistemas sob medida, automações, aplicativos e catálogos digitais para empresas em Brasília.',
    url: site.baseUrl,
    siteName: 'José Augusto | Portfólio profissional',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Portfolio profissional de Jose Augusto' },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Augusto | Sites, Sistemas e Automações em Brasília',
    description:
      'Sites profissionais, sistemas sob medida, automações e integrações com ERP para empresas em Brasília.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${sourceSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
