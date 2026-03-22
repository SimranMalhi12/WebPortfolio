import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useReveal } from "../../hooks/useReveal"
import Modal from "../ui/Modal"
import { 
  FaCode, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaNodeJs, 
  FaReact, 
  FaPython,
  FaArrowRight
} from "react-icons/fa"
import { 
  SiMongodb, 
  SiMysql, 
  SiOpenai, 
  SiFlask, 
  SiExpress
} from "react-icons/si"

import grievanceImg from "@assets/images/projects/grievance_portal.png"
import egovImg from "@assets/images/projects/egov_chatbot.png"
import travelImg from "@assets/images/projects/travel_planner_v2.png"

const techIcons = {
  "HTML": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "JavaScript": <FaJs className="text-yellow-400" />,
  "PHP": <FaPhp className="text-indigo-400" />,
  "MySQL": <SiMysql className="text-blue-600" />,
  "React": <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express": <SiExpress className="text-gray-400" />,
  "GROQ API": <FaCode className="text-purple-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Python": <FaPython className="text-blue-400" />,
  "OpenAI API": <SiOpenai className="text-emerald-500" />,
  "Flask": <SiFlask className="text-gray-500" />,
  "HTML/CSS": <FaCode className="text-blue-400" />
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const cardsRef = useRef([])

  useReveal(cardsRef, { stagger: 0.2 })

  const projects = [
    {
      title: "Grievance Redressal Portal",
      image: grievanceImg,
      description:
        "A full stack web platform for startups to submit and track grievances.",
      fullDescription:
        "Built a role-based grievance management system with authentication, admin dashboard, real-time status updates and secure MySQL storage.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/SimranMalhi12/grievence_system",
      live: "https://desktop-tutorial-gamma-one.vercel.app/",
      featured: false
    },
    {
      title: "E-Governance AI Chatbot",
      image: egovImg,
      description:
        "AI chatbot providing instant answers for government services.",
      fullDescription:
        "Integrated GROQ API to process citizen queries dynamically with intent recognition.",
      tech: ["React", "Node.js", "Express", "GROQ API", "MongoDB"],
      github: "https://github.com/SimranMalhi12/egovwebsiteandchatbot",
      live: "https://egovwebsiteandchatbot-9hh1.vercel.app/",
      featured: false
    },
    {
      title: "AI Travel Planner Chatbot",
      image: travelImg,
      description:
        "Smart chatbot generating personalized travel itineraries.",
      fullDescription:
        "Implemented AI-based itinerary generation using OpenAI API and Flask backend.",
      tech: ["Python", "OpenAI API", "Flask", "HTML/CSS"],
      github: "https://github.com/SimranMalhi12/AI-Project",
      live: "https://ai-travel-planner-seven-rho.vercel.app/",
      featured: false
    }
  ]

  return (
    <section
      id="projects"
      className="py-40 px-6 bg-gray-100 dark:bg-[#0f172a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-xl border border-transparent hover:border-blue-500/30 transition-colors"
                    >
                      {techIcons[tech] || <FaCode className="text-gray-400" />}
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="w-full group/btn relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 cursor-pointer"
                  >
                    View Project
                    <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

export default Projects

