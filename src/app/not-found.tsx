import Button from '../components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center bg-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-content mx-auto">
          <p
            className="rise font-mono text-[clamp(4.5rem,12vw,7rem)] font-medium leading-none tracking-tighter text-accent"
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="rise text-display-md mt-6" style={{ '--d': '80ms' } as React.CSSProperties}>
            This page doesn&apos;t exist
          </h1>
          <p
            className="rise text-muted mt-3 max-w-md text-pretty"
            style={{ '--d': '150ms' } as React.CSSProperties}
          >
            The link may be out of date, or the page has moved. Everything is reachable from the
            home page.
          </p>
          <div className="rise mt-8" style={{ '--d': '220ms' } as React.CSSProperties}>
            <Button href="/">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
