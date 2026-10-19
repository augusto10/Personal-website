"use client"

import { site } from '@/config/site'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-[#09090c]/86 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container-max flex h-16 items-center justify-between gap-6">
        <a href="#home" className="min-w-0 font-semibold tracking-tight text-white"><span className="block truncate">{site.shortName}</span></a>
        <nav className="hidden items-center gap-6 text-sm text-white/66 md:flex">
          <a href="#projetos" className="transition hover:text-white">Projetos</a>
          <a href="#experiencia" className="transition hover:text-white">Experiência</a>
          <a href="#contato" className="transition hover:text-white">Contato</a>
        </nav>
        <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-sm">Falar comigo</a>
      </div>
    </header>
  )
}
