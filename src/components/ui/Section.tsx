import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'paper' | 'surface'
type Wash = 'top' | 'subtle' | 'band'

/**
 * Consistent vertical rhythm and content width for every page section.
 *
 * A section also publishes `--card-bg`, so any Card inside it lands on the
 * opposite surface and always reads as a distinct object. That is what keeps
 * the alternating bands coherent without each card choosing its own colour.
 */
export default function Section({
  tone = 'paper',
  wash,
  first = false,
  bordered = false,
  className,
  children,
  ...rest
}: {
  tone?: Tone
  /** Gradient overlay. Reserved for moments: a CTA, or an alternating band. */
  wash?: Wash
  first?: boolean
  bordered?: boolean
  className?: string
  children: ReactNode
  id?: string
}) {
  const cardBg: CSSProperties = {
    '--card-bg': tone === 'surface' ? 'var(--paper)' : 'var(--surface)',
  } as CSSProperties

  return (
    <section
      style={cardBg}
      className={cn(
        first ? 'pt-32 pb-20' : 'py-20 md:py-24',
        tone === 'surface' ? 'bg-surface' : 'bg-paper',
        wash === 'top' && 'wash-top',
        wash === 'band' && 'wash-band',
        wash === 'subtle' && 'wash-subtle',
        bordered && 'border-t border-line',
        className,
      )}
      {...rest}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-content mx-auto">{children}</div>
      </div>
    </section>
  )
}
