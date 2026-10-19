export type ProjectStatus = 'production' | 'development' | 'freelance' | 'lab'

export type ProjectImage = {
  src: string
  alt: string
  placeholder?: boolean
  kind?: 'image' | 'video'
  poster?: string
}

export type ProjectCase = {
  id: string
  name: string
  category: ProjectStatus
  statusLabel: string
  url: string
  featured?: boolean
  privateAccess?: boolean
  summary: string
  description: string
  clientContext: string
  problem: string
  solution: string
  role: string[]
  features: string[]
  technologies: string[]
  integrations: string[]
  technicalChallenges: string[]
  image: ProjectImage
  gallery: ProjectImage[]
  publicNote?: string
}

type IntegrationItem = {
  name: string
  description: string
  flow: string[]
  highlights: string[]
  referenceUrl?: string
}

type StackGroup = {
  title: string
  emphasis: string
  items: string[]
}

export const site = {
  name: 'José Augusto do Nascimento Neto',
  shortName: 'José Augusto',
  role: 'Desenvolvedor Full Stack | APIs | Integrações | Automação',
  headline: 'Desenvolvo e sustento sistemas que fazem parte da operação real de empresas.',
  summary:
    'Atuo no desenvolvimento Full Stack de aplicações web, APIs, integrações com ERP, automação de processos e sistemas corporativos desde o levantamento da necessidade até deploy, sustentação e evolução em produção.',
  experienceSummary:
    'Atuação combinando suporte de TI, sustentação de sistemas e desenvolvimento de soluções para automatização e melhoria de processos internos.',
  baseUrl: 'https://augustodevfullstack.vercel.app',
  contacts: {
    whatsapp:
      'https://wa.me/5561981483122?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20quero%20conversar%20sobre%20um%20projeto.',
    telegram: 'https://t.me/',
    email:
      'mailto:augustonetinho@outlook.com?subject=Contato%20pelo%20portfólio&body=Olá,%20vim%20pelo%20seu%20portfólio%20e%20quero%20conversar.',
  },
  socials: {
    linkedin: '',
  },
  recruiterCtas: [
    { label: 'Ver projetos em produção', href: '#cases' },
    { label: 'Conhecer minha experiência', href: '#experiencia' },
    { label: 'Falar comigo', href: '#contato' },
  ],
  productionHighlights: [
    {
      title: 'Aplicações em produção',
      description: 'Sistemas utilizados diariamente por usuários e áreas da empresa.',
    },
    {
      title: 'APIs e integrações',
      description: 'Integração com ERP, transportadoras e plataformas corporativas.',
    },
    {
      title: 'Automação',
      description: 'Ferramentas criadas para reduzir tarefas manuais e acelerar operações.',
    },
    {
      title: 'Sustentação',
      description: 'Correções, melhorias, deploys e acompanhamento contínuo em produção.',
    },
  ],
  metrics: [
    {
      label: 'Aplicações em produção',
      value: '6',
      detail: 'Cases cadastrados neste portfólio com uso operacional real.',
    },
    {
      label: 'Contextos de integração',
      value: '3',
      detail: 'ERP corporativo, SSW e APIs empresariais externas.',
    },
    {
      label: 'Categorias de atuação',
      value: '4',
      detail: 'Desenvolvimento, integrações, automação e sustentação.',
    },
    {
      label: 'Frentes de stack',
      value: '5',
      detail: 'Frontend, backend, dados, cloud/devops e mobile.',
    },
  ],
  services: [
    {
      title: 'Sistemas web sob medida',
      description: 'Aplicações internas, painéis administrativos e fluxos operacionais adaptados ao processo da empresa.',
    },
    {
      title: 'APIs e integrações',
      description: 'Integrações com ERP, APIs corporativas, autenticação, sincronização e tratamento de falhas.',
    },
    {
      title: 'Automação de processos',
      description: 'Substituição de planilhas e tarefas manuais por rotinas mais previsíveis e escaláveis.',
    },
    {
      title: 'Sustentação e evolução',
      description: 'Correções, manutenção, novas funcionalidades e acompanhamento contínuo de sistemas em produção.',
    },
  ],
  experienceResponsibilities: [
    'Desenvolvimento de aplicações web utilizadas em produção',
    'Levantamento de necessidades com usuários e áreas da empresa',
    'Criação de novas funcionalidades e melhorias contínuas',
    'Sustentação de sistemas e acompanhamento pós-deploy',
    'Desenvolvimento e consumo de APIs REST',
    'Integração com ERP, transportadoras e outras plataformas',
    'Bancos de dados, autenticação e permissões',
    'Deploy, cloud, versionamento e rotinas de CI/CD',
    'Suporte aos usuários, diagnóstico e resolução de incidentes',
    'Apoio em hardware, redes, conectividade e equipamentos da operação',
  ],
  deliveryFlow: [
    'Necessidade',
    'Planejamento',
    'Desenvolvimento',
    'Testes',
    'Deploy',
    'Produção',
    'Suporte',
    'Evolução',
  ],
  integrations: [
    {
      name: 'ERP corporativo',
      description:
        'Integrações entre aplicações próprias e a API do ERP para consulta, sincronização e apoio às operações.',
      flow: ['Aplicação web', 'API REST', 'ERP', 'Banco e serviços'],
      highlights: [
        'Consumo da API e autenticação',
        'Tratamento de dados e erros',
        'Sincronização entre sistemas',
        'Manutenção contínua das integrações',
      ],
    },
    {
      name: 'SSW',
      description:
        'Integrações ligadas ao contexto de transporte e logística para automatizar operações e consolidar dados.',
      flow: ['Aplicações internas', 'APIs logísticas', 'Operação de transporte'],
      highlights: [
        'Consumo de APIs',
        'Tratamento de respostas e exceções',
        'Integração com aplicações internas',
        'Automação de rotinas logísticas',
      ],
      referenceUrl: 'https://ssw.inf.br/',
    },
    {
      name: 'Máxima Sistemas',
      description:
        'Experiência integrando aplicações com APIs de sistemas empresariais externos sem expor tokens ou dados internos.',
      flow: ['Sistema interno', 'API corporativa', 'Processos empresariais'],
      highlights: [
        'Integração com sistemas de terceiros',
        'Mapeamento de payloads',
        'Segurança e controle de acesso',
        'Evolução de integrações em produção',
      ],
      referenceUrl: 'https://intpdv.solucoesmaxima.com.br:81/swagger/index.html',
    },
  ] as IntegrationItem[],
  architecture: [
    { title: 'Usuários', detail: 'Times operacionais, comercial, suporte e gestão' },
    { title: 'Aplicações web', detail: 'React, Next.js, TypeScript e interfaces administrativas' },
    { title: 'Backend e APIs', detail: 'Node.js, APIs REST e serviços de automação' },
    { title: 'Integrações', detail: 'ERP, SSW e APIs corporativas externas' },
    { title: 'Banco de dados', detail: 'PostgreSQL, Neon e dados operacionais' },
    { title: 'Cloud', detail: 'Vercel, AWS e rotinas de deploy contínuo' },
  ],
  stack: [
    {
      title: 'Frontend',
      emphasis: 'Interfaces de operação, dashboards e aplicações web em produção.',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      title: 'Backend',
      emphasis: 'APIs, regras de negócio, integrações e serviços corporativos.',
      items: ['Node.js', 'Express', 'Python', 'FastAPI', 'PHP', 'Java', 'Spring Boot'],
    },
    {
      title: 'Banco de dados',
      emphasis: 'Modelagem, consulta, persistência e apoio à análise operacional.',
      items: ['PostgreSQL', 'MongoDB', 'Neon'],
    },
    {
      title: 'DevOps e Cloud',
      emphasis: 'Deploy, versionamento, pipelines e ambientes de execução.',
      items: ['Vercel', 'AWS', 'Docker', 'Git', 'GitHub', 'GitLab', 'CI/CD'],
    },
    {
      title: 'Mobile',
      emphasis: 'Experiência complementar para produtos e fluxos multiplataforma.',
      items: ['React Native', 'Flutter', 'Ionic'],
    },
  ] as StackGroup[],
  projectCases: [
    {
      id: 'catalogo-esplendor-atacadista',
      name: 'Catálogo Esplendor Atacadista',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://catalogo.esplendoratacadista.com.br/',
      summary: 'Catálogo online que apoia a consulta comercial de produtos em ambiente real.',
      description:
        'Aplicação web desenvolvida para facilitar a consulta de produtos e apoiar o processo comercial da empresa.',
      clientContext: 'Operação comercial e apoio à equipe de vendas.',
      problem:
        'A operação precisava de uma forma mais rápida e organizada de consultar produtos e informações comerciais.',
      solution:
        'Foi criada uma aplicação web para centralizar catálogo, pesquisa e acesso a dados importantes para o processo de vendas.',
      role: [
        'Desenvolvimento',
        'Manutenção',
        'Implementação de novas funcionalidades',
        'Integração com dados da empresa',
        'Deploy',
        'Sustentação',
      ],
      features: [
        'Catálogo online',
        'Consulta de produtos',
        'Informações comerciais',
        'Apoio à equipe de vendas',
        'Uso em ambiente real',
        'Evolução contínua',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      integrations: ['ERP corporativo', 'Dados internos da empresa'],
      technicalChallenges: [
        'Organizar informação comercial para uso rápido no dia a dia',
        'Evoluir o sistema sem interromper a rotina dos usuários',
      ],
      image: {
        src: '/projects/catalogo-esplendor/home-hero.png',
        alt: 'Tela principal do Catalogo Esplendor Atacadista',
        placeholder: false,
      },
      gallery: [
        {
          src: '/projects/catalogo-esplendor/placeholder-main.png',
          alt: 'Catalogo completo com grade de produtos',
          placeholder: false,
        },
        {
          src: '/projects/catalogo-esplendor/busca-produtos.png',
          alt: 'Resultado de busca de produtos no Catalogo Esplendor Atacadista',
          placeholder: false,
        },
        {
          src: '/projects/catalogo-esplendor/modal-produto.png',
          alt: 'Modal de descricao de produto no Catalogo Esplendor Atacadista',
          placeholder: false,
        },
        {
          src: '/projects/catalogo-esplendor/dashboard-placeholder.png',
          alt: 'Visao de categorias do Catalogo Esplendor Atacadista',
          placeholder: false,
        },
        {
          src: '/projects/catalogo-esplendor/produtos-placeholder.svg',
          alt: 'Placeholder para listagem complementar de produtos do Catalogo Esplendor Atacadista',
          placeholder: true,
        },
      ],
    },
    {
      id: 'pdv-atacado',
      name: 'PDV Atacado',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://pdvatacadoapp.vercel.app/',
      privateAccess: true,
      summary: 'Aplicação utilizada na operação comercial de atacado.',
      description: 'Aplicação utilizada na operação comercial de atacado.',
      clientContext: 'Fluxos comerciais com acesso restrito.',
      problem:
        'A operação precisava de um sistema próprio para apoiar o atendimento e as rotinas comerciais de atacado.',
      solution:
        'Desenvolvimento Full Stack com manutenção contínua, correções, deploy e evolução funcional conforme a necessidade da operação.',
      role: [
        'Desenvolvimento Full Stack',
        'Manutenção',
        'Implementação de novas funcionalidades',
        'Correção de problemas',
        'Deploy',
        'Sustentação da aplicação',
      ],
      features: [
        'Fluxos comerciais de atacado',
        'Apoio operacional',
        'Evolução contínua',
        'Correções e manutenção',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Vercel'],
      integrations: ['Sistemas internos', 'ERP corporativo'],
      technicalChallenges: [
        'Garantir sustentação contínua para uma aplicação com uso operacional',
        'Exibir o case com segurança sem expor credenciais ou acesso interno',
      ],
      image: {
        src: '/projects/pdv-atacado/novo-produto.webp',
        alt: 'Busca e seleção de produtos no PDV Atacado',
        placeholder: false,
      },
      gallery: [
        {
          src: '/projects/pdv-atacado/carrinho-pedido.webp',
          alt: 'Carrinho e resumo de pedido no PDV Atacado',
        },
        {
          src: '/projects/pdv-atacado/pedidos-liberados.webp',
          alt: 'Lista de pedidos liberados no PDV Atacado',
        },
        {
          src: '/projects/pdv-atacado/login.png',
          alt: 'Tela de login do PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/dashboard-hero.png',
          alt: 'Dashboard principal do PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/pedidos-lista.png',
          alt: 'Lista de pedidos do PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/cupom-pedido.png',
          alt: 'Cupom ou detalhes de pedido no PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/entregas-lista.png',
          alt: 'Tela de entregas do PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/modal-entrega.png',
          alt: 'Modal de entrega no PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/novo-pedido.png',
          alt: 'Tela de novo pedido no PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/novo-pedido-produto.png',
          alt: 'Adicao de produto em novo pedido no PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/produtos-lista.png',
          alt: 'Lista de produtos do PDV Atacado',
          placeholder: false,
        },
        {
          src: '/projects/pdv-atacado/operacao-placeholder.png',
          alt: 'Tela operacional do PDV Atacado',
          placeholder: false,
        },
      ],
      publicNote:
        'Aplicação corporativa em produção. O acesso ao ambiente real é restrito por segurança e confidencialidade.',
    },
    {
      id: 'vendas-marketplace',
      name: 'Vendas Marketplace',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://vendas-marketplace.vercel.app/',
      featured: true,
      privateAccess: true,
      summary: 'Sistema corporativo para centralizar e analisar operações de vendas em marketplaces.',
      description:
        'Sistema corporativo desenvolvido para centralizar e analisar operações de vendas em marketplaces.',
      clientContext: 'Consolidação de dados provenientes de marketplaces e sistemas empresariais.',
      problem:
        'A operação precisava consolidar dados dispersos para acompanhamento de vendas, análise e tomada de decisão.',
      solution:
        'Foi desenvolvido um sistema com dashboards, processamento de dados, relatórios e integrações entre diferentes fontes.',
      role: [
        'Desenvolvimento Full Stack',
        'Banco de dados',
        'APIs',
        'Integrações',
        'Manutenção',
        'Sustentação',
        'Criação de novas funcionalidades',
        'Deploy',
        'Acompanhamento em produção',
      ],
      features: [
        'Dashboards',
        'Processamento de dados',
        'Relatórios',
        'Consolidação de vendas',
        'Acompanhamento operacional',
        'Autenticação',
        'Banco de dados',
        'Automação de processos',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Neon', 'Vercel'],
      integrations: ['Marketplaces', 'ERP corporativo', 'APIs internas'],
      technicalChallenges: [
        'Consolidar dados de fontes diferentes com consistência operacional',
        'Manter desempenho e segurança em uma aplicação com acesso corporativo restrito',
      ],
      image: {
        src: '/projects/vendas-marketplace/dashboard.webp',
        alt: 'Painel de vendas do Vendas Marketplace com informações sensíveis ocultadas',
      },
      gallery: [
        {
          src: '/projects/vendas-marketplace/ranking-uf.webp',
          alt: 'Ranking de vendas por estado no Vendas Marketplace',
        },
        {
          src: '/projects/vendas-marketplace/financeiro.webp',
          alt: 'Resumo financeiro do Vendas Marketplace com valores ocultados',
        },
        {
          src: '/projects/vendas-marketplace/movimentacoes.webp',
          alt: 'Movimentações financeiras do Vendas Marketplace com dados ocultados',
        },
        {
          src: '/projects/vendas-marketplace/pedidos.webp',
          alt: 'Lista de pedidos do Vendas Marketplace com identificadores ocultados',
        },
        {
          src: '/projects/vendas-marketplace/detalhe-pedido.webp',
          alt: 'Detalhes de pedido no Vendas Marketplace com informações pessoais e valores ocultados',
        },
        {
          src: '/projects/vendas-marketplace/login.webp',
          alt: 'Tela de acesso do Vendas Marketplace com credenciais ocultadas',
        },
      ],
      publicNote: 'O acesso ao sistema é restrito, mas posso fazer uma apresentação guiada se tiver interesse.',
    },
    {
      id: 'varejo-web',
      name: 'Varejo Web',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://varejp-web.vercel.app/',
      summary: 'Aplicação web de apoio a processos internos relacionados à operação de varejo.',
      description: 'Aplicação web utilizada para apoiar processos internos relacionados à operação de varejo.',
      clientContext: 'Processos internos com integração a sistemas da operação.',
      problem:
        'As rotinas internas precisavam de um suporte digital mais estruturado para reduzir atritos operacionais.',
      solution:
        'Aplicação evoluída com correções, novas funcionalidades e integração com sistemas internos da empresa.',
      role: [
        'Desenvolvimento',
        'Sustentação',
        'Correções',
        'Evolução',
        'Novas funcionalidades',
        'Integração com sistemas internos',
      ],
      features: [
        'Apoio a processos internos',
        'Integração com sistemas internos',
        'Melhorias contínuas',
        'Uso operacional real',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'APIs REST'],
      integrations: ['Sistemas internos', 'ERP corporativo'],
      technicalChallenges: [
        'Evoluir fluxos internos sem comprometer a rotina das áreas usuárias',
        'Ajustar integrações e correções em ambiente ativo',
      ],
      image: {
        src: '/projects/varejo-web/placeholder-main.png',
        alt: 'Screenshot do Varejo Web',
        placeholder: false,
      },
      gallery: [
        {
          src: '/projects/varejo-web/login.png',
          alt: 'Tela de login do Varejo Web',
          placeholder: false,
        },
        {
          src: '/projects/varejo-web/dashboard-hero.png',
          alt: 'Dashboard principal do Varejo Web',
          placeholder: false,
        },
        {
          src: '/projects/varejo-web/fluxos-placeholder.png',
          alt: 'Tela principal do Varejo Web',
          placeholder: false,
        },
      ],
    },
    {
      id: 'gestao-logistica',
      name: 'Gestão Logística',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://gestao-logistica.vercel.app/',
      summary: 'Sistema para apoiar e automatizar atividades ligadas à operação logística.',
      description:
        'Sistema desenvolvido para apoiar e automatizar atividades relacionadas à operação logística.',
      clientContext: 'Rotinas logísticas com integração a serviços externos quando aplicável.',
      problem:
        'A operação logística exigia mais controle, padronização e automação para reduzir dependência de processos manuais.',
      solution:
        'Foi desenvolvido um sistema com foco em automação, integrações de APIs e suporte contínuo à operação.',
      role: [
        'Desenvolvimento Full Stack',
        'Integração de APIs',
        'Automação',
        'Manutenção',
        'Implantação',
        'Sustentação',
      ],
      features: [
        'Apoio à operação logística',
        'Automação de atividades',
        'Integrações externas',
        'Implantação e sustentação',
      ],
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'REST APIs'],
      integrations: ['SSW', 'Sistemas externos', 'ERP corporativo'],
      technicalChallenges: [
        'Automatizar atividades logísticas mantendo rastreabilidade operacional',
        'Integrar dados externos com segurança e previsibilidade',
      ],
      image: {
        src: '/projects/gestao-logistica/placeholder-main.png',
        alt: 'Screenshot do Gestão Logística',
        placeholder: false,
      },
      gallery: [
        {
          src: '/projects/gestao-logistica/login.png',
          alt: 'Tela de login do Gestão Logística',
          placeholder: false,
        },
        {
          src: '/projects/gestao-logistica/dashboard-hero.png',
          alt: 'Dashboard principal do Gestão Logística',
          placeholder: false,
        },
        {
          src: '/projects/gestao-logistica/notas.png',
          alt: 'Tela de consulta de notas do Gestão Logística',
          placeholder: false,
        },
        {
          src: '/projects/gestao-logistica/integracoes-placeholder.png',
          alt: 'Tela principal do Gestão Logística',
          placeholder: false,
        },
      ],
    },
    {
      id: 'solucoes-esplendor',
      name: 'Suporte 360°',
      category: 'production',
      statusLabel: 'Em produção',
      url: 'https://solucoes.esplendoratacadista.com.br/',
      summary: 'Plataforma de suporte e ferramentas internas para atendimento e operações.',
      description:
        'Plataforma interna desenvolvida para apoiar o suporte, o atendimento e as operações da empresa.',
      clientContext: 'Suporte aos usuários e operação corporativa.',
      problem:
        'A empresa precisava concentrar ferramentas e fluxos internos de suporte em uma base mais organizada e acessível.',
      solution:
        'Criação e evolução de um portal interno com foco em sustentação, atendimento e apoio à rotina operacional.',
      role: [
        'Desenvolvimento',
        'Suporte aos usuários',
        'Manutenção',
        'Implementação de funcionalidades',
        'Sustentação do ambiente',
      ],
      features: [
        'Portal interno',
        'Apoio ao suporte',
        'Ferramentas operacionais',
        'Evolução contínua',
      ],
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      integrations: ['Sistemas internos', 'Fluxos de suporte'],
      technicalChallenges: [
        'Dar suporte contínuo a um conjunto de soluções usado internamente',
        'Manter o ambiente evoluindo sem perder estabilidade',
      ],
      image: {
        src: '/projects/solucoes-esplendor/dashboard-hero.png',
        alt: 'Painel principal do Suporte 360°',
        placeholder: false,
      },
      gallery: [
        {
          src: '/projects/suporte-360/meus-pedidos.webp',
          alt: 'Painel de pedidos recebidos do Suporte 360°',
        },
        {
          src: '/projects/suporte-360/rastreamento-pedido.webp',
          alt: 'Rastreamento e etapas de entrega de um pedido no Suporte 360°',
        },
        {
          src: '/projects/solucoes-esplendor/login.png',
          alt: 'Tela de login do Suporte 360°',
          placeholder: false,
        },
        {
          src: '/projects/solucoes-esplendor/portal-placeholder.png',
          alt: 'Tela principal do portal Suporte 360°',
          placeholder: false,
        },
      ],
    },
    {
      id: 'portfolio-profissional',
      name: 'Portfólio profissional',
      category: 'lab',
      statusLabel: 'Projeto pessoal',
      url: 'https://augustodevfullstack.vercel.app/',
      summary: 'Projeto pessoal usado para apresentar experiência, cases e posicionamento profissional.',
      description:
        'Portfólio desenvolvido para apresentar cases, stack, experiência com produção e atuação como freelancer.',
      clientContext: 'Projeto pessoal e laboratório de comunicação profissional.',
      problem:
        'Era necessário transformar uma apresentação genérica em um portfólio que comunicasse experiência prática e valor de negócio.',
      solution:
        'Refatoração da estrutura, do conteúdo e da narrativa para destacar produção, integrações e sustentação.',
      role: ['UX de conteúdo', 'Desenvolvimento frontend', 'SEO técnico', 'Otimização de apresentação'],
      features: ['Hero reposicionado', 'Cases profissionais', 'SEO', 'Arquitetura visual'],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      integrations: ['Open Graph', 'JSON-LD'],
      technicalChallenges: [
        'Reorganizar conteúdo sem recriar o projeto do zero',
        'Melhorar narrativa, SEO e responsividade mantendo a base funcional',
      ],
      image: {
        src: '/projects/portfolio-profissional/placeholder-main.svg',
        alt: 'Placeholder para screenshot do portfólio profissional',
        placeholder: true,
      },
      gallery: [
        {
          src: '/projects/portfolio-profissional/home-placeholder.svg',
          alt: 'Placeholder para home do portfólio profissional',
          placeholder: true,
        },
      ],
    },
  ] as ProjectCase[],
}

export const projectsByCategory = {
  production: site.projectCases.filter((project) => project.category === 'production'),
  development: site.projectCases.filter((project) => project.category === 'development'),
  freelance: site.projectCases.filter((project) => project.category === 'freelance'),
  lab: site.projectCases.filter((project) => project.category === 'lab'),
}
