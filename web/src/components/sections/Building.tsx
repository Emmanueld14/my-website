import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'

export function Building() {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const others = projects.filter((p) => p.id !== featured.id)

  return (
    <section id="building" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Building"
          title="Bloomly — and what comes next"
          description="Less portfolio polish, more product story: the problem, what’s live, and where it’s headed."
        />

        <motion.article
          className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-3xl font-bold text-white">
                  {featured.name}
                </p>
                <p className="mt-1 text-sm text-white/85">{featured.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  The problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px]">
                  {featured.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  What I built
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px]">
                  {featured.built}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  What’s live
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px]">
                  {featured.status}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  What’s next
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px]">
                  {featured.next}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {featured.href && (
                <div>
                  <Button asChild>
                    <a href={featured.href} target="_blank" rel="noreferrer">
                      {featured.hrefLabel ?? 'Visit project'}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.article>

        {others.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((project, index) => (
              <motion.article
                key={project.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-secondary">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {project.built}
                </p>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
