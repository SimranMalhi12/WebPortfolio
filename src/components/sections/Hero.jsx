import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"

function Hero() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.to("#intro-slider", {
        xPercent: "-100",
        duration: 0.8,
        delay: 0.1,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.3,
        })
        .from("#desc", {
          opacity: 0,
          y: "+=30",
          duration: 0.4
        })
        .from("#btn-group", {
          opacity: 0,
          y: "+=30",
          duration: 0.4
        })
    }, comp)

    // Matrix Rain Effect
    const canvas = document.getElementById("matrix-canvas")
    const ctxCanvas = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = "01001010101110101010101"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctxCanvas.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctxCanvas.fillRect(0, 0, canvas.width, canvas.height)

      ctxCanvas.fillStyle = "#3b82f6" // Blue color
      ctxCanvas.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctxCanvas.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={comp} className="relative z-0 h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span id="title-1" className="inline-block">Hi, I'm &nbsp;</span>
          <span id="title-2" className="text-gradient inline-block">Simranjeet Kaur</span>
        </h2>

        <p id="desc" className="text-gray-400 text-lg md:text-xl mb-6 max-w-xl mx-auto">
          A passionate Full Stack Developer and C++ problem solver,
          building modern web applications and solving real-world problems.
        </p>

        <div id="btn-group" className="space-x-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>


        </div>
      </div>

      {/* Intro Slider for animation */}
      <div id="intro-slider" className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800 z-20 pointer-events-none"></div>

      {/* Matrix Rain Background */}
      <canvas id="matrix-canvas" className="absolute inset-0 -z-30 w-full h-full opacity-20 dark:opacity-20"></canvas>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/60 backdrop-blur-[1px] -z-20"></div>

      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
    </section>
  )
}

export default Hero
