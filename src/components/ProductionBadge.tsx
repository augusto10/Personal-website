import type { ProjectStatus } from '@/config/site'

const badgeMap: Record<ProjectStatus, string> = {
  production: 'bg-emerald-500/12 text-emerald-300 border border-emerald-500/30',
  development: 'bg-amber-500/12 text-amber-300 border border-amber-500/30',
  freelance: 'bg-sky-500/12 text-sky-300 border border-sky-500/30',
  lab: 'bg-white/8 text-white/70 border border-white/12',
}

export function ProductionBadge({
  status,
  label,
}: {
  status: ProjectStatus
  label: string
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeMap[status]}`}>
      {label}
    </span>
  )
}
