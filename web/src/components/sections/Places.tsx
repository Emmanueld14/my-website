import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { places, type Place } from '@/data/places'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { cn } from '@/lib/utils'

export function Places() {
  const [active, setActive] = useState<Place | null>(
    places.find((p) => p.status === 'visited') ?? null,
  )

  return (
    <section id="places" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Where I’ve Been"
          title="Pins on a map, memories attached"
          description="Places visited light up. Future destinations stay quiet — greyed for now, not forever."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(37,99,235,0.12), transparent 35%),
                  radial-gradient(circle at 70% 60%, rgba(20,184,166,0.1), transparent 40%),
                  linear-gradient(160deg, #e2e8f0 0%, #f8fafc 45%, #e0f2fe 100%)
                `,
              }}
            />
            <div className="grain absolute inset-0 opacity-40 dark:opacity-20" />
            {/* Simple stylized continents as soft shapes */}
            <svg
              className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M8 22c4-6 12-8 18-5 5 2 8 8 14 8 4 0 7-4 12-3 6 1 9 7 15 7 5 0 8-5 13-4 4 1 7 5 10 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                className="text-ink"
              />
              <path
                d="M18 38c3-2 8-1 11 2 4 4 9 5 14 3 6-2 10 2 15 3 5 1 9-2 13-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.35"
                className="text-ink"
              />
            </svg>

            {places.map((place) => {
              const visited = place.status === 'visited'
              const selected = active?.id === place.id
              return (
                <button
                  key={place.id}
                  type="button"
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  className={cn(
                    'absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    visited
                      ? 'text-primary'
                      : 'text-muted opacity-50 hover:opacity-80',
                  )}
                  aria-label={`${place.name}, ${place.country}${visited ? '' : ' (future)'}`}
                  onClick={() => setActive(place)}
                >
                  <span
                    className={cn(
                      'relative flex h-8 w-8 items-center justify-center',
                      selected && 'scale-110',
                    )}
                  >
                    {visited && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                    )}
                    <span
                      className={cn(
                        'relative flex h-7 w-7 items-center justify-center rounded-full border shadow-soft',
                        visited
                          ? 'border-primary/30 bg-card text-primary'
                          : 'border-border bg-surface text-muted',
                        selected && 'ring-2 ring-primary/40',
                      )}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              {active && (
                <motion.article
                  key={active.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {active.photo && (
                    <img
                      src={active.photo}
                      alt={active.name}
                      className="mb-4 aspect-[16/10] w-full rounded-xl object-cover"
                    />
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    {active.status === 'visited' ? 'Visited' : 'Future destination'}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {active.name}
                  </h3>
                  <p className="text-sm text-muted">{active.country}</p>
                  {active.memory && (
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {active.memory}
                    </p>
                  )}
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
