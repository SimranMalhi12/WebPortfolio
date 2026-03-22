import { useRef } from "react"
import { useReveal } from "../../hooks/useReveal"
import { MdSchool } from "react-icons/md"

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University |CGPA: 7.89",
      duration: "2023 - 2027",
      description: "CourseWork: DSA ,DBMS, Webdevelopment,OOPS",
      icon: <MdSchool className="text-blue-500" />
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Milton Academy",
      duration: "2023",
      description: "Percentage: 85.33%\n• Board: CBSE\n• Subjects: Physics, Chemistry, Mathematics, Physical Education",
      icon: <MdSchool className="text-blue-500" />
    },
    {
      degree: "Secondary (10th)",
      institution: "St. Mary's Secondary School",
      duration: "2021",
      description: "Percentage: 92%\n• Board: CBSE\n• Subjects: Physics, Chemistry, Mathematics, Computer Science, Social Science",
      icon: <MdSchool className="text-pink-500" />
    }
  ]

  const ref = useRef(null)
  useReveal(ref, { stagger: 0.1 })

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400">
          My <span className="text-gradient">Education</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500/50 group flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-3xl shadow-md border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
                {edu.duration}
              </p>
              <div className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed whitespace-pre-line">
                {edu.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
