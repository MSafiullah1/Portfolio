import { Github, Linkedin, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { socialLinks, type SocialId } from '../../config/site'
import { cn } from '../../lib/cn'

const ICONS: Record<SocialId, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

/**
 * `icon` renders bordered icon buttons (hero); `list` renders icon + label
 * rows (footer). Both are driven by siteConfig so there is one place to
 * change a handle.
 */
export default function SocialLinks({
  variant = 'icon',
  className,
}: {
  variant?: 'icon' | 'list'
  className?: string
}) {
  return (
    <div className={cn(variant === 'icon' ? 'flex items-center gap-2' : 'space-y-3', className)}>
      {socialLinks.map(({ id, href, label }) => {
        const Icon = ICONS[id]
        const isHttp = href.startsWith('http')

        return (
          <a
            key={id}
            href={href}
            {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={variant === 'icon' ? label : undefined}
            title={variant === 'icon' ? label : undefined}
            className={
              variant === 'icon'
                ? 'w-10 h-10 rounded-lg border border-line-strong text-muted flex items-center justify-center transition-colors hover:border-accent hover:text-accent'
                : 'flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink'
            }
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {variant === 'list' && label}
          </a>
        )
      })}
    </div>
  )
}
