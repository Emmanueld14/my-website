import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Camera, MapPin, X } from 'lucide-react'
import {
  photoCategories,
  photos,
  type Photo,
  type PhotoCategory,
} from '@/data/photos'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { cn } from '@/lib/utils'

function Lightbox({
  photo,
  onClose,
}: {
  photo: Photo
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Close lightbox"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      <motion.figure
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-card shadow-lift"
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[72vh] w-full object-contain bg-ink"
        />
        <figcaption className="flex flex-col gap-1 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">{photo.title}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" />
              {photo.location}
            </p>
          </div>
          <p className="flex items-center gap-1.5 text-sm text-body">
            <Camera className="h-3.5 w-3.5 text-primary" />
            {photo.camera} · {photo.lens}
          </p>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}

export function Photography() {
  const [filter, setFilter] = useState<PhotoCategory | 'all'>('all')
  const [active, setActive] = useState<Photo | null>(null)

  const filtered = useMemo(
    () =>
      filter === 'all' ? photos : photos.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section id="photography" className="relative scroll-mt-20 bg-surface/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Photography"
          title="Light, place, and quiet frames"
          description="Shot on a Canon EOS Rebel T6 with an EF-S 18-55mm. Portraits, streets, and scenery — filter freely."
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Photo categories"
        >
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                filter === cat.id
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-card text-muted ring-1 ring-border hover:text-ink',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((photo) => (
                <motion.button
                  layout
                  key={photo.id}
                  type="button"
                  className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setActive(photo)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <p className="font-display text-base font-semibold">
                        {photo.title}
                      </p>
                      <p className="mt-1 text-xs text-white/85">
                        {photo.location} · {photo.camera}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <AnimatePresence>
        {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
