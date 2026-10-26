import { Nav } from './components/navigation/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Overview } from './components/sections/Overview'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Philosophy } from './components/sections/Philosophy'
import { Contact } from './components/sections/Contact'
import { ErrorBoundary } from './components/layout/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default App
