import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_COOKIE, adminCookieOptions, createAdminToken } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: '' })) as { password?: string }
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) return NextResponse.json({ error: 'Configure ADMIN_PASSWORD e ADMIN_SESSION_SECRET.' }, { status: 503 })
  if (password !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'Senha inválida.' }, { status: 401 })
  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, createAdminToken(), adminCookieOptions)
  return response
}
