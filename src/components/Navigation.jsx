import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [showMore, setShowMore] = useState(false)
  const { isDark, toggleTheme, colors } = useTheme()

  const mainPages = [
    { id: 'main', label: 'Home', icon: '🏠', activeIcon: '🏠' },
    { id: 'wishes', label: 'Wishes', icon: '👨‍💻', activeIcon: '👨‍💻' },
    // { id: 'memories', label: 'Memories', icon: '📸', activeIcon: '📸' },
    { id: 'gifts', label: 'Gifts', icon: '🎁', activeIcon: '🎁' },
    { id: 'blessings', label: 'Blessings', icon: '🤲', activeIcon: '🤲' },
    // { id: 'surprise', label: 'Surprise', icon: '🎊', activeIcon: '🎊' },
  ]

  const morePages = []

  const allPages = [...mainPages, ...morePages]

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId)
    setShowMore(false)
  }

  const isMoreActive = morePages.some(page => page.id === currentPage)

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className={`hidden md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:z-50 md:backdrop-blur-xl md:rounded-2xl md:px-6 md:py-3 md:block md:shadow-xl ${
        isDark 
          ? 'md:bg-gray-900 md:bg-opacity-80' 
          : 'md:bg-white md:bg-opacity-80'
      }`}>
        <div className="flex space-x-1">
          {allPages.map((page) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium outline-none border-none focus:outline-none ${
                currentPage === page.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                  : `${colors.text} hover:bg-gray-500 hover:bg-opacity-20`
              }`}
            >
              <span className="mr-2">{page.icon}</span>
              {page.label}
            </button>
          ))}
          
          {/* Theme Toggle for Desktop */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium outline-none border-none focus:outline-none ${colors.text} hover:bg-gray-500 hover:bg-opacity-20`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Instagram/TikTok Style Bottom Bar */}
      <div className="md:hidden">
        {/* Bottom Navigation Bar */}
        <nav className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl ${
          isDark 
            ? 'bg-gray-900 bg-opacity-95' 
            : 'bg-white bg-opacity-95'
        }`}>
          <div className="flex items-center justify-around py-1 px-1 pb-safe">
            {mainPages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-300 relative outline-none border-none focus:outline-none ${
                  currentPage === page.id ? 'transform scale-110' : 'hover:scale-110'
                }`}
              >
                <div className={`text-xl mb-1 transition-all duration-300 ${
                  currentPage === page.id ? 'filter drop-shadow-lg' : ''
                }`}>
                  {currentPage === page.id ? page.activeIcon : page.icon}
                </div>
                <div className={`text-xs font-medium transition-all duration-300 ${
                  currentPage === page.id 
                    ? 'text-pink-400 font-bold' 
                    : `${colors.textSecondary}`
                }`}>
                  {page.label}
                </div>
              </button>
            ))}
          </div>
        </nav>


        {/* Status Indicator */}
        <div className={`fixed top-4 left-4 z-40 backdrop-blur-xl rounded-full px-3 py-1 ${
          isDark 
            ? 'bg-gray-800 bg-opacity-80' 
            : 'bg-white bg-opacity-80'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`text-xs font-medium ${colors.text}`}>
              Celebrating Reeba! 🎉
            </span>
          </div>
        </div>

        {/* Theme Toggle FAB (Mobile) */}
        <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 z-40 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-300 hover:scale-110 outline-none border-none focus:outline-none ${
            isDark 
              ? 'bg-gray-800 bg-opacity-80' 
              : 'bg-white bg-opacity-80'
          }`}
        >
          <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* iOS style safe area */
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        
        /* Remove all outlines and borders globally for this component */
        * {
          outline: none !important;
          border: none !important;
        }
        
        button {
          outline: none !important;
          border: none !important;
        }
        
        button:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
        }
      `}</style>
    </>
  )
}

export default Navigation