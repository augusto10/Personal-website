"use client"

import { FormEvent, useCallback, useEffect, useState } from 'react'
import type { ProjectCase, ProjectStatus } from '@/config/site'
import { Plus, Save, Trash2 } from 'lucide-react'

const emptyProject = (): ProjectCase => ({
  id: '',
  name: '',
  category: 'production',
  statusLabel: 'Em produção',
  url: '',
  featured: true,
  privateAccess: false,
  summary: '',
  description: '',
  clientContext: '',
  problem: '',
  solution: '',
  role: [],
  features: [],
  technologies: [],
  integrations: [],
  technicalChallenges: [],
  image: { src: '', alt: '' },
  gallery: [],
})

const categories: { value: ProjectStatus; label: string }[] = [
  { value: 'production', label: 'Em produção' },
  { value: 'development', label: 'Em desenvolvimento' },
  { value: 'freelance', label: 'Freelancer' },
  { value: 'lab', label: 'Laboratório' },
]

function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function ProjectManager() {
  const [projects, setProjects] = useState<ProjectCase[]>([])
  const [draft, setDraft] = useState<ProjectCase | null>(null)
  const [newProject, setNewProject] = useState(false)
  const [cover, setCover] = useState<File | null>(null)
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const loadProjects = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/projects', { cache: 'no-store' })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Não foi possível carregar os projetos.')
      setProjects(data)
      setDraft((current) => current ? data.find((project: ProjectCase) => project.id === current.id) ?? current : null)
      setError('')
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Não foi possível carregar os projetos.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void loadProjects() }, [loadProjects])

  function selectProject(project: ProjectCase) {
    setDraft({ ...project })
    setNewProject(false)
    setCover(null)
    setGalleryFiles([])
    setError('')
    setNotice('')
  }

  function startNewProject() {
    setDraft(emptyProject())
    setNewProject(true)
    setCover(null)
    setGalleryFiles([])
    setError('')
    setNotice('')
  }

  function update<K extends keyof ProjectCase>(key: K, value: ProjectCase[K]) {
    setDraft((current) => current ? { ...current, [key]: value } : current)
  }

  function updateName(name: string) {
    setDraft((current) => current ? { ...current, name, ...(!projects.some((project) => project.id === current.id) ? { id: slugify(name) } : {}) } : current)
  }

  function updateList(key: 'role' | 'features' | 'technologies' | 'integrations' | 'technicalChallenges', value: string) {
    update(key, value.split('\n').map((item) => item.trim()).filter(Boolean))
  }

  async function save(event: FormEvent) {
    event.preventDefault()
    if (!draft) return
    setSaving(true)
    setError('')
    setNotice('')
    try {
      const form = new FormData()
      form.set('project', JSON.stringify(draft))
      form.set('create', String(newProject))
      if (cover) form.set('cover', cover)
      for (const file of galleryFiles) form.append('gallery', file)
      const response = await fetch('/api/projects', { method: 'POST', body: form })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Não foi possível salvar o projeto.')
      await loadProjects()
      setDraft(data)
      setNewProject(false)
      setCover(null)
      setGalleryFiles([])
      setNotice('Projeto salvo. As alterações já aparecem no portfólio.')
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Não foi possível salvar o projeto.')
    } finally {
      setSaving(false)
    }
  }

  async function removeProject() {
    if (!draft || newProject || !projects.some((project) => project.id === draft.id)) return
    if (!window.confirm(`Excluir o projeto "${draft.name}"?`)) return
    setSaving(true)
    setError('')
    setNotice('')
    try {
      const response = await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id: draft.id }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Não foi possível excluir o projeto.')
      setDraft(null)
      setCover(null)
      setGalleryFiles([])
      await loadProjects()
      setNotice('Projeto excluído.')
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : 'Não foi possível excluir o projeto.')
    } finally {
      setSaving(false)
    }
  }

  const inputClass = 'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand'
  const labelClass = 'block text-sm text-white/65'
  const arrayValue = (items: string[]) => items.join('\n')

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Conteúdo do portfólio</p>
          <h2 className="mt-3 text-2xl font-semibold">Projetos e imagens</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">Cadastre projetos, escolha quais ficam em evidência e adicione até cinco imagens por vez (JPEG, PNG ou WebP, até 2 MB cada; 4 MB no total por envio).</p>
        </div>
        <button type="button" onClick={startNewProject} className="btn-primary text-sm"><Plus size={16} /> Novo projeto</button>
      </div>

      {error ? <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">{error}</div> : null}
      {notice ? <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">{notice}</div> : null}
      {loading && !projects.length ? <p className="mt-6 text-sm text-white/50">Carregando projetos…</p> : null}

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(230px,0.65fr),minmax(0,1.35fr)]">
        <div className="surface-card h-fit rounded-3xl p-4">
          <p className="px-2 pb-3 text-xs uppercase tracking-[0.18em] text-white/40">Projetos cadastrados</p>
          <div className="space-y-2">
            {projects.map((project) => (
              <button key={project.id} type="button" onClick={() => selectProject(project)} className={`w-full rounded-2xl border px-4 py-3 text-left ${!newProject && draft?.id === project.id ? 'border-brand/50 bg-brand/10' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
                <span className="block font-medium">{project.name}</span>
                <span className="mt-1 block text-xs text-white/45">{project.featured ? 'Em evidência' : project.statusLabel}</span>
              </button>
            ))}
            {!projects.length && !loading ? <p className="px-2 py-3 text-sm text-white/45">Nenhum projeto encontrado.</p> : null}
          </div>
        </div>

        {draft ? (
          <form onSubmit={save} className="surface-elevated rounded-3xl p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>Nome do projeto
                <input required maxLength={120} value={draft.name} onChange={(event) => updateName(event.target.value)} className={inputClass} />
              </label>
              <label className={labelClass}>Link para abrir o projeto
                <input required type="url" placeholder="https://..." value={draft.url} onChange={(event) => update('url', event.target.value)} className={inputClass} />
              </label>
              <label className={labelClass}>Categoria
                <select value={draft.category} onChange={(event) => { const category = event.target.value as ProjectStatus; update('category', category); update('statusLabel', categories.find((item) => item.value === category)?.label ?? 'Em produção') }} className={inputClass}>
                  {categories.map((category) => <option key={category.value} value={category.value} className="bg-slate-900">{category.label}</option>)}
                </select>
              </label>
              <label className={labelClass}>Resumo
                <input required maxLength={500} value={draft.summary} onChange={(event) => update('summary', event.target.value)} className={inputClass} />
              </label>
              <label className={`${labelClass} md:col-span-2`}>O que foi entregue
                <textarea required rows={3} value={draft.solution} onChange={(event) => update('solution', event.target.value)} className={inputClass} />
              </label>
              <label className={labelClass}>Capa do projeto
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setCover(event.target.files?.[0] ?? null)} className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-white`} />
                <span className="mt-1 block text-xs text-white/40">{cover ? cover.name : draft.image.src ? 'Capa atual mantida se nenhuma nova for escolhida.' : 'Escolha uma imagem para a capa.'}</span>
              </label>
              <label className={labelClass}>Mais imagens
                <input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={(event) => setGalleryFiles(Array.from(event.target.files ?? []))} className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-white`} />
                <span className="mt-1 block text-xs text-white/40">{galleryFiles.length ? `${galleryFiles.length} imagem(ns) selecionada(s)` : `${draft.gallery.length} imagem(ns) na galeria`}</span>
              </label>
              <label className={`${labelClass} md:col-span-2`}>Funcionalidades (uma por linha)
                <textarea rows={4} value={arrayValue(draft.features)} onChange={(event) => updateList('features', event.target.value)} className={inputClass} />
              </label>
              <label className={labelClass}>Tecnologias (uma por linha)
                <textarea rows={3} value={arrayValue(draft.technologies)} onChange={(event) => updateList('technologies', event.target.value)} className={inputClass} />
              </label>
              <label className={labelClass}>Integrações (uma por linha)
                <textarea rows={3} value={arrayValue(draft.integrations)} onChange={(event) => updateList('integrations', event.target.value)} className={inputClass} />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
              <label className="inline-flex items-center gap-2 text-sm text-white/70"><input type="checkbox" checked={Boolean(draft.featured)} onChange={(event) => update('featured', event.target.checked)} className="accent-brand" /> Mostrar em evidência</label>
              <label className="inline-flex items-center gap-2 text-sm text-white/70"><input type="checkbox" checked={Boolean(draft.privateAccess)} onChange={(event) => update('privateAccess', event.target.checked)} className="accent-brand" /> Projeto privado (oculta o link de abertura)</label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50"><Save size={16} /> {saving ? 'Salvando…' : 'Salvar projeto'}</button>
              {!newProject && projects.some((project) => project.id === draft.id) ? <button type="button" onClick={removeProject} disabled={saving} className="btn-secondary text-red-200 disabled:opacity-50"><Trash2 size={16} /> Excluir</button> : null}
            </div>
          </form>
        ) : (
          <div className="surface-card rounded-3xl p-8 text-center text-sm text-white/50">Selecione um projeto para editar ou crie um novo.</div>
        )}
      </div>
    </section>
  )
}
