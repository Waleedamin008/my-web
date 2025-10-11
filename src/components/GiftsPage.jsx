import React, { useState } from 'react'

const GiftsPage = () => {
  const [openedGifts, setOpenedGifts] = useState(new Set())

  const gifts = [
    { 
      id: 1, 
      emoji: "🎁", 
      title: "Surprise Gift", 
      content: "Wishing you a year full of adventures! 🌍",
      color: "from-red-400 to-pink-500"
    },
    { 
      id: 2, 
      emoji: "🎪", 
      title: "Fun Box", 
      content: "May you have endless laughter and joy! 😄",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      id: 3, 
      emoji: "⭐", 
      title: "Dream Package", 
      content: "May all your wishes come true! 🤲",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      id: 4, 
      emoji: "🌟", 
      title: "Magic Gift", 
      content: "Wishing you sparkles of happiness! ✨",
      color: "from-purple-400 to-pink-500"
    },
    { 
      id: 5, 
      emoji: "🎊", 
      title: "Celebration Box", 
      content: "May you have Chill vibes all year long! 😎",
      color: "from-green-400 to-teal-500"
    }
  ]

  const openGift = (giftId) => {
    setOpenedGifts(prev => new Set([...prev, giftId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 pt-20 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Special Gifts for You 🎁
        </h1>
        <p className="text-white text-center text-xl mb-12 opacity-90">
          Click on each gift to unwrap your surprise! 🎉
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {gifts.map((gift, index) => (
            <div
              key={gift.id}
              className="relative transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {!openedGifts.has(gift.id) ? (
                <div
                  onClick={() => openGift(gift.id)}
                  className={`bg-gradient-to-br ${gift.color} rounded-3xl p-8 text-center cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce`}
                >
                  <div className="text-8xl mb-4 animate-pulse">{gift.emoji}</div>
                  <h3 className="text-2xl font-bold text-white">{gift.title}</h3>
                  <p className="text-white opacity-80 mt-2">Click to unwrap!</p>
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${gift.color} rounded-3xl p-8 text-center shadow-2xl animate-pulse`}>
                  <div className="text-8xl mb-4 animate-pulse">🎊</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{gift.title}</h3>
                  <div className="bg-white bg-opacity-30 rounded-2xl p-4">
                    <p className="text-purple-950 text-lg font-semibold">{gift.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Birthday Gift */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6"> Ultimate Gift 🎂</h2>
          <div className="bg-white bg-opacity-20 rounded-2xl p-8">
            <div className="text-9xl mb-4 animate-bounce">🌟</div>
            <p className="text-purple-950 text-2xl font-semibold">
              "May your special day bring you vibrant health 🌸,
              ease in every aspect of life 🌟, and success in all your endeavors 🏆.
              May your path be paved with Blessings ❤, laughter 😊,
              and endless opportunities 🌈. Wishing you a year filled with happiness,
              growth, and unforgettable moments 📸."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftsPage