import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'default' | 'feature'

const VARIANTS: Record<Variant, string> = {
  default: 'card-default',
  feature: 'card-feature',
}

type CardProps = {
  variant?: Variant
  /** Adds hover affordance for cards that are themselves links. */
  interactive?: boolean
  as?: ElementType
  className?: string
  children: ReactNode
  id?: string
}

export default function Card({
  variant = 'default',
  interactive = false,
  as: Tag = 'div',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn('card', VARIANTS[variant], interactive && 'card-link', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
