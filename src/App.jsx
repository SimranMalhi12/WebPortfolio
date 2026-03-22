import Navbar from "@ui/Navbar"
import Hero from "@sections/Hero"
import { ThemeProvider } from "./context/ThemeContext"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "@sections/About"
import Skills from "@sections/Skills"
import Education from "@sections/Education"
import Certifications from "@sections/Certifications"
import Achievements from "@sections/Achievements"
import Projects from "@sections/Projects"
import Contact from "@sections/Contact"
import Footer from "@ui/Footer"


function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
    }

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      {/* <Header /> */}
    </div>
  )
}

export default App
