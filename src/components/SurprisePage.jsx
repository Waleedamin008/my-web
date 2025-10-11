import React, { useState, useEffect } from 'react'

const SurprisePage = () => {
  const [currentSurprise, setCurrentSurprise] = useState(0)
  const [showFireworks, setShowFireworks] = useState(false)

  const surprises = [
    {
      type: "quote",
      content: "The best is yet to come! 🌟",
      emoji: "✨",
      bg: "from-purple-500 to-pink-500"
    },
    {
      type: "gif",
      content: "🎉 PARTY TIME! 🎉",
      emoji: "🎊",
      bg: "from-blue-500 to-purple-500"
    },
    {
      type: "message",
      content: "You make the world brighter just by being in it! 💖",
      emoji: "🌟",
      bg: "from-pink-500 to-red-500"
    },
    {
      type: "celebration",
      content: "Today is all about YOU! 👑",
      emoji: "👑",
      bg: "from-yellow-500 to-orange-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSurprise((prev) => (prev + 1) % surprises.length)
    }, 3000)

    const fireworksTimer = setTimeout(() => {
      setShowFireworks(true)
    }, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(fireworksTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 pt-20 px-4 relative overflow-hidden">
      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '2rem'
              }}
            >
              {['💥', '✨', '🎆', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-12 animate-bounce">
          🎊 SURPRISE ZONE 🎊
        </h1>

        {/* Main Surprise Display */}
        <div className={`bg-gradient-to-br ${surprises[currentSurprise].bg} rounded-3xl p-12 mb-12 transform transition-all duration-1000 shadow-2xl`}>
          <div className="text-9xl mb-6 animate-spin">
            {surprises[currentSurprise].emoji}
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {surprises[currentSurprise].content}
          </h2>
          <div className="text-6xl animate-pulse">🎂</div>
        </div>

        {/* Interactive Surprise Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['🎈', '🎁', '🌟', '💖'].map((emoji, index) => (
            <button
              key={index}
              onClick={() => setCurrentSurprise(index)}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 text-6xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110 animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Birthday Countdown */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">🕰️ Birthday Moments Counter 🕰️</h3>
          <div className="text-5xl font-mono text-yellow-300 animate-pulse">
            {new Date().toLocaleTimeString()}
          </div>
          <p className="text-white text-xl mt-4">
            Every second is special on your birthday! 💫
          </p>
        </div>

        {/* Final Surprise Message */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-white mb-6">🎭 The Grand Finale 🎭</h2>
          <p className="text-white text-2xl leading-relaxed">
            Reeba, you are absolutely amazing! 🌟 May this birthday be the start of 
            your most incredible year yet! Keep shining bright! ✨💖🎂
          </p>
          <div className="mt-6 text-8xl animate-bounce">🎉</div>
        </div>
      </div>
    </div>
  )
}

export default SurprisePage