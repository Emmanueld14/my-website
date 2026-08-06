import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/hooks/useScrollTo'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={profile.heroPhoto.src}
          alt=""
          className="h-full w-full object-cover object-center"
          width={1600}
          height={2000}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/35 dark:from-background dark:via-background/90 dark:to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <motion.div
          className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Visually hidden full alt for screen readers */}
      <span className="sr-only">{profile.heroPhoto.alt}</span>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-28">
        <motion.p
          className="font-display text-6xl font-bold tracking-tight text-ink sm:text-8xl md:text-9xl lg:text-[7.5rem] lg:leading-[0.92]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          className="mt-4 text-sm font-medium tracking-wide text-secondary sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {profile.roles.join(' • ')}
        </motion.p>

        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          {profile.intro}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <Button size="lg" onClick={() => scrollToSection('story')}>
            View My Journey
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={profile.resumeUrl} download>
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('story')}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        aria-label="Scroll to story"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border/80 bg-card/50 pt-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
      </motion.button>
    </section>
  )
}
