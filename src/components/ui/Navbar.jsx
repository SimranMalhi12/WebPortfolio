import { useEffect, useLayoutEffect, useState } from "react"
import { useTheme } from "../../context/ThemeContext"
import gsap from "gsap"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        ".navbar",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.out",
        }
      )
    })

    // Scroll background change
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      ctx.revert()
    }
  }, [])

  return (
    <nav
      className={`navbar fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight cursor-pointer">
          Simran<span className="text-gradient">.</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">

            <li className="relative group cursor-pointer">
              <a href="#home">Home</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#about">About</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#projects">Projects</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#skills">Skills</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#certifications">Certifications</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#achievements">Achievements</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#education">Education</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer">
              <a href="#contact">Contact</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:scale-110 transition-transform duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
