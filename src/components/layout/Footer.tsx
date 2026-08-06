import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'
import { useNavNavigate } from '@/hooks/useNavNavigate'
import { Button } from '@/components/ui/button'

export function Footer() {
  const year = new Date().getFullYear()
  const { goHome } = useNavNavigate()

  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-center sm:flex-row sm:text-left sm:px-8">
        <div>
          <p className="text-sm text-body">{profile.footerLine}</p>
          <p className="mt-1 text-xs text-muted">
            © {year} {profile.copyrightName}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={goHome}
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </Button>
      </div>
    </footer>
  )
}
