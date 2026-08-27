'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION = 1100

/** Splits "3.99" / "500+" / "4+" into the number and whatever trails it. */
function parse(value: string) {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value.trim())
  if (!match) return null
  return { target: parseFloat(match[1]), decimals: (match[1].split('.')[1] ?? '').length, rest: match[2] }
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Counts a metric up when it scrolls into view.
 *
 * The final value is what renders on the server, so the static HTML is correct
 * with JavaScript disabled. Animation only engages for values that start below
 * the fold. Anything already on screen at mount is left alone, which avoids a
 * final -> zero -> final flash on first paint.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    const parsed = parse(value)
    if (!el || !parsed) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    const { target, decimals, rest } = parsed

    let frame = 0
    let start = 0

    const run = (now: number) => {
      if (!start) start = now
      const t = Math.min((now - start) / DURATION, 1)
      setDisplay(t < 1 ? `${(target * easeOut(t)).toFixed(decimals)}${rest}` : value)
      if (t < 1) frame = requestAnimationFrame(run)
      else window.clearTimeout(settleTimer)
    }

    // The zero is only written once the observer confirms the element is on
    // screen. If the callback never arrives, because IntersectionObserver is
    // suspended in background tabs and some embedded webviews, the rendered
    // final value simply stays put rather than sticking at zero.
    let settleTimer = 0

    const settle = () => {
      cancelAnimationFrame(frame)
      frame = 0
      setDisplay(value)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setDisplay(`${(0).toFixed(decimals)}${rest}`)
        frame = requestAnimationFrame(run)

        // requestAnimationFrame is suspended while a tab is in the
        // background, which would otherwise freeze the counter partway and
        // leave a wrong number on screen. Snap to the real value if the
        // animation has not finished on its own.
        settleTimer = window.setTimeout(settle, DURATION + 400)
        document.addEventListener('visibilitychange', onHide)
      },
      { threshold: 0.4 },
    )

    function onHide() {
      if (document.hidden) settle()
    }

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.clearTimeout(settleTimer)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [value])

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  )
}
