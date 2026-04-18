import { About } from './components/About'
import { Academics } from './components/Academics'
import { Certifications } from './components/Certifications'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PositionsAndActivities } from './components/PositionsAndActivities'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { SkillsPie } from './components/SkillsPie'

function App() {
  return (
    <div className="gradient-mesh relative min-h-svh">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PositionsAndActivities />
        <Resume />
        <SkillsPie />
        <Academics />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </div>
  )
}

export default App
