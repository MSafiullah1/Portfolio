import Link from 'next/link'
import SocialLinks from './ui/SocialLinks'
import ScrollToTop from './ui/ScrollToTop'
import FooterCta from './ui/FooterCta'
import { navItems, siteConfig } from '../config/site'

export default function Footer() {
  return (
    <>
      <FooterCta />

      <footer className="bg-paper border-t border-line">
        <div className="container mx-auto px-6 py-14">
          <div className="max-w-content mx-auto grid md:grid-cols-3 gap-10 pb-12 border-b border-line">
            <div>
              <p className="font-display text-base font-bold">{siteConfig.name}</p>
              <p className="text-sm text-muted leading-relaxed mt-3 max-w-xs text-pretty">
                {siteConfig.summary}
              </p>
              <p className="text-sm text-muted mt-4">{siteConfig.location}</p>
            </div>

            <nav aria-label="Footer">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-muted mb-4">Pages</h2>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-muted mb-4">Connect</h2>
              <SocialLinks variant="list" />
            </div>
          </div>

          <div className="max-w-content mx-auto pt-8">
            <p className="text-sm text-muted text-center">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  )
}
