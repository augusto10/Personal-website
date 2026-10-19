import { NextRequest, NextResponse } from 'next/server'
import { isAdminRequest } from '@/lib/admin-auth'
import { getVisitStats, recordVisit } from '@/lib/visits'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({})) as { path?: string; referrer?: string | null }
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'desconhecido'
    const recorded = await recordVisit({ ip, path: typeof body.path === 'string' ? body.path : '/', referrer: typeof body.referrer === 'string' ? body.referrer : null, userAgent: request.headers.get('user-agent') })
    return NextResponse.json({ recorded }, { status: 201 })
  } catch (error) {
    console.error('Não foi possível registrar a visita:', error)
    return NextResponse.json({ recorded: false }, { status: 202 })
  }
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  try { return NextResponse.json(await getVisitStats()) }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Erro ao consultar visitas' }, { status: 503 }) }
}
