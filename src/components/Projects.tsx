import { site } from '@/config/site'

export function Projects() {
  const items = site.projects
  return (
    <section id="projetos" className="section">
      <div className="container-max">
        <h2 className="section-title">Projetos em destaque</h2>
        <p className="section-subtitle">Alguns trabalhos recentes. Os links levam direto para o deploy (Vercel) e o código.</p>

        {items.length === 0 ? (
          <div className="mt-10 text-white/60">
            Nenhum projeto cadastrado ainda. Edite em <code className="bg-white/10 px-1 rounded">src/config/site.ts</code> para adicionar seus projetos.
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.title} className="glass rounded-3xl overflow-hidden">
                {p.image && (
                  // usando img padrão para não exigir config de domínio
                  <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                    {p.stack.map(s => (
                      <span key={s} className="bg-white/5 px-2 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a className="btn-secondary text-sm" href={p.liveUrl} target="_blank">Ver online</a>
                    {p.codeUrl && <a className="btn-secondary text-sm" href={p.codeUrl} target="_blank">Código</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
