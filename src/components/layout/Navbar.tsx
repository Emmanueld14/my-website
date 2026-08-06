import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Command } from 'lucide-react'
import { useTheme } from 'next-themes'
import { profile } from '@/data/profile'
import { navSections } from '@/data/places'
import { Button } from '@/components/ui/button'
import { OPEN_COMMAND_MENU } from '@/components/layout/CommandMenu'
import { scrollToSection } from '@/hooks/useScrollTo'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openCommand = () => {
    window.dispatchEvent(new Event(OPEN_COMMAND_MENU))
  }

  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-background/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          {profile.name}
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navSections
            .filter((s) => s.id !== 'hero')
            .map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-ink"
              >
                {section.label}
              </button>
            ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open command menu"
            onClick={openCommand}
            className="hidden sm:inline-flex"
          >
            <Command className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
