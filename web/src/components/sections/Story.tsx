import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '@/data/timeline'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    const line = lineRef.current
    if (!container || !line) return

    const entries = container.querySelectorAll<HTMLElement>('[data-timeline-entry]')

    if (reduced) {
      gsap.set(entries, { opacity: 1, y: 0 })
      gsap.set(line, { scaleY: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: true,
          },
        },
      )

      entries.forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: entry,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, container)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="story" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Story"
          title="A few moments that shaped the path"
          description="Not a résumé in disguise — just the beats that matter: curiosity, stages, cities, and the decision to build Bloomly."
        />

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[11px] top-2 w-px origin-top bg-border sm:left-1/2 sm:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>

          <ol className="space-y-10 sm:space-y-16">
            {timeline.map((entry, index) => {
              const left = index % 2 === 0
              return (
                <li
                  key={entry.id}
                  data-timeline-entry
                  className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
                >
                  <div
                    className={`absolute left-[7px] top-3 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2 ${
                      left ? 'sm:top-8' : 'sm:top-8'
                    }`}
                  />

                  <article
                    className={`ml-8 rounded-2xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:ml-0 ${
                      left ? 'sm:col-start-1 sm:text-right' : 'sm:col-start-2'
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {entry.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body sm:text-[15px]">
                      {entry.summary}
                    </p>
                    <div
                      className={`mt-4 overflow-hidden rounded-xl ${
                        left ? 'sm:ml-auto' : ''
                      } max-w-sm`}
                    >
                      <img
                        src={entry.photo}
                        alt={entry.photoAlt}
                        className="aspect-[16/10] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
