import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Mic,
  PenLine,
  Sparkles,
  Trophy,
  Users,
  MapPin,
  Calendar,
} from 'lucide-react'
import { achievements, type Achievement } from '@/data/achievements'
import { SectionHeading } from '@/components/layout/SectionHeading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const iconMap = {
  trophy: Trophy,
  globe: Globe,
  mic: Mic,
  pen: PenLine,
  users: Users,
  sparkles: Sparkles,
}

function AchievementCard({
  item,
  index,
  onOpen,
}: {
  item: Achievement
  index: number
  onOpen: () => void
}) {
  const Icon = iconMap[item.icon]

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-2xl border border-border bg-card p-5 text-left shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="overflow-hidden rounded-xl opacity-0 transition duration-300 group-hover:opacity-100">
          <img
            src={item.photos[0]}
            alt=""
            className="h-14 w-20 object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
        {item.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {item.date}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-body">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.button>
  )
}

export function Proof() {
  const [active, setActive] = useState<Achievement | null>(null)

  return (
    <section id="proof" className="relative scroll-mt-20 bg-surface/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Proof"
          title="Moments that left a mark"
          description="Competitions, conferences, and the kind of rooms that change how you show up. Click any card for the full story."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <AchievementCard
              key={item.id}
              item={item}
              index={index}
              onOpen={() => setActive(item)}
            />
          ))}
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>
                  {active.date} · {active.location}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 sm:grid-cols-2">
                {active.photos.map((photo, i) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={`${active.title} photo ${i + 1}`}
                    className={cn(
                      'aspect-[4/3] w-full rounded-xl object-cover',
                      active.photos.length === 1 && 'sm:col-span-2',
                    )}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-body">{active.description}</p>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Skills & growth
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
