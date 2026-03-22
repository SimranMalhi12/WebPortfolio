import { useRef } from "react"
import { useReveal } from "../../hooks/useReveal"
import { FaJava } from "react-icons/fa6"
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMui,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiGithub,
  SiGit
  
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
        
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-blue-700" /> },
        { name: "C", icon: <SiC className="text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-900 dark:text-gray-300" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-white" /> },
        {name:"Git", icon:<SiGit className="text-gray-900 dark:text-white" />},
      ]
    }
  ]

  const ref = useRef(null)
  useReveal(ref, { stagger: 0.1 })

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-blue-400">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 cursor-default border border-transparent hover:border-purple-500/50 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700 pb-4 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-y-8 gap-x-2 flex-grow content-start justify-items-center">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group w-full">
                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover:text-purple-500 transition-colors text-center w-full break-words leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
