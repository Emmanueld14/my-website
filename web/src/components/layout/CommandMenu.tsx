import { Command } from 'cmdk'
import { useEffect, useState, type ReactNode } from 'react'
import {
  Camera,
  Compass,
  Home,
  Mail,
  Rocket,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { navItems } from '@/data/nav'
import { useNavNavigate } from '@/hooks/useNavNavigate'
import { cn } from '@/lib/utils'

export const OPEN_COMMAND_MENU = 'open-command-menu'

const icons: Record<string, ReactNode> = {
  home: <Home className="h-4 w-4" />,
  story: <BookOpen className="h-4 w-4" />,
  proof: <Sparkles className="h-4 w-4" />,
  building: <Rocket className="h-4 w-4" />,
  photography: <Camera className="h-4 w-4" />,
  places: <Compass className="h-4 w-4" />,
  contact: <Mail className="h-4 w-4" />,
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const { goToSection } = useNavNavigate()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener(OPEN_COMMAND_MENU, onOpen)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const go = (sectionId: string) => {
    setOpen(false)
    window.setTimeout(() => goToSection(sectionId), 50)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        aria-label="Close command menu"
        onClick={() => setOpen(false)}
      />
      <div className="relative mx-auto mt-[18vh] w-[min(92vw,32rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
        <Command label="Site navigation" className="[&_[cmdk-input]]:outline-none">
          <Command.Input
            placeholder="Jump to a section…"
            className="w-full border-b border-border bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-muted"
            autoFocus
          />
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
              No section found.
            </Command.Empty>
            <Command.Group
              heading="Navigate"
              className="px-1 py-1 text-xs text-muted"
            >
              {navItems.map((item) => (
                <Command.Item
                  key={item.id}
                  value={item.label}
                  onSelect={() => go(item.sectionId)}
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-body aria-selected:bg-surface aria-selected:text-ink',
                  )}
                >
                  <span className="text-primary">{icons[item.id]}</span>
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
          <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] text-muted">
            <span>Quick navigation</span>
            <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-sans">
              Esc
            </kbd>
          </div>
        </Command>
      </div>
    </div>
  )
}
