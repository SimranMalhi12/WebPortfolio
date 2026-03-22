import { useRef, useState } from "react"
import { useReveal } from "../../hooks/useReveal"
import { motion, AnimatePresence } from "framer-motion"
import { FaCertificate, FaTimes, FaExpandAlt } from "react-icons/fa"

import certGenAi from "@assets/images/certs/cert_gen_ai.png"
import certSocialNetworks from "@assets/images/certs/cert_social_networks.png"
import certDataStructures from "@assets/images/certs/cert_data_structures.png"

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  
  const certificationsList = [
    {
      title: "Generative AI",
      issuer: "Certificate of Completion",
      date: "September 2025",
      image: certGenAi,
      link: "/gen_ai.pdf",
      icon: <FaCertificate className="text-orange-500" />
    },
    {
      title: "Social Networks",
      issuer: "Certificate of Completion",
      date: "November 2025",
      image: certSocialNetworks,
      link: "/Social Networks.pdf",
      icon: <FaCertificate className="text-blue-600" />
    },
    {
      title: "Fundamentals of Data Structures in C++",
      issuer: "Certificate of Completion",
      date: "July 2025",
      image: certDataStructures,
      link: "/_copy.pdf",
      icon: <FaCertificate className="text-green-500" />
    }
  ]

  const ref = useRef(null)
  useReveal(ref, { stagger: 0.1 })

  return (
    <section id="certifications" className="py-32 px-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-20 text-gray-900 dark:text-white tracking-tight">
          My <span className="text-gradient">Certifications</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Preview (Half Image) */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e293b] via-transparent to-transparent opacity-60" />
                
                {/* Expand Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-blue-600 p-3 rounded-full text-white shadow-lg">
                      <FaExpandAlt />
                   </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute -top-6 right-8 bg-white dark:bg-[#1e293b] p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-2xl">
                  {cert.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors mb-3 pr-10">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-6">
                  Issued: {cert.date}
                </p>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCert(cert)
                  }}
                  className="mt-auto inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors w-max group/link"
                >
                  View Full Certificate
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="max-h-[85vh] overflow-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto block"
                />
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold dark:text-white">{selectedCert.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications

