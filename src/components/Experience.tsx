
const capabilities = [
  { title: 'Aplicações web', text: 'Interfaces, dashboards e sistemas internos com React, Next.js e TypeScript.' },
  { title: 'APIs e integrações', text: 'Integrações com ERP, transportadoras e serviços corporativos.' },
  { title: 'Dados e backend', text: 'Node.js, bancos relacionais, autenticação e regras de negócio.' },
  { title: 'Produção e evolução', text: 'Deploy, CI/CD, correções, suporte aos usuários e novas funcionalidades.' },
]

export function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div>
            <h2 className="section-title">Da primeira conversa<br />à evolução em produção.</h2>
            <p className="mt-6 max-w-xl leading-8 text-portfolio-muted">O projeto começa entendendo a rotina e o resultado esperado. A partir daí, construímos a solução juntos, validamos os fluxos e evoluímos com base no uso real.</p>
            <a href="#contato" className="text-link mt-6">
              Conversar sobre meu desafio
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ title, text }) => (
              <div key={title} className="experience-capability">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
