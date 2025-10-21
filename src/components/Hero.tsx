"use client"
import { motion } from 'framer-motion'
import { site } from '@/config/site'

export function Hero() {
  return (
    <section id="home" className="section pt-36">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-14">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0\' x2=\'1\' y1=\'0\' y2=\'1\'%3E%3Cstop stop-color=\'%236E56CF\' offset=\'0%25\'/%3E%3Cstop stop-color=\'%23000000\' offset=\'100%25\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=\'url(%23g)\' opacity=\'0.15\' width=\'100%25\' height=\'100%25\'/%3E%3C/svg%3E"' }} />
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Olá, sou {site.name.split(' ')[0]} —
              <span className="block text-white/80">{site.tagline}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-white/70 max-w-2xl"
            >
              Especialista em Next.js, Node.js e integrações. Transformo ideias em produtos digitais de alto impacto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projetos" className="btn-secondary">Ver projetos</a>
              <a href={site.contacts.whatsapp} target="_blank" className="btn-primary">Pedir orçamento</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
