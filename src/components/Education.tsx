import { GraduationCap } from 'lucide-react'
import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Tag from './ui/Tag'
import Label from './ui/Label'
import InstitutionLink from './ui/InstitutionLink'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section first wash="top">
      <Reveal>
        <SectionIntro
          level={1}
          eyebrow="Education"
          title="Where the fundamentals came from"
          description="Computer science with a computational finance minor, plus the coursework behind the research."
        />
      </Reveal>

      <div className="flex flex-col gap-3 mt-10">
        {education.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 60}>
            <Card as="article" className="p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:justify-between gap-x-6 gap-y-2">
                <div className="flex items-start gap-4">
                  <span
                    className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0"
                    aria-hidden="true"
                  >
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-display-sm font-bold">{edu.degree}</h2>
                    <p className="text-[0.95rem] text-muted mt-0.5">
                      <InstitutionLink name={edu.institution} />
                    </p>
                  </div>
                </div>
                <p className="font-mono text-[0.78rem] text-muted flex-shrink-0">{edu.period}</p>
              </div>

              <div className="md:pl-[3.25rem]">
                {edu.details.length > 0 && (
                  <div className="flex flex-col gap-1 mt-4">
                    {edu.details.map((detail) => (
                      <p key={detail} className="text-sm text-ink-2">{detail}</p>
                    ))}
                  </div>
                )}

                {edu.honors.length > 0 && (
                  <div className="mt-5">
                    <Label className="mb-2">Honours</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.honors.map((honor) => (
                        <Tag key={honor} variant="honor">{honor}</Tag>
                      ))}
                    </div>
                  </div>
                )}

                {edu.courses.length > 0 && (
                  <div className="mt-5">
                    <Label className="mb-2">Selected coursework</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <Tag key={course} variant="course">{course}</Tag>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
