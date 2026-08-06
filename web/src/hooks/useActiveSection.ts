import { useEffect, useState } from 'react'
import { sectionIds } from '@/data/nav'

/**
 * Tracks which homepage section is in view via IntersectionObserver.
 * Returns the active section id (defaults to `hero` near the top).
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let bestId = 'hero'
        let bestRatio = 0
        for (const id of sectionIds) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        // Near the very top, prefer Home even if hero ratio is small
        if (window.scrollY < 80) {
          setActiveId('hero')
          return
        }

        if (bestRatio > 0) setActiveId(bestId)
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
