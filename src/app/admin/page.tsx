import type { Metadata } from 'next'
import { AdminDashboard } from '@/components/AdminDashboard'

export const metadata: Metadata = { title: 'Painel administrativo | Portfólio', robots: { index: false, follow: false } }

export default function AdminPage() {
  return <AdminDashboard />
}
