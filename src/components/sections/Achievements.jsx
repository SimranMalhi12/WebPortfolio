import { useRef } from "react"
import { motion } from "framer-motion"
import { useReveal } from "../../hooks/useReveal"
import { HiBadgeCheck } from "react-icons/hi"
import { SiLeetcode, SiMongodb } from "react-icons/si"

function Achievements() {
  const achievements = [
    {
      title: "LeetCode",
      description: "Earned a badge in 200+ LeetCode,GeekforGeeks Problems",
      date: "2025",
      icon: (
        <div className="relative">
          <SiLeetcode className="text-orange-500" />
          <HiBadgeCheck className="absolute -bottom-1 -right-2 text-xl text-yellow-500 bg-white dark:bg-gray-800 rounded-full" />
        </div>
      )
    },
    {
      title: "MongoDB",
      description: "Earned a badge in CRUD operations",
      date: "2025",
      icon: (
        <div className="relative">
          <SiMongodb className="text-green-500" />
          <HiBadgeCheck className="absolute -bottom-1 -right-2 text-xl text-blue-500 bg-white dark:bg-gray-800 rounded-full" />
        </div>
      )
    },
    {
      title: "MongoDB",
      description: "Earned a badge in Fundamentals of Transformation",
      date: "2025",
      icon: (
        <div className="relative">
          <SiMongodb className="text-green-500" />
          <HiBadgeCheck className="absolute -bottom-1 -right-2 text-xl text-purple-500 bg-white dark:bg-gray-800 rounded-full" />
        </div>
      )
    }
  ]

  const ref = useRef(null)
  useReveal(ref, { stagger: 0.2 })

  return (
    <section id="achievements" className="py-20 px-6 bg-white dark:bg-[#1e293b] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white tracking-tight">
          My <span className="text-gradient">Achievements</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-transparent hover:border-yellow-500/50 transition-all duration-300 flex items-start gap-6 text-left group cursor-default"
            >
              <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-yellow-500 transition-colors">
                  {achievement.title}
                </h3>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {achievement.date}
                </span>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements
