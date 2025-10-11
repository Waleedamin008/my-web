import React, { useState, useEffect } from 'react'

const FireworksScreen = ({ onClose }) => {
  const [showFireworks, setShowFireworks] = useState(false)
  const [fireworksCount, setFireworksCount] = useState(0)

  useEffect(() => {
    // Start fireworks immediately
    setShowFireworks(true)
    
    // Auto close after 8 seconds
    const autoCloseTimer = setTimeout(() => {
      onClose()
    }, 8000)

    // Add more fireworks periodically
    const fireworksInterval = setInterval(() => {
      setFireworksCount(prev => prev + 1)
    }, 1000)

    return () => {
      clearTimeout(autoCloseTimer)
      clearInterval(fireworksInterval)
    }
  }, [onClose])

  // Generate fireworks
  const fireworks = Array.from({ length: 30 + fireworksCount * 5 }, (_, i) => (
    <div
      key={`firework-${i}-${fireworksCount}`}
      className="absolute animate-ping"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${1 + Math.random() * 2}s`,
        fontSize: `${1 + Math.random() * 2}rem`
      }}
    >
      {['🎆', '✨', '💥', '🌟', '💫', '⭐', '🎇'][Math.floor(Math.random() * 7)]}
    </div>
  ))

  // Generate colorful particles
  const particles = Array.from({ length: 100 }, (_, i) => (
    <div
      key={`particle-${i}`}
      className="absolute w-2 h-2 rounded-full animate-bounce"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#fd79a8', '#00b894'][Math.floor(Math.random() * 8)],
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1.5 + Math.random() * 2}s`
      }}
    />
  ))

  return (
    <div className="h-screen fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center">
      {/* Fireworks Background */}
      <div className="absolute inset-0 overflow-hidden">
        {showFireworks && fireworks}
        {particles}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Main Celebration Text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce">
            🎉 CELEBRATION! 🎉
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse">
            Happy Birthday Reeba!
          </h2>
        </div>

        {/* Animated Birthday Message */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
          <p className="text-2xl text-white leading-relaxed animate-pulse">
            🎊 Let the celebration begin! 🎊
            <br />
            <span className="text-yellow-300">May all your dreams come true!</span>
          </p>
        </div>

        {/* Celebration Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
          {[
            { emoji: '🎂', label: 'Birthday Wishes', count: '∞' },
            { emoji: '🎁', label: 'Surprises', count: fireworksCount + 5 },
            { emoji: '💖', label: 'Love & Joy', count: '100%' },
            { emoji: '🌟', label: 'Sparkles', count: fireworksCount * 10 }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-4 text-center animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-2xl font-bold text-yellow-300">{stat.count}</div>
              <div className="text-sm text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setFireworksCount(prev => prev + 5)}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            More Fireworks! 🎆
          </button>
          
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            ✨ Continue Celebration ✨
          </button>
        </div>

        {/* Countdown to auto-close */}
        <div className="mt-6 text-white opacity-60 text-sm">
          Celebration will continue automatically...
        </div>
      </div>

      {/* Floating celebration elements */}
      <div className="absolute top-10 left-10 text-6xl animate-spin">🎊</div>
      <div className="absolute top-20 right-10 text-6xl animate-bounce">🎉</div>
      <div className="absolute bottom-10 left-20 text-6xl animate-pulse">🎂</div>
      <div className="absolute bottom-20 right-20 text-6xl animate-ping">💖</div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default FireworksScreen