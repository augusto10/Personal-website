"use client"
import { useEffect } from 'react'

// Google Analytics
export function Analytics() {
  useEffect(() => {
    // Carrega Google Analytics apenas em produção
    if (process.env.NODE_ENV === 'production') {
      // Google Analytics 4
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' // Substitua pelo seu ID
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX'); // Substitua pelo seu ID
      `
      document.head.appendChild(script2)
    }

    // Analytics simples local (contador de visitas)
    const incrementVisit = () => {
      const visits = localStorage.getItem('portfolio_visits') || '0'
      const newCount = parseInt(visits) + 1
      localStorage.setItem('portfolio_visits', newCount.toString())
      localStorage.setItem('last_visit', new Date().toISOString())
    }

    incrementVisit()
  }, [])

  return null
}

// Hook para acessar dados de visitas (apenas para você)
export function useVisitStats() {
  const getVisitStats = () => {
    if (typeof window === 'undefined') return null
    
    return {
      totalVisits: localStorage.getItem('portfolio_visits') || '0',
      lastVisit: localStorage.getItem('last_visit'),
      sessionStart: new Date().toISOString()
    }
  }

  return { getVisitStats }
}
