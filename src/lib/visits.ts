import { neon } from '@neondatabase/serverless'

export type Visit = { id: number; ip: string; visitedAt: string; path: string; referrer: string | null; userAgent: string | null }

let tableReady = false

function database() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL não configurada')
  return neon(url)
}

async function ensureTable() {
  if (tableReady) return
  const sql = database()
  await sql`CREATE TABLE IF NOT EXISTS portfolio_visits (id BIGSERIAL PRIMARY KEY, ip VARCHAR(64) NOT NULL, visited_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), path VARCHAR(500) NOT NULL DEFAULT '/', referrer VARCHAR(1000), user_agent VARCHAR(1000))`
  await sql`CREATE INDEX IF NOT EXISTS portfolio_visits_visited_at_idx ON portfolio_visits (visited_at DESC)`
  tableReady = true
}

export async function recordVisit(input: { ip: string; path: string; referrer?: string | null; userAgent?: string | null }) {
  await ensureTable()
  const sql = database()
  await sql`DELETE FROM portfolio_visits WHERE visited_at < NOW() - INTERVAL '90 days'`
  const recent = await sql`SELECT id FROM portfolio_visits WHERE ip = ${input.ip.slice(0, 64)} AND path = ${input.path.slice(0, 500)} AND visited_at > NOW() - INTERVAL '30 minutes' LIMIT 1`
  if (recent.length) return false
  await sql`INSERT INTO portfolio_visits (ip, path, referrer, user_agent) VALUES (${input.ip.slice(0, 64)}, ${input.path.slice(0, 500)}, ${input.referrer?.slice(0, 1000) || null}, ${input.userAgent?.slice(0, 1000) || null})`
  return true
}

export async function getVisitStats() {
  await ensureTable()
  const sql = database()
  const [summary] = await sql`SELECT COUNT(*)::int AS total, COUNT(DISTINCT ip)::int AS unique_visitors, COUNT(*) FILTER (WHERE visited_at >= CURRENT_DATE)::int AS today FROM portfolio_visits`
  const rows = await sql`SELECT id, ip, visited_at, path, referrer, user_agent FROM portfolio_visits ORDER BY visited_at DESC LIMIT 250`
  return {
    total: Number(summary.total), uniqueVisitors: Number(summary.unique_visitors), today: Number(summary.today),
    visits: rows.map((row) => ({ id: Number(row.id), ip: String(row.ip), visitedAt: new Date(String(row.visited_at)).toISOString(), path: String(row.path), referrer: row.referrer ? String(row.referrer) : null, userAgent: row.user_agent ? String(row.user_agent) : null })) satisfies Visit[],
  }
}
