import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-max flex flex-col gap-4 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
        <div>
          <div>&copy; {new Date().getFullYear()} {site.name}.</div>
          <div className="mt-1 text-white/40">{site.role}</div>
        </div>
        <div className="flex gap-4">
          <a href="/privacidade" className="hover:text-white">Privacidade</a>
          <a href="/admin" className="hover:text-white">Admin</a>
          {site.socials.linkedin ? (
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
