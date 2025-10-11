import React, { useState } from 'react'

const MemoriesPage = () => {
  const [selectedMemory, setSelectedMemory] = useState(null)

  const memories = [
    { id: 1, title: "First Adventure", emoji: "🌟", description: "Remember that amazing day when..." },
    { id: 2, title: "Laughing Together", emoji: "😂", description: "Those moments of pure joy and laughter..." },
    { id: 3, title: "Special Moments", emoji: "💫", description: "All those little things that made us smile..." },
    { id: 4, title: "Achievements", emoji: "🏆", description: "Celebrating all your wonderful accomplishments..." },
    { id: 5, title: "Friendship Goals", emoji: "👯‍♀️", description: "The best memories are made with friends..." },
    { id: 6, title: "Future Dreams", emoji: "🌈", description: "Looking forward to all the memories yet to come..." }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          📸 Beautiful Memories 📸
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedMemory(memory.id)}
            >
              <div className="text-6xl mb-4 text-center animate-bounce">
                {memory.emoji}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">
                {memory.title}
              </h3>
              <p className="text-white text-center opacity-90">
                {memory.description}
              </p>
            </div>
          ))}
        </div>

        {/* Memory Showcase */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">🎭 Memory Theater 🎭</h3>
          <div className="bg-white bg-opacity-20 rounded-2xl p-8">
            <div className="text-8xl mb-4 animate-pulse">🎬</div>
            <p className="text-white text-xl">
              Every moment with you is a treasure, Reeba! Here's to creating many more beautiful memories together! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoriesPage