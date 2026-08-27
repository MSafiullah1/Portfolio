import { institutionUrl } from '../../config/site'
import { cn } from '../../lib/cn'

/**
 * Links an institution or employer to its site when one is known, and falls
 * back to plain text when it is not. Callers never have to check.
 */
export default function InstitutionLink({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const href = institutionUrl(name)
  if (!href) return <span className={className}>{name}</span>

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${name} (opens in a new tab)`}
      className={cn(
        'underline decoration-current/30 underline-offset-[3px] transition-colors hover:decoration-current',
        className,
      )}
    >
      {name}
    </a>
  )
}
