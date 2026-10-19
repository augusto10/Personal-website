import { Code2, Database, GitBranch, PlugZap } from 'lucide-react'

const capabilities = [
  { icon: Code2, title: 'Aplicações web', text: 'Interfaces, dashboards e sistemas internos com React, Next.js e TypeScript.' },
  { icon: PlugZap, title: 'APIs e integrações', text: 'Integrações com ERP, transportadoras e serviços corporativos.' },
  { icon: Database, title: 'Dados e backend', text: 'Node.js, bancos relacionais, autenticação e regras de negócio.' },
  { icon: GitBranch, title: 'Produção e evolução', text: 'Deploy, CI/CD, correções, suporte aos usuários e novas funcionalidades.' },
]

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Como eu trabalho</p>
            <h2 className="section-title mt-4">Do problema ao sistema em produção</h2>
            <p className="max-w-xl leading-8 text-white/65">Atuo no ciclo completo: entendo a rotina, desenho a solução, desenvolvo, integro, publico e acompanho o uso real. Isso me permite conversar tanto com áreas de negócio quanto com equipes técnicas.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card rounded-3xl p-6">
                <Icon size={21} className="text-brand-light" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
