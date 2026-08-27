import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import CountUp from './ui/CountUp'

const stats = [
  { value: '3.99', suffix: '/4.00', label: 'Major GPA' },
  { value: '500+', suffix: '', label: 'Students taught' },
  { value: '5+', suffix: '', label: 'Research projects' },
  { value: '4+', suffix: '', label: 'Years experience' },
]

const paragraphs = [
  "I'm a Machine Learning Engineer at Nymble Leap, building production LLM systems for legal and compliance work. Right now that means an agentic assistant that handles clause-level contract review and drafting for attorneys, with a RAG pipeline retrieving precedent so every flag can be justified. Around the model sits the part that has to survive contact with users: a FastAPI and PostgreSQL backend, role-based access, payments, and a deployment pipeline that ships.",
  'My work tends to start with a messy, under-specified problem, such as legal clauses nobody wants to read, client data that cannot leave the client, or agents that confidently walk into each other, and end with a measurable system someone else can maintain. That comes out of a BS in Computer Science from LUMS (High Distinction, Major GPA 3.99/4.00) with a minor in Computational Finance, research on federated learning and multi-agent path finding with LLMs, and teaching, which I still do. Over 500 students so far, because explaining a method is the strongest test of whether it is actually understood.',
]

export default function About() {
  return (
    <Section tone="surface" bordered>
      <Reveal>
        <SectionIntro eyebrow="About" title="How I work" />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-8">
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="text-base text-muted leading-relaxed text-pretty">
              {text}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <dd className="font-mono text-2xl font-medium tracking-tight text-signal">
                <CountUp value={stat.value} />
                {stat.suffix && (
                  <span className="text-base text-muted ml-0.5">{stat.suffix}</span>
                )}
              </dd>
              <dt className="text-sm text-muted mt-1.5">{stat.label}</dt>
            </Card>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
