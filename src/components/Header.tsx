"use client"

import { site } from '@/config/site'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#17211d]/[0.07] bg-[#f5f5f0]/90 backdrop-blur-xl transition-shadow ${scrolled ? 'shadow-[0_8px_30px_rgba(23,33,29,0.07)]' : ''}`}>
      <div className="container-max flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#home" onClick={closeMenu} className="min-w-0 font-semibold tracking-tight text-[#17211d]">
          <span className="block truncate">{site.shortName}</span>
          <span className="hidden text-[0.65rem] font-normal tracking-wide text-[#64716b] sm:block">Sistemas · APIs · Integrações</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm text-[#526058] md:flex">
          <a href="#servicos" className="transition hover:text-[#176b4b]">Serviços</a>
          <a href="#projetos" className="transition hover:text-[#176b4b]">Projetos</a>
          <a href="#experiencia" className="transition hover:text-[#176b4b]">Como trabalho</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary px-3 py-2 text-xs sm:px-4 sm:text-sm">Vamos conversar</a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#17211d]/10 text-[#17211d] md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Navegação móvel" className="container-max grid gap-1 border-t border-[#17211d]/10 py-3 text-sm text-[#526058] md:hidden">
          <a href="#servicos" onClick={closeMenu} className="rounded-lg px-3 py-2.5 hover:bg-white">Serviços</a>
          <a href="#projetos" onClick={closeMenu} className="rounded-lg px-3 py-2.5 hover:bg-white">Projetos</a>
          <a href="#experiencia" onClick={closeMenu} className="rounded-lg px-3 py-2.5 hover:bg-white">Como trabalho</a>
          <a href="#contato" onClick={closeMenu} className="rounded-lg px-3 py-2.5 hover:bg-white">Contato</a>
        </nav>
      ) : null}
    </header>
  )
}
