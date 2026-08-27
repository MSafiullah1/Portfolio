'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type State = 'initial' | 'hidden' | 'revealed'

const FAILSAFE_MS = 1200

/**
 * Fades content in as it scrolls into view.
 *
 * Renders unstyled on the server, so the static HTML is fully visible with
 * JavaScript disabled. Content already on screen at mount is left alone,
 * only elements that start below the fold are hidden and then animated,
 * which avoids a visible->hidden->visible flash on first paint.
 */
export default function Reveal({
  className,
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<State>('initial')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState('hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    // Safety net: never leave content hidden because an observer callback did
    // not arrive. IntersectionObserver is suspended in some contexts
    // (background tabs, embedded webviews, automation), and a missed callback
    // must degrade to visible content, not invisible content.
    const failSafe = window.setTimeout(reveal, FAILSAFE_MS)

    function reveal() {
      window.clearTimeout(failSafe)
      observer.disconnect()
      setState('revealed')
    }

    observer.observe(el)

    return () => {
      window.clearTimeout(failSafe)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(state === 'hidden' && 'opacity-0', state === 'revealed' && 'reveal', className)}
      style={state === 'revealed' && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
