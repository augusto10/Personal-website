import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</div>
        <div className="flex gap-4">
          {site.socials.github && <a href={site.socials.github} target="_blank" className="hover:text-white">GitHub</a>}
          {site.socials.linkedin && <a href={site.socials.linkedin} target="_blank" className="hover:text-white">LinkedIn</a>}
        </div>
      </div>
    </footer>
  )
}
