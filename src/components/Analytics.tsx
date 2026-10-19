"use client"

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/admin') || navigator.doNotTrack === '1' || sessionStorage.getItem('portfolio_visit_recorded')) return
    sessionStorage.setItem('portfolio_visit_recorded', '1')
    fetch('/api/visits', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path: window.location.pathname, referrer: document.referrer || null }),
      keepalive: true,
    }).catch(() => sessionStorage.removeItem('portfolio_visit_recorded'))
  }, [])
  return null
}
