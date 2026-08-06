import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, Command, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { profile } from '@/data/profile'
import { navCta, navItems } from '@/data/nav'
import { Button } from '@/components/ui/button'
import { OPEN_COMMAND_MENU } from '@/components/layout/CommandMenu'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useNavNavigate } from '@/hooks/useNavNavigate'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()
  const { goToSection, goHome } = useNavNavigate()
  const panelId = useId()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const openCommand = () => {
    window.dispatchEvent(new Event(OPEN_COMMAND_MENU))
  }

  const handleNav = (sectionId: string) => {
    setMobileOpen(false)
    // Allow overlay to close before scrolling on mobile
    window.requestAnimationFrame(() => goToSection(sectionId))
  }

  const linkClass = (sectionId: string) =>
    cn(
      'whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:px-3 lg:text-sm',
      activeSection === sectionId
        ? 'bg-ink text-background shadow-soft'
        : 'text-muted hover:bg-surface hover:text-ink',
    )

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled || mobileOpen
            ? 'border-b border-border/80 bg-background/80 shadow-soft backdrop-blur-xl'
            : 'bg-transparent',
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              goHome()
            }}
            className="mr-1 shrink-0 rounded-md font-display text-lg font-bold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {profile.name}
          </button>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:gap-1 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.sectionId)}
                className={linkClass(item.sectionId)}
                aria-current={
                  activeSection === item.sectionId ? 'page' : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleNav(navCta.sectionId)}
            >
              {navCta.label}
            </Button>
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
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls={panelId}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id={panelId}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 pt-20 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-1 flex-col gap-1 px-5 pb-10" aria-label="Mobile">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.sectionId)}
                  className={cn(
                    'rounded-2xl px-4 py-3.5 text-left text-base font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    activeSection === item.sectionId
                      ? 'bg-ink text-background'
                      : 'text-body hover:bg-surface hover:text-ink',
                  )}
                  aria-current={
                    activeSection === item.sectionId ? 'page' : undefined
                  }
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="lg"
                className="mt-4 w-full"
                onClick={() => handleNav(navCta.sectionId)}
              >
                {navCta.label}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
