export const site = {
  name: 'Jose Augusto Nascimento',
  tagline: 'Desenvolvedor Fullstack — soluções modernas para web e negócios',
  highlight: '#6E56CF',
  contacts: {
    whatsapp: 'https://wa.me/5561981483122?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20um%20or%C3%A7amento.',
    telegram: 'https://t.me/', // adicione seu usuário, ex: https://t.me/augusto_dev
    email: 'mailto:augustonetinho@outlook.com?subject=Or%C3%A7amento&body=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.'
  },
  socials: {
    github: '',
    linkedin: ''
  },
  services: [
    {
      title: 'Gestão Logística',
      description: 'Sistemas e dashboards para otimizar rotas, custos e KPIs logísticos.',
      icon: 'truck'
    },
    {
      title: 'Soluções 360',
      description: 'Soluções ponta a ponta: front, backend, integrações e automações.',
      icon: 'sparkles'
    },
    {
      title: 'Análise de Crédito',
      description: 'Ferramentas para scoring, antifraude e tomada de decisão.',
      icon: 'shield'
    },
    {
      title: 'Sites Institucionais',
      description: 'Sites rápidos, responsivos e com SEO pronto para ranquear.',
      icon: 'globe'
    },
    {
      title: 'E-commerce',
      description: 'Lojas modernas com foco em conversão e performance.',
      icon: 'shoppingBag'
    }
  ],
  projects: [
    {
      title: 'Dashboard de Gestão Logística',
      description: 'Sistema completo para otimizar rotas, rastreamento e KPIs em tempo real.',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
      liveUrl: 'https://logistica-dashboard.vercel.app', // substitua pelo seu deploy real
      codeUrl: 'https://github.com/augusto10/logistica-dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=60'
    },
    {
      title: 'Plataforma de Análise de Crédito',
      description: 'Ferramenta para scoring, antifraude e tomada de decisão automatizada.',
      stack: ['React', 'Python', 'FastAPI', 'TensorFlow'],
      liveUrl: 'https://credito-analysis.vercel.app', // substitua pelo seu deploy real
      codeUrl: 'https://github.com/augusto10/credito-analysis',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=60'
    },
    {
      title: 'E-commerce Soluções 360',
      description: 'Loja online com integrações, pagamentos e gestão de estoque.',
      stack: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-360.vercel.app', // substitua pelo seu deploy real
      codeUrl: 'https://github.com/augusto10/ecommerce-360',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=60'
    },
    {
      title: 'Site Institucional Corporativo',
      description: 'Site responsivo com SEO otimizado e design moderno.',
      stack: ['Next.js', 'Sanity CMS', 'Vercel'],
      liveUrl: 'https://site-institucional.vercel.app', // substitua pelo seu deploy real
      codeUrl: 'https://github.com/augusto10/site-institucional',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=60'
    }
  ] as Array<{
    title: string
    description: string
    stack: string[]
    liveUrl: string
    codeUrl?: string
    image?: string
  }>
}
