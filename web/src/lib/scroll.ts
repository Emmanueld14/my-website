import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance
}

export function scrollToSection(
  id: string,
  options?: { immediate?: boolean },
) {
  if (id === 'hero' || id === 'top') {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: options?.immediate })
    } else {
      window.scrollTo({
        top: 0,
        behavior: options?.immediate ? 'auto' : 'smooth',
      })
    }
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset: -80,
      immediate: options?.immediate,
    })
  } else {
    el.scrollIntoView({
      behavior: options?.immediate ? 'auto' : 'smooth',
      block: 'start',
    })
  }
}

export const SCROLL_PENDING_KEY = 'manuel-pending-scroll'
