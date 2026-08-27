'use client'

import { usePathname } from 'next/navigation'
import { Mail, Linkedin } from 'lucide-react'
import Button from './Button'
import { siteConfig } from '../../config/site'

/**
 * Closing call to action.
 *
 * Suppressed on the home page, which already ends with the contact form.
 * there the band's "Get in touch" button only scrolled up to the form
 * directly above it.
 */
export default function FooterCta() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <section className="bg-paper wash-band border-t border-line">
      <div className="container mx-auto px-6 py-14">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-display-md font-bold">Let&apos;s talk about your ML problem.</h2>
            <p className="text-sm text-muted mt-2 max-w-md text-pretty">
              Open to machine learning engineering and research roles, and to collaborating on
              anything that needs to work in production.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Button href="/#contact">
              <Mail className="w-4 h-4" aria-hidden="true" /> Get in touch
            </Button>
            <Button href={siteConfig.linkedin} variant="secondary">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
