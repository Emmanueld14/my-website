import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { CommandMenu } from '@/components/layout/CommandMenu'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Story } from '@/components/sections/Story'
import { Proof } from '@/components/sections/Proof'
import { Building } from '@/components/sections/Building'
import { Photography } from '@/components/sections/Photography'
import { Places } from '@/components/sections/Places'
import { Contact } from '@/components/sections/Contact'
import { useLenis } from '@/hooks/useLenis'
import { SCROLL_PENDING_KEY, scrollToSection } from '@/lib/scroll'

function PendingScroll() {
  const location = useLocation()

  useEffect(() => {
    const fromState =
      location.state &&
      typeof location.state === 'object' &&
      'scrollTo' in location.state
        ? String((location.state as { scrollTo?: string }).scrollTo ?? '')
        : ''
    const pending = fromState || sessionStorage.getItem(SCROLL_PENDING_KEY) || ''
    if (!pending) return

    sessionStorage.removeItem(SCROLL_PENDING_KEY)
    const timer = window.setTimeout(() => {
      scrollToSection(pending)
    }, 80)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.state])

  return null
}

function HomePage() {
  useLenis()

  return (
    <>
      <PendingScroll />
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <CommandMenu />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Proof />
        <Building />
        <Photography />
        <Places />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* No other routes exist yet — unknown paths still render the homepage */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
