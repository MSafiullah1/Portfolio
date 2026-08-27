import Image from 'next/image'
import { Mail, ArrowRight } from 'lucide-react'
import imgSrc from '../assets/IMG_0970.jpeg'
import NeuralNetwork from './ui/NeuralNetwork'
import { siteConfig } from '../config/site'
import Button from './ui/Button'
import SocialLinks from './ui/SocialLinks'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-paper">
      {/* Depth wash: a cool gradient the flat token colour can't give on its own. */}
      <div className="absolute inset-0 wash-hero" aria-hidden="true" />

      <NeuralNetwork className="absolute inset-0 h-full w-full pointer-events-none [mask-image:linear-gradient(100deg,transparent_3%,rgba(0,0,0,0.45)_24%,#000_50%,rgba(0,0,0,0.3)_84%)]" />

      {/* Settle the mesh into the next band. */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-24 pt-32 relative z-10">
        <div className="max-w-content mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="rise font-mono text-xs uppercase tracking-[0.18em] text-accent"
              style={{ '--d': '0ms' } as React.CSSProperties}
            >
              {siteConfig.tagline}
            </p>

            <h1
              className="rise text-display-xl mt-5"
              style={{ '--d': '80ms' } as React.CSSProperties}
            >
              Safiullah<br className="hidden sm:block" /> Sarfraz
            </h1>

            <p
              className="rise text-lg font-medium text-ink-2 mt-4"
              style={{ '--d': '150ms' } as React.CSSProperties}
            >
              {siteConfig.role}
            </p>

            <p
              className="rise text-base text-muted leading-relaxed max-w-xl text-pretty mt-5"
              style={{ '--d': '220ms' } as React.CSSProperties}
            >
              Building research-to-production ML systems. I work across
              agentic AI, federated learning, and multi-agent systems, combining research depth
              with deployable engineering.
            </p>

            <div
              className="rise flex flex-wrap items-center gap-3 mt-8"
              style={{ '--d': '290ms' } as React.CSSProperties}
            >
              <Button href="#contact">
                <Mail className="w-4 h-4" aria-hidden="true" /> Get in touch
              </Button>
              <Button href="/projects" variant="secondary">
                See the work <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <SocialLinks variant="icon" className="ml-1" />
            </div>

            <div
              className="rise inline-flex items-center gap-2.5 mt-8 rounded-full border border-line bg-accent/[0.04] pl-3 pr-4 py-1.5"
              style={{ '--d': '360ms' } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2 text-success" aria-hidden="true">
                <span className="ping absolute inset-0 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[0.72rem] text-muted">
                {siteConfig.current.map(({ role, org }, i) => (
                  <span key={org}>
                    {i > 0 && <span className="mx-1.5 text-line-strong">·</span>}
                    {role} @ <span className="text-ink-2">{org}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div
            className="rise flex justify-center lg:justify-end px-3"
            style={{ '--d': '200ms' } as React.CSSProperties}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
              {/* Offset frame, reads as a drafting registration mark. */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/30"
                aria-hidden="true"
              />
              <Image
                src={imgSrc}
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                width={340}
                height={425}
                sizes="(max-width: 640px) 300px, 340px"
                className="relative w-full h-auto aspect-[4/5] object-cover rounded-2xl border border-line shadow-lg [filter:saturate(0.95)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
