import { site } from '@/config/site'

export function StructuredData() {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.baseUrl,
    email: site.contacts.email.replace('mailto:', '').split('?')[0],
    worksFor: {
      '@type': 'Organization',
      name: 'Projetos corporativos e freelancer',
    },
    knowsAbout: [
      'Desenvolvimento Full Stack',
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
