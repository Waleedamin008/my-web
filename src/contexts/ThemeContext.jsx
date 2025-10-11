import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const theme = {
    isDark,
    toggleTheme,
    // Instagram/TikTok inspired colors
    colors: {
      primary: isDark ? 'from-gray-900 to-black' : 'from-white to-gray-100',
      secondary: isDark ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-gray-200',
      accent: 'from-pink-500 to-purple-600',
      text: isDark ? 'text-white' : 'text-gray-900',
      textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
      surface: isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-50',
      border: isDark ? 'border-gray-700' : 'border-gray-200',
      navBg: isDark ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90',
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}