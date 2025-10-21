import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio • Jose Augusto Nascimento',
  description: 'Desenvolvedor Fullstack — soluções modernas para web e negócios.',
  icons: {
    icon: [{ url: '/favicon.ico' }]
  },
  openGraph: {
    title: 'Jose Augusto Nascimento — Desenvolvedor Fullstack',
    description: 'Portfólio moderno com projetos e serviços: gestão logística, soluções 360, análise de crédito, sites e e-commerce.',
    url: 'https://',
    siteName: 'Portfólio Jose Augusto Nascimento',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Portfólio Jose Augusto' }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}
