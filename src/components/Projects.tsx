import { Github, ExternalLink } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading, { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Tag from './ui/Tag'
import Label from './ui/Label'
import InstitutionLink from './ui/InstitutionLink'
import { flagship, otherProjects } from '../data/projects'
import type { FlagshipProject } from '../data/projects'

function Block({
  label,
  children,
  emphasis = false,
}: {
  label: string
  children: string
  emphasis?: boolean
}) {
  return (
    <div className={emphasis ? 'rounded-lg border border-signal/30 bg-signal/[0.06] p-4' : ''}>
      <Label className={emphasis ? 'text-signal' : undefined}>{label}</Label>
      <p className={`text-sm mt-1.5 text-pretty ${emphasis ? 'text-ink font-medium' : 'text-ink-2'}`}>
        {children}
      </p>
    </div>
  )
}

function CaseStudy({ project }: { project: FlagshipProject }) {
  const hasLinks = Boolean(project.repo || project.demo)

  return (
    <Card id={project.slug} className="p-6 md:p-8 scroll-mt-28">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-6 gap-y-1">
        <div>
          <h3 className="text-display-sm font-bold">{project.title}</h3>
          <p className="text-sm font-medium text-accent mt-1">
            <InstitutionLink name={project.affiliation} />
          </p>
        </div>
        <p className="font-mono text-[0.78rem] text-muted flex-shrink-0">{project.period}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 mt-6">
        <div className="flex flex-col gap-5">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Result" emphasis>{project.result}</Block>
        </div>

        <div className="flex flex-col gap-5">
          <Block label="Approach">{project.approach}</Block>
          <div>
            <Label className="mb-2">Stack</Label>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Tag key={tech} variant="tech">{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hasLinks && (
        <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-line">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-4 py-2 text-sm"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              View source
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-4 py-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live demo
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      )}
    </Card>
  )
}

export default function Projects() {
  return (
    <>
      <Section first wash="top">
        <Reveal>
          <SectionIntro
            level={1}
            eyebrow="Projects"
            title="Evidence, not adjectives"
            description={<>Four case studies written up in full, followed by the shorter work that didn&apos;t need one.</>}
          />
        </Reveal>

        <SectionHeading level={2} className="mt-14 mb-5">Case studies</SectionHeading>

        <nav aria-label="Jump to a case study" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {flagship.map((project, i) => (
              <li key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="font-mono text-[0.7rem] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          {flagship.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 3) * 50}>
              <CaseStudy project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface" wash="subtle" bordered>
        <Reveal>
          <SectionIntro
            eyebrow="Also built"
            title="Other projects"
            description="Smaller experiments and coursework that still shipped something working."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {otherProjects.map((project, i) => (
            <Reveal key={project.title} delay={Math.min(i, 5) * 50}>
              <Card className="h-full p-5 flex flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base font-bold">{project.title}</h3>
                  <span className="font-mono text-[0.72rem] text-muted flex-shrink-0">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-muted mt-2 mb-4 flex-grow text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Tag key={tech} variant="tech">{tech}</Tag>
                  ))}
                </div>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent hover:underline"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    View source
                    <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
