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
      {/* Image layer — no CSS blur/filter on the photo itself */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={profile.heroPhoto.src}
          alt=""
          width={profile.heroPhoto.width}
          height={profile.heroPhoto.height}
          sizes="100vw"
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_48%] md:object-[68%_45%]"
          style={{
            // Avoid any browser “optimize” that softens photos
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Overlay layer — separate from the image so tint ≠ blur */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-transparent dark:from-background/95 dark:via-background/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/15" />
      </div>

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
