import type { Metadata } from 'next'
import Education from '../../components/Education'
import Awards from '../../components/Awards'

export const metadata: Metadata = {
  title: 'Education',
  description: 'BS Computer Science from LUMS (High Distinction, 3.99 GPA), Minor in Computational Finance, and academic honors.',
}

export default function EducationPage() {
  return (
    <>
      <Education />
      <Awards />
    </>
  )
}
