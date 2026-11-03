import { Code2, Database, GitBranch, PlugZap } from 'lucide-react'

const capabilities = [
  { icon: Code2, title: 'Aplicações web', text: 'Interfaces, dashboards e sistemas internos com React, Next.js e TypeScript.' },
  { icon: PlugZap, title: 'APIs e integrações', text: 'Integrações com ERP, transportadoras e serviços corporativos.' },
  { icon: Database, title: 'Dados e backend', text: 'Node.js, bancos relacionais, autenticação e regras de negócio.' },
  { icon: GitBranch, title: 'Produção e evolução', text: 'Deploy, CI/CD, correções, suporte aos usuários e novas funcionalidades.' },
]

export function Experience() {
  return (
    <section id="experiencia" className="section border-t border-[#17211d]/[0.07] bg-white/45">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Parceria de ponta a ponta</p>
            <h2 className="section-title mt-4">Tecnologia com acompanhamento em cada etapa.</h2>
            <p className="max-w-xl leading-8 text-[#64716b]">O projeto começa entendendo a rotina e o resultado esperado. A partir daí, construímos a solução juntos, validamos os fluxos e evoluímos com base no uso real.</p>
            <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#176b4b] hover:text-[#10563b]">
              Conversar sobre meu desafio <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card rounded-3xl p-6 transition-transform hover:-translate-y-1">
                <Icon size={21} className="text-[#176b4b]" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#64716b]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
