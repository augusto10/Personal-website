"use client"
import { useState, useEffect } from 'react'
import { Eye, Calendar, Clock, BarChart3, X } from 'lucide-react'

export function AdminStats() {
  const [isOpen, setIsOpen] = useState(false)
  const [stats, setStats] = useState({
    totalVisits: '0',
    lastVisit: null as string | null,
    sessionStart: ''
  })
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Verifica se é admin (você pode mudar essa lógica)
    const checkAdmin = () => {
      const adminKey = localStorage.getItem('admin_key')
      return adminKey === 'augusto_admin_2024' // Sua chave secreta
    }

    setIsAdmin(checkAdmin())

    if (typeof window !== 'undefined') {
      setStats({
        totalVisits: localStorage.getItem('portfolio_visits') || '0',
        lastVisit: localStorage.getItem('last_visit'),
        sessionStart: new Date().toISOString()
      })
    }
  }, [])

  const enableAdmin = () => {
    const key = prompt('Digite a chave de admin:')
    if (key === 'augusto123') { // Sua senha secreta
      localStorage.setItem('admin_key', 'augusto_admin_2024')
      setIsAdmin(true)
      alert('Modo admin ativado!')
    }
  }

  const resetStats = () => {
    if (confirm('Resetar todas as estatísticas?')) {
      localStorage.removeItem('portfolio_visits')
      localStorage.removeItem('last_visit')
      setStats({ totalVisits: '0', lastVisit: null, sessionStart: new Date().toISOString() })
    }
  }

  if (!isAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={enableAdmin}
          className="w-3 h-3 bg-transparent border-none opacity-10 hover:opacity-30 transition-opacity"
          title="Admin"
        >
          <div className="w-full h-full bg-white/20 rounded-full" />
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Botão flutuante */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand hover:bg-brand-light text-white p-3 rounded-full shadow-lg transition-colors"
          title="Ver estatísticas"
        >
          <BarChart3 size={20} />
        </button>
      </div>

      {/* Modal de estatísticas */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-3xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">📊 Analytics Privado</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-brand" size={20} />
                  <span className="font-semibold text-white">Total de Visitas</span>
                </div>
                <div className="text-2xl font-bold text-brand">{stats.totalVisits}</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-green-400" size={20} />
                  <span className="font-semibold text-white">Última Visita</span>
                </div>
                <div className="text-sm text-white/70">
                  {stats.lastVisit 
                    ? new Date(stats.lastVisit).toLocaleString('pt-BR')
                    : 'Nenhuma visita registrada'
                  }
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-yellow-400" size={20} />
                  <span className="font-semibold text-white">Sessão Atual</span>
                </div>
                <div className="text-sm text-white/70">
                  {new Date(stats.sessionStart).toLocaleString('pt-BR')}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={resetStats}
                className="flex-1 bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-xl text-sm hover:bg-red-500/30 transition-colors"
              >
                Resetar Stats
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('admin_key')
                  setIsAdmin(false)
                  setIsOpen(false)
                }}
                className="flex-1 bg-white/10 text-white/70 px-4 py-2 rounded-xl text-sm hover:bg-white/20 transition-colors"
              >
                Sair Admin
              </button>
            </div>

            <div className="mt-4 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <p className="text-xs text-blue-400">
                💡 <strong>Dica:</strong> Para analytics mais detalhados, configure Google Analytics no arquivo Analytics.tsx
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
