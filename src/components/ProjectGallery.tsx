"use client"

import { useEffect, useState } from 'react'
import type { ProjectImage } from '@/config/site'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'

function Media({ item, className = '' }: { item: ProjectImage; className?: string }) {
  if (item.kind === 'video') {
    return (
      <div className={`relative ${className}`}>
        <img src={item.poster ?? item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover object-top" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/15">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black"><Play size={18} className="ml-0.5" /></span>
        </span>
      </div>
    )
  }

  return <img src={item.src} alt={item.alt} loading="lazy" className={`h-full w-full object-cover object-top ${className}`} />
}

export function ProjectGallery({ images, compact = false }: { images: ProjectImage[]; compact?: boolean }) {
  const media = images.filter((item, index, list) => !item.placeholder && list.findIndex((candidate) => candidate.src === item.src) === index).slice(0, 8)
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((active + 1) % media.length)
      if (event.key === 'ArrowLeft') setActive((active - 1 + media.length) % media.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active, media.length])

  if (!media.length) return null

  return (
    <>
      <div className={compact ? 'grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid gap-3 md:grid-cols-[1.55fr,0.45fr]'}>
        {compact ? media.map((item, index) => (
          <button key={item.src} type="button" onClick={() => setActive(index)} className="group relative overflow-hidden rounded-xl border border-[#17211d]/10 bg-[#edf0eb]">
            <Media item={item} className="aspect-[16/10] transition duration-300 group-hover:scale-[1.03]" />
          </button>
        )) : (
          <>
            <button type="button" onClick={() => setActive(0)} className="group overflow-hidden rounded-2xl border border-[#17211d]/10 bg-[#edf0eb] text-left">
              <Media item={media[0]} className="aspect-[16/10] transition duration-300 group-hover:scale-[1.015]" />
            </button>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
              {media.slice(1).map((item, index) => (
                <button key={item.src} type="button" onClick={() => setActive(index + 1)} className="group relative overflow-hidden rounded-xl border border-[#17211d]/10 bg-[#edf0eb]">
                  <Media item={item} className="aspect-[16/10] transition duration-300 group-hover:scale-[1.03] md:aspect-auto" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={() => setActive(null)}>
          <button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white" aria-label="Fechar"><X size={20} /></button>
          {media.length > 1 ? (
            <>
              <button type="button" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + media.length) % media.length) }} className="absolute left-3 rounded-full bg-white/10 p-3 text-white md:left-8" aria-label="Imagem anterior"><ChevronLeft /></button>
              <button type="button" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % media.length) }} className="absolute right-3 rounded-full bg-white/10 p-3 text-white md:right-8" aria-label="Próxima imagem"><ChevronRight /></button>
            </>
          ) : null}
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            {media[active].kind === 'video' ? (
              <video controls autoPlay playsInline poster={media[active].poster} className="max-h-[82vh] w-full rounded-2xl bg-black object-contain"><source src={media[active].src} /></video>
            ) : (
              <img src={media[active].src} alt={media[active].alt} className="max-h-[82vh] w-full rounded-2xl bg-black object-contain" />
            )}
            <p className="mt-4 text-center text-sm text-white/68">{media[active].alt} · {active + 1} de {media.length}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}
