import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container-max footer-inner">
        <div>
          <div>&copy; {new Date().getFullYear()} {site.name}.</div>
          <div className="mt-1">{site.role}</div>
        </div>
        <nav aria-label="Links do rodapé">
          <a href="/privacidade" className="hover:text-portfolio-accent">Privacidade</a>
          <a href="/admin" className="hover:text-portfolio-accent">Admin</a>
          {site.socials.linkedin ? (
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-portfolio-accent">
              LinkedIn
            </a>
          ) : null}
        </nav>
      </div>
    </footer>
  )
}
