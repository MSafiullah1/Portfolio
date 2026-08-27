import type { Metadata } from 'next'
import Projects from '../../components/Projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'ML projects spanning LLM-powered legal AI, federated learning, multi-agent path finding, automated grading, and more.',
}

export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  )
}
