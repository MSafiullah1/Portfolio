/**
 * Single source of truth for identity, contact details and navigation.
 *
 * Every link in the UI reads from here. Nothing should hardcode the email
 * address, a social URL or the deployed origin. That duplication is what
 * previously let a stale GitHub username ship to production in four places.
 */

export const siteConfig = {
  name: 'Safiullah Sarfraz',
  role: 'Machine Learning Engineer',
  tagline: 'Turning research into deployed ML systems',
  location: 'Lahore, Pakistan',
  summary:
    'Machine Learning Engineer building applied LLM, RAG, and research-to-production ML systems.',

  /** Deployed origin. Used for canonical, Open Graph and the sitemap. */
  url: 'https://msafiullah1.github.io/Portfolio',

  email: 'sarfrazsafiullah3@gmail.com',
  github: 'https://github.com/MSafiullah1',
  linkedin: 'https://www.linkedin.com/in/safiullah-sarfraz/',

  current: [
    { role: 'ML Engineer', org: 'Nymble Leap' },
    { role: 'Teaching Fellow', org: 'LUMS' },
  ],
} as const

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/education', label: 'Education' },
] as const

export type SocialId = 'github' | 'linkedin' | 'email'

export const socialLinks: { id: SocialId; href: string; label: string }[] = [
  { id: 'github', href: siteConfig.github, label: 'GitHub' },
  { id: 'linkedin', href: siteConfig.linkedin, label: 'LinkedIn' },
  { id: 'email', href: `mailto:${siteConfig.email}`, label: 'Email' },
]

/**
 * Institutions and employers that have a verified public site.
 *
 * Kept as one lookup rather than a url field on every record, so a name that
 * appears as a company, an affiliation and an institution only needs the
 * address once. Anything absent simply renders as plain text.
 */
const INSTITUTION_URLS: Record<string, string> = {
  'Syed Babar Ali School of Sciences and Engineering': 'https://sbasse.lums.edu.pk',
  'Department of Computer Science': 'https://sbasse.lums.edu.pk/department-of-computer-science',
  'School of Science & Engineering': 'https://sbasse.lums.edu.pk',
  'MS Artificial Intelligence': 'https://lums.edu.pk/programmes/ms-artificial-intelligence',
  'MS AI': 'https://lums.edu.pk/programmes/ms-artificial-intelligence',
  'CITY at LUMS': 'https://city.lums.edu.pk',
  'CSaLT at LUMS': 'https://sbasse.lums.edu.pk/department-of-computer-science',
  'Lahore University of Management Sciences': 'https://lums.edu.pk',
  LUMS: 'https://lums.edu.pk',
  'Aitchison College': 'https://aitchison.edu.pk',
  'Nymble Leap': 'https://www.nymbleleap.com',
}

/** Longest key first, so "CITY at LUMS" wins over the bare "LUMS". */
const INSTITUTION_KEYS = Object.keys(INSTITUTION_URLS).sort((a, b) => b.length - a.length)

/** Exact name first, then any known institution mentioned within it. */
export function institutionUrl(name: string): string | undefined {
  const exact = INSTITUTION_URLS[name]
  if (exact) return exact

  for (const key of INSTITUTION_KEYS) {
    if (name.includes(key)) return INSTITUTION_URLS[key]
  }
  return undefined
}
