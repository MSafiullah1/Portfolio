'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import ScrollProgress from './ui/ScrollProgress'
import { navItems, siteConfig } from '../config/site'
import { cn } from '../lib/cn'

const DRAWER_ID = 'mobile-nav'

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()

  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  // Passive + rAF-throttled: this fires on every scroll frame otherwise.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)
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

  // Close on navigation.
  useEffect(() => setMenuOpen(false), [pathname])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    triggerRef.current?.focus()
  }, [])

  // Scroll lock, document-level Escape, and a focus trap while the drawer is
  // open. The previous implementation put Escape on the scrim itself, so it
  // only fired when the scrim happened to hold focus.
  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab') return

      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusables?.length) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    drawerRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen, closeMenu])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-muted transition-colors hover:text-ink hover:bg-ink/5"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent',
      )}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main">
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight transition-colors hover:text-accent"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'relative px-3.5 py-2 rounded-lg text-sm transition-colors',
                      isActive(item.href)
                        ? 'text-ink font-semibold'
                        : 'text-muted font-medium hover:text-ink',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-accent',
                        'origin-left transition-transform duration-300 [transition-timing-function:var(--ease-out)]',
                        isActive(item.href) ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <span className="h-5 w-px bg-line" aria-hidden="true" />
            {mounted && themeButton}
          </div>

          <div className="lg:hidden flex items-center gap-1">
            {mounted && themeButton}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 rounded-lg text-muted transition-colors hover:text-ink hover:bg-ink/5"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls={DRAWER_ID}
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <ScrollProgress />

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu} aria-hidden="true" />

          <div
            ref={drawerRef}
            id={DRAWER_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-paper border-l border-line p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-display text-base font-semibold">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-lg text-muted transition-colors hover:text-ink hover:bg-ink/5"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-accent bg-accent/10'
                        : 'text-muted hover:text-ink hover:bg-ink/5',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line">
              <p className="font-mono text-[0.72rem] text-muted">
                {siteConfig.role}
                <span className="mx-1.5 text-line-strong">·</span>
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
