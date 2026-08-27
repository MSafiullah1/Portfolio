import { Brain, Layers, LineChart, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Tag from './ui/Tag'
import Label from './ui/Label'
import { services, languages, tooling, type Service } from '../data/services'

const ICONS: Record<Service['icon'], LucideIcon> = {
  brain: Brain,
  layers: Layers,
  chart: LineChart,
  teach: GraduationCap,
}

export default function Capabilities() {
  return (
    <Section wash="subtle" bordered>
      <Reveal>
        <SectionIntro
          eyebrow="Capabilities"
          title="What I can help with"
          description="Four areas, each backed by work shown elsewhere on this site. Available for contract and consulting alongside full-time roles."
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-3 mt-10">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon]
          return (
            <Reveal key={service.title} delay={Math.min(i, 3) * 60}>
              <Card className="h-full p-6 flex flex-col">
                <span
                  className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </span>

                <h3 className="text-display-sm font-bold mt-4">{service.title}</h3>
                <p className="text-sm text-muted mt-2 text-pretty">{service.summary}</p>

                <div className="mt-5">
                  <Label className="mb-2">What I deliver</Label>
                  <div className="flex flex-wrap gap-1.5">
                    {service.offerings.map((item) => (
                      <Tag key={item} variant="skill">{item}</Tag>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-line">
                  <Label className="mb-2">Built with</Label>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <Tag key={tool} variant="tech">{tool}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={80}>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <Card className="p-5">
            <Label className="mb-2.5">Languages</Label>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <Tag key={lang} variant="tech">{lang}</Tag>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <Label className="mb-2.5">Tooling</Label>
            <div className="flex flex-wrap gap-1.5">
              {tooling.map((tool) => (
                <Tag key={tool} variant="tech">{tool}</Tag>
              ))}
            </div>
          </Card>
        </div>
      </Reveal>
    </Section>
  )
}
