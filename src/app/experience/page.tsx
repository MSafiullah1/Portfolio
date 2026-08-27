import type { Metadata } from 'next'
import Experience from '../../components/Experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional ML engineering, research, and teaching experience, including work at Nymble Leap, LUMS research labs, and graduate-level AI instruction.',
}

export default function ExperiencePage() {
  return (
    <>
      <Experience />
    </>
  )
}
