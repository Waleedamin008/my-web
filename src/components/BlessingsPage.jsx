import React from 'react'

const BlessingsPage = () => {
  const blessings = [
    {
      category: "Health & Happiness",
      emoji: "🌸",
      items: [
        "May you always be blessed with good health and vitality",
        "May happiness follow you wherever you go",
        "May your heart always be filled with joy and peace",
        "May you find reasons to smile every single day",
        "May your kindness return to you multiplied"
      ]
    },
    {
      category: "Success & Growth",
      emoji: "🌟",
      items: [
        "May all your dreams and aspirations come true",
        "May you achieve great success in everything you do",
        "May you continue to grow and flourish in all aspects of life",
        "May wisdom guide you in all your decisions"
      ]
    },,
    {
      category: "Adventure & Discovery",
      emoji: "🌍",
      items: [
        "May you discover new and exciting opportunities",
        "May life surprise you with beautiful adventures",
        "May you explore new horizons and experiences",
        "May every journey bring you wonderful memories"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 pt-20 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Birthday Blessings 🎶
        </h1>
        <p className="text-white text-center text-xl mb-12 opacity-90">
          Special prayers and wishes for your beautiful journey ahead
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blessings.map((blessing, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 hover:bg-opacity-30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-3 animate-pulse">{blessing.emoji}</div>
                <h3 className="text-2xl font-bold text-white">{blessing.category}</h3>
              </div>
              
              <div className="space-y-4">
                {blessing.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.3) + (itemIndex * 0.1)}s` }}
                  >
                    <div className="text-yellow-300 text-xl mt-1">✨</div>
                    <p className="text-purple-950 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Prayer Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">A Special Prayer for Reeba 🕊️</h2>
          <div className="bg-white bg-opacity-20 rounded-2xl p-8">
            <p className="text-purple-950 text-xl leading-relaxed italic">
              "May this new year of your life be filled with countless blessings, 
              may your path be illuminated with hope and joy, and may you always 
              find reasons to celebrate. You are a beautiful soul, Reeba, and 
              you deserve all the wonderful things life has to offer. 
              Happy Birthday! 🌟💖🎂"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlessingsPage