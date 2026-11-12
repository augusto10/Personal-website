"use client"

import { site } from '@/config/site'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <div className="container-max header-inner">
        <a href="#home" onClick={closeMenu} className="wordmark">
          <span className="block truncate">{site.shortName}</span>
          <small>Soluções digitais para empresas</small>
        </a>
        <nav aria-label="Navegação principal" className="desktop-nav">
          <a href="#servicos" className="py-3 transition hover:text-portfolio-accent">Serviços</a>
          <a href="#automacoes" className="py-3 transition hover:text-portfolio-accent">Automações</a>
          <a href="#projetos" className="py-3 transition hover:text-portfolio-accent">Projetos</a>
          <a href="#experiencia" className="py-3 transition hover:text-portfolio-accent">Como trabalho</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn-primary min-h-11 px-3 py-2.5 text-xs sm:px-4 sm:text-sm">Vamos conversar</a>
          <button
            type="button"
            className="menu-toggle inline-flex lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Navegação móvel" className="container-max mobile-nav lg:hidden">
          <a href="#servicos" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-white">Serviços</a>
          <a href="#automacoes" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-white">Automações</a>
          <a href="#projetos" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-white">Projetos</a>
          <a href="#experiencia" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-white">Como trabalho</a>
          <a href="#contato" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-white">Contato</a>
        </nav>
      ) : null}
    </header>
  )
}
