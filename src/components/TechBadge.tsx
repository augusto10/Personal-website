export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/78">
      {children}
    </span>
  )
}
