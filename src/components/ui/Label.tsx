import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/**
 * Small structural label: Problem, Stack, Honours, Pages, Connect.
 *
 * Sans rather than mono. Monospace is reserved for things that are actually
 * data (dates, metrics, tool names), and using it for prose labels made them
 * read as cramped terminal output rather than typography.
 */
export default function Label({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn(
        'text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-muted',
        className,
      )}
    >
      {children}
    </p>
  )
}
