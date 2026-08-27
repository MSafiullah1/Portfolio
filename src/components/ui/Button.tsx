import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary'

const VARIANTS: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
}

const SIZE = 'px-5 py-2.5 text-sm'

type BaseProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined }

type AsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string }

type ButtonProps = AsButton | AsLink

/** Absolute URLs and protocol links bypass the client router. */
const isExternal = (href: string) => /^(https?:|mailto:|tel:)/i.test(href)

const isLink = (props: ButtonProps): props is AsLink => typeof props.href === 'string'

/**
 * Polymorphic action. Renders a `<button>`, a plain `<a>` for external and
 * protocol hrefs, or a `next/link` for internal routes, so `basePath` is
 * always applied to internal navigation and `rel`/`target` are never
 * forgotten on an outbound link.
 */
export default function Button(props: ButtonProps) {
  const { variant = 'primary', className, children, ...rest } = props
  const classes = cn('btn', VARIANTS[variant], SIZE, className)

  if (isLink(props)) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string
    }

    if (isExternal(href)) {
      const isHttp = /^https?:/i.test(href)
      return (
        <a
          href={href}
          className={classes}
          {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...anchorProps}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
