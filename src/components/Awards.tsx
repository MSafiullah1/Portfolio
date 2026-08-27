import { Award } from 'lucide-react'
import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import { awardGroups } from '../data/education'

export default function Awards() {
  return (
    <Section tone="surface" wash="subtle" bordered>
      <Reveal>
        <SectionIntro eyebrow="Recognition" title={<>Honors &amp; awards</>} />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-3 mt-10">
        {awardGroups.map((group, index) => (
          <Reveal key={group.institution} delay={index * 60}>
            <Card className="h-full p-6">
              <h3 className="font-display text-[1.05rem] font-bold">{group.institution}</h3>
              <ul className="flex flex-col gap-3 mt-5">
                {group.awards.map((award) => (
                  <li key={award} className="flex items-start gap-3">
                    <Award
                      className="w-[17px] h-[17px] text-honour flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ink-2 text-pretty">{award}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
