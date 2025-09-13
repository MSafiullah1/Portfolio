import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </div>
  )
}

