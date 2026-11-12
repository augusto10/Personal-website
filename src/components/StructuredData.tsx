import { site } from '@/config/site'

export function StructuredData() {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description:
      'Desenvolvimento de sites profissionais, sistemas sob medida, aplicativos, automações e integrações com ERP para empresas em Brasília, DF.',
    url: site.baseUrl,
    email: site.contacts.email.replace('mailto:', '').split('?')[0],
    worksFor: {
      '@type': 'Organization',
      name: 'Projetos corporativos e freelancer',
    },
    knowsAbout: [
      'Sites profissionais',
      'Desenvolvimento Full Stack',
      'Aplicativos',
      'Catálogos digitais',
      'APIs REST',
      'Integrações com ERP',
      'Automação de processos',
      'Sustentação de aplicações',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
