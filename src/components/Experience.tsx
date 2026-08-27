'use client'

import { useRef, useState } from 'react'
import Section from './ui/Section'
import { Eyebrow, SectionIntro } from './ui/SectionHeading'
import Card from './ui/Card'
import Tag from './ui/Tag'
import RoleCard from './RoleCard'
import { professional, researchInterests, labs, tabs } from '../data/experience'
import { cn } from '../lib/cn'

const totalRoles = tabs.reduce((n, tab) => n + tab.data.length, 0)

function ResearchIntro() {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <Card className="p-6">
        <Eyebrow className="font-mono mb-3">Research interests</Eyebrow>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <Tag key={interest} variant="skill">{interest}</Tag>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-3">
        {labs.map((lab) => (
          <Card key={lab.name} className="p-5">
            <h3 className="font-display text-[0.95rem] font-bold">{lab.name}</h3>
            <p className="text-sm text-muted mt-1">{lab.focus}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? 'professional')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const currentData = tabs.find((t) => t.id === activeTab)?.data ?? professional
  const activeIndex = tabs.findIndex((t) => t.id === activeTab)

  /** Arrow-key navigation per the WAI-ARIA tabs pattern. */
  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const targets: Record<string, number> = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: tabs.length - 1,
    }

    const target = targets[event.key]
    if (target === undefined) return

    event.preventDefault()
    const next = (target + tabs.length) % tabs.length
    setActiveTab(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section first wash="top">
      <SectionIntro
        level={1}
        eyebrow="Experience"
        title={`${totalRoles} roles, three kinds of work`}
        description="Applied engineering, academic research, and teaching. The mix is deliberate, because each one sharpens the others."
      />

      {/* Underline tab bar: a rail rather than a segmented control, so an
          uneven split (1 / 5 / 7) doesn't read as three equal buckets. */}
      <div
        className="flex gap-1 border-b border-line mt-8 mb-8 overflow-x-auto"
        role="tablist"
        aria-label="Experience categories"
      >
        {tabs.map((tab, index) => {
          const selected = activeTab === tab.id
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el }}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="experience-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={handleKeyDown}
              className={cn(
                'relative whitespace-nowrap px-4 py-3 text-[0.95rem] font-semibold transition-colors',
                selected ? 'text-ink' : 'text-muted hover:text-ink',
              )}
            >
              {tab.label}
              <span className="ml-1.5 font-mono text-[0.72rem] font-normal text-muted">
                {tab.data.length}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-accent',
                  'origin-left transition-transform duration-300 [transition-timing-function:var(--ease-out)]',
                  selected ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </button>
          )
        })}
      </div>

      <div
        key={activeTab}
        id="experience-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="swap flex flex-col gap-4"
      >
        {activeTab === 'research' && <ResearchIntro />}

        {currentData.map((role, index) => (
          <RoleCard key={`${role.company}-${index}`} role={role} />
        ))}
      </div>
    </Section>
  )
}
