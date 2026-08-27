import Script from 'next/script'

/**
 * Cloudflare Web Analytics.
 *
 * Cookieless and does not fingerprint, so it needs no consent banner and
 * collects nothing that identifies a visitor. It reports page views,
 * referrers, countries and devices in aggregate only.
 *
 * Renders nothing without a token, and nothing in development, so local
 * browsing never pollutes the numbers.
 */
const TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN

export default function Analytics() {
  if (!TOKEN || process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      id="cf-web-analytics"
      // Cloudflare serves the current beacon as an ES module.
      type="module"
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: TOKEN })}
    />
  )
}
