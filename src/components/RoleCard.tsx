import Card from './ui/Card'
import Tag from './ui/Tag'
import InstitutionLink from './ui/InstitutionLink'
import type { Role } from '../data/experience'

export default function RoleCard({ role }: { role: Role }) {
  return (
    <Card
      as="article"
      variant={role.current ? 'feature' : 'default'}
      className="p-6 md:p-7"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-x-6 gap-y-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-display-sm font-bold">{role.title}</h2>
            {role.current && <Tag variant="honor">Current</Tag>}
          </div>
          <p className="text-[0.95rem] font-medium text-accent mt-1">
            <InstitutionLink name={role.company} />
          </p>
        </div>

        <div className="md:text-right flex-shrink-0">
          <p className="font-mono text-[0.78rem] text-muted">{role.period}</p>
          <p className="text-sm text-muted mt-0.5">{role.location}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 mt-5">
        {role.description.map((line) => (
          <li key={line.slice(0, 32)} className="flex items-start gap-3">
            <span
              className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-sm text-ink-2 text-pretty">{line}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-5">
        {role.skills.map((skill) => (
          <Tag key={skill} variant="tech">{skill}</Tag>
        ))}
      </div>
    </Card>
  )
}
