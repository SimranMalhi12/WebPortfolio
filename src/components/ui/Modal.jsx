import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

function Modal({ project, onClose }) {

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}   // click outside closes
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-lg w-full mx-4 text-left relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}  // prevent closing when clicking inside
          >

            {/* Close Button */}
            <button
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl"
              onClick={onClose}
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-blue-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Live Demo
                </a>
              )}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
