import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


import profilePic from "@assets/images/profile/profile.jpg"

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    )

  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 px-12 bg-gray-50 dark:bg-[#0f172a] overflow-hidden transition-colors duration-300"
    >

      {/* Soft Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center relative z-10">

        {/* PROFILE PICTURE */}
        <div className="md:col-span-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-full rounded-3xl shadow-2xl relative z-10 border-4 border-white dark:border-gray-800 hover:scale-[1.02] transition-all duration-500 object-cover aspect-[3/4]"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="md:col-span-3 space-y-8">

          {/* Text Content */}
          <div>
            <h2
              ref={titleRef}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            >
              About <span className="text-gradient">Me</span>
            </h2>

            <p
              ref={textRef}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              I'm a full stack developer passionate about building
              AI-powered products and crafting meaningful digital
              experiences. I focus on performance, clean UI, and
              seamless user interactions.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-gray-200 dark:border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What I <span className="text-gradient">Focus On</span>
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Full Stack Web Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> AI & API Integrations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span> Performance Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Smooth UI Animations
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
