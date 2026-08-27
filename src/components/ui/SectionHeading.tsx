import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Level = 1 | 2 | 3

const SIZES: Record<Level, string> = {
  1: 'text-display-lg',
  2: 'text-display-md',
  3: 'text-display-sm',
}

/**
 * Page and section headings. `level` is explicit so heading order stays
 * 1 -> 2 -> 3 on every route; visual size is decoupled from semantics.
 */
export default function SectionHeading({
  level = 2,
  className,
  children,
}: {
  level?: Level
  className?: string
  children: ReactNode
}) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3'
  return <Tag className={cn('font-display', SIZES[level], className)}>{children}</Tag>
}

/**
 * Small uppercase label. Deliberately a <p>, not a heading, because these were
 * previously <h3> elements styled at text-xs, which broke heading order
 * and misled screen readers.
 */
export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        'text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-accent',
        className,
      )}
    >
      {children}
    </p>
  )
}

/**
 * The standard opening block for a section: eyebrow, heading, supporting line,
 * and an optional action pinned to the right. Keeping these four together in
 * one component is what stops the spacing drifting between sections.
 */
export function SectionIntro({
  eyebrow,
  title,
  description,
  level = 2,
  action,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  level?: Level
  action?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4',
        className,
      )}
    >
      <div className="max-w-xl">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <SectionHeading level={level}>{title}</SectionHeading>
        {description && <p className="text-muted mt-3 text-pretty">{description}</p>}
      </div>
      {action && <div className="flex-shrink-0 sm:pb-1">{action}</div>}
    </div>
  )
}
