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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between h-16">
        <a href="#home" className="font-semibold">{site.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#sobre" className="hover:text-white">Sobre</a>
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#projetos" className="hover:text-white">Projetos</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </nav>
        <a href={site.contacts.whatsapp} target="_blank" className="btn-primary text-sm">Peça um orçamento</a>
      </div>
    </header>
  )
}
