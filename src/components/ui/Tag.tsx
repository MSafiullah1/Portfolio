import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'skill' | 'tech' | 'honor' | 'course'

const VARIANTS: Record<Variant, string> = {
  skill: 'tag-skill',
  tech: 'tag-tech',
  honor: 'tag-honor',
  course: 'tag-course',
}

export default function Tag({
  variant = 'tech',
  className,
  children,
}: {
  variant?: Variant
  className?: string
  children: ReactNode
}) {
  return <span className={cn('tag', VARIANTS[variant], className)}>{children}</span>
}
