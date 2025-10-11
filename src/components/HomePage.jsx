import React, { useState, useEffect } from 'react'

const HomePage = ({ onEnter }) => {
  const [showSurprise, setShowSurprise] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSurprise(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: '2rem'
            }}
          >
            {['🎈', '🎉', '✨', '🌟', '🌺'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-4">
        <div className={`transition-all duration-1000 ${showSurprise ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
         
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-100 mb-8">
            It's Someone's Special Day!
          </h2>
          <button
            onClick={onEnter}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:scale-105 transform transition-all duration-300 animate-bounce"
          >
            Let's Celebrate! 🎉
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage