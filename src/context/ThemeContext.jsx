import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])

    useEffect(() => {
        // Apply theme class to html element
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        // Save to local storage
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
