'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * Isolated so the rest of the footer can stay a server component.
 * Scroll handling is passive and rAF-throttled; the scroll itself honours
 * prefers-reduced-motion, which `scroll-behavior` alone does not cover for
 * programmatic scrolling.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 500)
        frame = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-10 h-10 rounded-lg bg-surface border border-line-strong text-muted shadow-md flex items-center justify-center transition-all duration-300 [transition-timing-function:var(--ease-out)] hover:text-accent hover:border-accent ${
        visible ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-90 translate-y-2'
      }`}
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
    </button>
  )
}
