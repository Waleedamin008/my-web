import React, { useState } from 'react'

const WishesPage = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const wishCards = [
    {
      id: 1,
      title: "🌟 Sparkle & Shine",
      message: "May your birthday be filled with sparkles, joy, and all the things that make you smile! You're a star, Reeba! ✨",
      bgGradient: "from-yellow-400 to-orange-500",
      animation: "animate-pulse"
    },
    {
      id: 2,
      title: "💖 Love & Joy",
      message: "Sending you oceans of love and mountains of joy on your special day! You deserve all the happiness in the world! 💕",
      bgGradient: "from-pink-400 to-red-500",
      animation: "animate-bounce"
    },
    {
      id: 3,
      title: "🦋 Dreams Come True",
      message: "May this new year of life bring you closer to all your dreams and fill your heart with beautiful memories! 🌈",
      bgGradient: "from-purple-400 to-blue-500",
      animation: "animate-ping"
    },
    {
      id: 4,
      title: "🌸 Blossom & Grow",
      message: "Like a beautiful flower, may you continue to blossom and grow in grace, wisdom, and happiness! 🌺",
      bgGradient: "from-green-400 to-teal-500",
      animation: "animate-spin"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Wishes for You 🤲
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-20">
          {wishCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card.id)}
              className={`bg-gradient-to-br ${card.bgGradient} rounded-3xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl ${
                selectedCard === card.id ? 'ring-4 ring-white' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white text-lg leading-relaxed">{card.message}</p>
              <div className="mt-6 flex justify-center">
                <div className={`w-8 h-8 bg-white rounded-full ${card.animation}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WishesPage