import { createHmac, timingSafeEqual } from 'crypto'
import type { NextRequest } from 'next/server'

export const ADMIN_COOKIE = 'portfolio_admin_session'
const SESSION_DURATION_SECONDS = 60 * 60 * 12
const secret = () => process.env.ADMIN_SESSION_SECRET || ''
const signature = (expiresAt: string) => createHmac('sha256', secret()).update(expiresAt).digest('hex')

export function createAdminToken() {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS)
  return `${expiresAt}.${signature(expiresAt)}`
}

export function isAdminTokenValid(token?: string) {
  if (!token || !secret()) return false
  const [expiresAt, receivedSignature] = token.split('.')
  if (!expiresAt || !receivedSignature || Number(expiresAt) < Math.floor(Date.now() / 1000)) return false
  const expectedSignature = signature(expiresAt)
  if (receivedSignature.length !== expectedSignature.length) return false
  return timingSafeEqual(Buffer.from(receivedSignature), Buffer.from(expectedSignature))
}

export function isAdminRequest(request: NextRequest) {
  return isAdminTokenValid(request.cookies.get(ADMIN_COOKIE)?.value)
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SESSION_DURATION_SECONDS,
}
