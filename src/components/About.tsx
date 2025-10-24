"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Code, Database, Globe, Smartphone } from 'lucide-react'

export function About() {
  const skills = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'], icon: Globe },
    { category: 'Backend', techs: ['Node.js', 'Python', 'PHP', 'Express', 'FastAPI'], icon: Database },
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Ionic'], icon: Smartphone },
    { category: 'Outras', techs: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git'], icon: Code }
  ]

  return (
    <section id="sobre" className="section">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre mim</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            {/* Currículo e Formação */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-brand" size={28} />
                <h3 className="text-2xl font-bold">Formação & Experiência</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-brand">🎓 Formação Acadêmica</h4>
                  <p className="text-white/80 mt-1">
                    <strong>Graduação em Análise e Desenvolvimento de Sistemas</strong><br />
                    <em>Uniceub - Distrito Federal</em><br />
                    Focado em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-brand">💼 Desenvolvedor Fullstack</h4>
                  <p className="text-white/80 mt-1">
                    Experiência completa em desenvolvimento web, desde a concepção até o deploy. 
                    Especialista em criar soluções escaláveis e performáticas para empresas de todos os portes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-brand">🎯 Especialidades</h4>
                  <ul className="text-white/80 mt-1 space-y-1">
                    <li>• Desenvolvimento de sites institucionais e e-commerce</li>
                    <li>• Sistemas de gestão empresarial (ERP, CRM)</li>
                    <li>• Landing pages de alta conversão</li>
                    <li>• APIs e integrações entre sistemas</li>
                    <li>• Aplicações mobile responsivas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-brand" size={28} />
                <h3 className="text-2xl font-bold">Stack Tecnológico</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.category} className="bg-white/5 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="text-brand" size={20} />
                        <h4 className="font-semibold">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech) => (
                          <span key={tech} className="bg-brand/20 text-brand text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 p-4 bg-brand/10 rounded-2xl border border-brand/20">
                <p className="text-white/80 text-sm">
                  <strong className="text-brand">💡 Sempre aprendendo:</strong> Mantenho-me atualizado com as últimas tendências 
                  e tecnologias do mercado para entregar soluções modernas e eficientes.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua ideia em realidade?</h3>
              <p className="text-white/70 mb-6">
                Com conhecimento sólido e experiência prática, desenvolvo a solução perfeita para seu negócio.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#servicos" className="btn-secondary">Ver serviços</a>
                <a href="#contato" className="btn-primary">Solicitar orçamento</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
