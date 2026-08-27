import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HashScroll from '../components/ui/HashScroll'
import Analytics from '../components/ui/Analytics'
import { siteConfig } from '../config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})
// Used for metrics, periods, stack tags and eyebrows: the technical register.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const title = `${siteConfig.name} | ${siteConfig.role}`
const description =
  'ML Engineer building applied LLM, RAG, and research-to-production systems. Specializing in agentic AI, federated learning, and multi-agent systems.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#070B14' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${grotesk.variable} ${inter.variable} ${mono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HashScroll />
          <a
            href="#main-content"
            className="fixed top-3 left-3 z-[100] -translate-y-[200%] rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg shadow-lg transition-transform duration-200 [transition-timing-function:var(--ease-out)] focus-visible:translate-y-0"
          >
            Skip to content
          </a>

          <div className="flex flex-col min-h-screen bg-paper text-ink">
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
