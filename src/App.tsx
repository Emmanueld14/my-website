import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function HomePage() {
  useLenis()

  return (
    <>
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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
