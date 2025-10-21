import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.next()
}

// Configure which paths run through middleware (exclude assets and API by default)
export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
