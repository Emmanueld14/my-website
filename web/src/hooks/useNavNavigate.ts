import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SCROLL_PENDING_KEY, scrollToSection } from '@/lib/scroll'

/**
 * Navigate to a homepage section from anywhere.
 * Same page → smooth scroll. Other route → go to `/` then scroll once mounted.
 */
export function useNavNavigate() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = useCallback(
    (sectionId: string) => {
      const onHome = location.pathname === '/' || location.pathname === ''

      if (onHome) {
        scrollToSection(sectionId)
        return
      }

      sessionStorage.setItem(SCROLL_PENDING_KEY, sectionId)
      navigate('/', { state: { scrollTo: sectionId } })
    },
    [location.pathname, navigate],
  )

  const goHome = useCallback(() => {
    goToSection('hero')
  }, [goToSection])

  return { goToSection, goHome, pathname: location.pathname }
}
