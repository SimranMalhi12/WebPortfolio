function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-center py-6 transition-colors duration-300">
      <p>
        © {new Date().getFullYear()} <span className="text-gradient font-medium">Simranjeet Kaur</span>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
