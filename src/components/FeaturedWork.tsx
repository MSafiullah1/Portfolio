import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'
import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Tag from './ui/Tag'
import { flagship } from '../data/projects'

const FEATURED_COUNT = 3

export default function FeaturedWork() {
  const featured = flagship.slice(0, FEATURED_COUNT)

  return (
    <Section tone="surface" bordered>
      <Reveal>
        <SectionIntro
          eyebrow="Featured work"
          title="Selected case studies"
          description="Each one is written up with the problem, the approach and the measured result."
          action={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              All projects
              <ArrowRight className="w-3.5 h-3.5 nudge" aria-hidden="true" />
            </Link>
          }
        />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-3 mt-10">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70}>
            <Link href={`/projects#${project.slug}`} className="group block h-full rounded-card">
              <Card interactive className="h-full p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[1.05rem] font-bold leading-snug">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-[18px] h-[18px] text-accent flex-shrink-0 nudge"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-sm text-muted mt-2.5 flex-grow text-pretty">
                  {project.summary}
                </p>

                {project.metric && (
                  <p className="font-mono text-[0.82rem] font-medium text-signal mt-4">
                    {project.metric}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Tag key={tech} variant="tech">{tech}</Tag>
                  ))}
                </div>

                {(project.repo || project.demo) && (
                  <p className="inline-flex items-center gap-1.5 mt-4 text-[0.78rem] text-muted">
                    <Code2 className="w-[15px] h-[15px]" aria-hidden="true" />
                    Source available
                  </p>
                )}
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
