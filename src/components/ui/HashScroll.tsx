'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SETTLE_MS = 700
const TOLERANCE_PX = 4

/**
 * Restores deep-link behaviour for URL fragments.
 *
 * On a statically exported App Router page the browser attempts its native
 * fragment scroll before React has hydrated the target into the document, and
 * the router then restores scroll to the top, so `/projects/#some-slug` lands
 * at the top of the page. This keeps correcting the scroll position for a
 * short window after mount until the target is actually in place.
 *
 * `behavior: 'instant'` is required: `html { scroll-behavior: smooth }` would
 * otherwise animate the jump, and a competing scroll restoration cancels it.
 */
export default function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return

    let frame = 0
    let cancelled = false
    const deadline = performance.now() + SETTLE_MS

    const settle = () => {
      if (cancelled) return

      const el = document.getElementById(id)
      if (el) {
        const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
        const delta = el.getBoundingClientRect().top - offset

        if (Math.abs(delta) > TOLERANCE_PX) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' })
        }
      }

      if (performance.now() < deadline) frame = requestAnimationFrame(settle)
    }

    // A user scrolling during the settle window takes precedence.
    const abort = () => {
      cancelled = true
    }
    window.addEventListener('wheel', abort, { passive: true, once: true })
    window.addEventListener('touchstart', abort, { passive: true, once: true })

    frame = requestAnimationFrame(settle)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.removeEventListener('wheel', abort)
      window.removeEventListener('touchstart', abort)
    }
  }, [pathname])

  return null
}
