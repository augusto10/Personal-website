"use client"

import { FormEvent, useCallback, useEffect, useState } from 'react'
import { ArrowLeft, Clock3, Eye, LogOut, Users } from 'lucide-react'
import type { Visit } from '@/lib/visits'
import { ProjectManager } from '@/components/ProjectManager'

type Stats = { total: number; uniqueVisitors: number; today: number; visits: Visit[] }

export function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const loadStats = useCallback(async () => {
    setLoading(true)
    const response = await fetch('/api/visits', { cache: 'no-store' })
    const data = await response.json()
    if (response.status === 401) {
      setAuthenticated(false)
      setStats(null)
    } else if (!response.ok) {
      setAuthenticated(true)
      setError(data.error || 'Não foi possível carregar as visitas.')
    } else {
      setAuthenticated(true)
      setStats(data)
      setError('')
    }
    setLoading(false)
  }, [])

  useEffect(() => { loadStats().catch(() => { setError('Não foi possível acessar o painel.'); setLoading(false) }) }, [loadStats])

  async function login(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError('')
    const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ password }) })
    const data = await response.json()
    if (!response.ok) { setError(data.error || 'Não foi possível entrar.'); setLoading(false); return }
    setPassword('')
    await loadStats()
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    setAuthenticated(false)
    setStats(null)
  }

  if (loading && !stats) return <main className="flex min-h-screen items-center justify-center text-white/60">Carregando painel…</main>

  if (!authenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <form onSubmit={login} className="surface-elevated w-full max-w-md rounded-3xl p-7">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"><ArrowLeft size={15} /> Voltar ao portfólio</a>
          <p className="eyebrow mt-8">Acesso restrito</p>
          <h1 className="mt-3 text-3xl font-semibold">Painel de visitas</h1>
          <label htmlFor="password" className="mt-7 block text-sm text-white/65">Senha administrativa</label>
          <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoFocus className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand" />
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
          <button type="submit" disabled={loading} className="btn-primary mt-5 w-full disabled:opacity-50">{loading ? 'Entrando…' : 'Entrar'}</button>
          <p className="mt-4 text-xs leading-5 text-white/45">Esqueceu a senha? Troque a variável <code>ADMIN_PASSWORD</code> na hospedagem e faça um novo deploy.</p>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-10 md:py-16">
      <div className="container-max">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><p className="eyebrow">Área administrativa</p><h1 className="mt-3 text-3xl font-semibold md:text-4xl">Visitas do portfólio</h1></div>
          <div className="flex gap-3"><a href="/" className="btn-secondary text-sm"><ArrowLeft size={15} /> Portfólio</a><button type="button" onClick={logout} className="btn-secondary text-sm"><LogOut size={15} /> Sair</button></div>
        </div>

        {error ? <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">{error}</div> : null}
        {stats ? (
          <>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[{ label: 'Total (90 dias)', value: stats.total, icon: Eye }, { label: 'IPs únicos', value: stats.uniqueVisitors, icon: Users }, { label: 'Hoje', value: stats.today, icon: Clock3 }].map(({ label, value, icon: Icon }) => (
                <div key={label} className="surface-card rounded-3xl p-5"><Icon size={19} className="text-brand-light" /><p className="mt-4 text-3xl font-semibold">{value}</p><p className="mt-1 text-sm text-white/50">{label}</p></div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="border-b border-white/10 px-5 py-4"><h2 className="font-semibold">Últimas visitas</h2><p className="mt-1 text-xs text-white/40">Atualize a página para buscar novos registros.</p></div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-white/40"><tr><th className="px-5 py-3">Data e hora</th><th className="px-5 py-3">IP</th><th className="px-5 py-3">Página</th><th className="px-5 py-3">Origem</th><th className="px-5 py-3">Dispositivo</th></tr></thead>
                  <tbody className="divide-y divide-white/[0.06]">{stats.visits.map((visit) => <tr key={visit.id} className="text-white/65"><td className="whitespace-nowrap px-5 py-4">{new Date(visit.visitedAt).toLocaleString('pt-BR')}</td><td className="px-5 py-4 font-mono text-xs">{visit.ip}</td><td className="px-5 py-4">{visit.path}</td><td className="max-w-48 truncate px-5 py-4" title={visit.referrer || ''}>{visit.referrer || 'Direto'}</td><td className="max-w-64 truncate px-5 py-4" title={visit.userAgent || ''}>{visit.userAgent || 'Não informado'}</td></tr>)}</tbody>
                </table>
                {!stats.visits.length ? <p className="p-8 text-center text-sm text-white/45">Nenhuma visita registrada ainda.</p> : null}
              </div>
            </div>
          </>
        ) : null}
        <ProjectManager />
      </div>
    </main>
  )
}
