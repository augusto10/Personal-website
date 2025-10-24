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
      title: 'Sites Institucionais',
      description: 'Sites profissionais, responsivos e otimizados para SEO. Presença digital que gera credibilidade e resultados.',
      icon: 'globe'
    },
    {
      title: 'Sistemas Empresariais',
      description: 'ERP, CRM, dashboards e sistemas sob medida. Automação que aumenta produtividade e reduz custos.',
      icon: 'truck'
    },
    {
      title: 'Landing Pages',
      description: 'Páginas de alta conversão para campanhas, produtos e serviços. Design focado em resultados.',
      icon: 'sparkles'
    },
    {
      title: 'E-commerce Completo',
      description: 'Lojas virtuais modernas com pagamentos, gestão de estoque e relatórios. Venda mais online.',
      icon: 'shoppingBag'
    },
    {
      title: 'Aplicações Web',
      description: 'Sistemas web personalizados, APIs e integrações. Soluções tecnológicas para qualquer necessidade.',
      icon: 'shield'
    },
    {
      title: 'Consultoria Digital',
      description: 'Análise técnica, arquitetura de sistemas e estratégia digital. Orientação especializada para seu projeto.',
      icon: 'sparkles'
    }
  ],
  projects: [
    {
      title: 'Sistema de Gestão Logística',
      description: 'Plataforma completa para gestão de frotas, rotas e controle logístico empresarial.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://gestao-logistica.vercel.app/',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=60',
      status: 'Em produção',
      client: 'Empresa de Logística',
      features: ['Dashboard em tempo real', 'Gestão de frotas', 'Relatórios avançados', 'Controle de rotas']
    },
    {
      title: 'Análise de Crédito Esplendor',
      description: 'Sistema inteligente para análise de crédito, scoring e avaliação de risco financeiro.',
      stack: ['React', 'Node.js', 'API Integration', 'Chart.js'],
      liveUrl: 'https://analise-credito-esplendor.vercel.app/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=60',
      status: 'Em produção',
      client: 'Esplendor Atacadista',
      features: ['Scoring automático', 'Análise de risco', 'Relatórios detalhados', 'Dashboard executivo']
    },
    {
      title: 'Site Urântia 2027',
      description: 'Site institucional moderno com design responsivo e otimização para SEO.',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://site-urantia-2027.vercel.app/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=60',
      status: 'Público',
      client: 'Organização Urântia',
      features: ['Design responsivo', 'SEO otimizado', 'Performance alta', 'CMS integrado']
    },
    {
      title: 'Soluções Esplendor Atacadista',
      description: 'Portal corporativo com soluções integradas para gestão empresarial e vendas.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      liveUrl: 'http://solucoes.esplendoratacadista.com.br/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=60',
      status: 'Em produção',
      client: 'Esplendor Atacadista',
      features: ['Portal corporativo', 'Gestão de vendas', 'Relatórios gerenciais', 'Integração ERP']
    },
    {
      title: 'Portfólio Profissional',
      description: 'Site pessoal desenvolvido com Next.js, showcasing projetos e serviços.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://personal-website-cyan-gamma-82.vercel.app/',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop&q=60',
      status: 'Público',
      client: 'Projeto pessoal',
      features: ['Design moderno', 'Animações suaves', 'Responsivo', 'Performance otimizada']
    }
  ] as Array<{
    title: string
    description: string
    stack: string[]
    liveUrl: string
    codeUrl?: string
    image?: string
    status: string
    client: string
    features: string[]
  }>
}
