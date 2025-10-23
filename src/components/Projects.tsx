import { site } from '@/config/site'
import { Lock, Building, CheckCircle, Eye } from 'lucide-react'

export function Projects() {
  const items = site.projects
  return (
    <section id="projetos" className="section">
      <div className="container-max">
        <h2 className="section-title">Projetos em destaque</h2>
        <p className="section-subtitle">
          Sistemas reais em produção, desenvolvidos para empresas. Alguns possuem acesso demo disponível.
        </p>

        {items.length === 0 ? (
          <div className="mt-10 text-white/60">
            Nenhum projeto cadastrado ainda. Edite em <code className="bg-white/10 px-1 rounded">src/config/site.ts</code> para adicionar seus projetos.
          </div>
        ) : (
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {items.map((p) => (
              <article key={p.title} className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform">
                {p.image && (
                  <div className="relative">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        p.status === 'Em produção' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {p.status === 'Em produção' ? '🚀 Em Produção' : '🌐 Público'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Building size={14} />
                        <span>{p.client}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 mb-4 leading-relaxed">{p.description}</p>

                  {/* Funcionalidades */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-brand mb-2">✨ Principais funcionalidades:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {p.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-white/60">
                          <CheckCircle size={12} className="text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map(tech => (
                        <span key={tech} className="bg-brand/20 text-brand text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credenciais Demo */}
                  {p.demoCredentials && (
                    <div className="mb-4 p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock size={14} className="text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-400">Acesso Demo Disponível</span>
                      </div>
                      <div className="text-xs text-white/70 space-y-1">
                        <div><strong>Usuário:</strong> {p.demoCredentials.user}</div>
                        <div><strong>Senha:</strong> {p.demoCredentials.password}</div>
                      </div>
                    </div>
                  )}

                  {/* Botões */}
                  <div className="flex gap-3">
                    <a 
                      href={p.liveUrl} 
                      target="_blank" 
                      className="btn-primary text-sm flex items-center gap-2 flex-1 justify-center"
                    >
                      <Eye size={16} />
                      {p.demoCredentials ? 'Testar sistema' : 'Ver projeto'}
                    </a>
                    {p.status === 'Em produção' && (
                      <div className="flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-3 py-2 rounded-full">
                        <CheckCircle size={12} />
                        <span>Ativo</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Projetos sob medida para sua empresa</h3>
            <p className="text-white/70 mb-6">
              Todos os projetos acima estão em produção, sendo utilizados diariamente por empresas reais. 
              Posso desenvolver uma solução similar para o seu negócio!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#contato" className="btn-primary">Solicitar orçamento</a>
              <a href="#servicos" className="btn-secondary">Ver todos os serviços</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
