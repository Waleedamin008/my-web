import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'
import WishesPage from './components/WishesPage'
import MemoriesPage from './components/MemoriesPage'
import GiftsPage from './components/GiftsPage'
import BlessingsPage from './components/BlessingsPage'
import SurprisePage from './components/SurprisePage'
import FireworksScreen from './components/FireworksScreen'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


function AppContent() {
  const [showHomePage, setShowHomePage] = useState(true)
  const [currentPage, setCurrentPage] = useState('main')
  const [showConfetti, setShowConfetti] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  // NEW: intro animation state
  const [showIntro, setShowIntro] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const INTRO_MS = 11000 // 10 seconds for animation duration // change to match your lottie duration

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // show intro when arriving to the main screen (after leaving home)
  useEffect(() => {
    if (!showHomePage && currentPage === 'main' && !animationComplete) {
      console.log('Starting intro animation...')
      setShowIntro(true)

      // Auto-hide intro after animation completes
      const timer = setTimeout(() => {
        console.log('Auto-hiding intro animation...')
        setShowIntro(false)
        setAnimationComplete(true)
      }, INTRO_MS)

      return () => clearTimeout(timer)
    }
  }, [showHomePage, currentPage, animationComplete])

  const enterCelebration = () => {
    setShowHomePage(false)
    setShowConfetti(true)
    // Reset animation state to trigger intro on main page
    setAnimationComplete(false)
  }

  const handleCelebrateMore = () => {
    setShowFireworks(true)
    setShowConfetti(true)
  }

  const closeFireworks = () => {
    setShowFireworks(false)
  }

  const confettiPieces = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-3 h-3 opacity-80 animate-bounce ${showConfetti ? 'animate-pulse' : ''
        }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)],
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ))

  if (showHomePage) {
    return (
      <div className="relative min-h-screen">
        {/* Background Animation for HomePage */}
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <DotLottieReact
            src="/animation/QgrtmvTISY.json"
            loop={true}
            autoplay={true}
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              minHeight: '100vh',
              minWidth: '100vw',
              zIndex: 1
            }}
          />
        </div>
        <HomePage onEnter={enterCelebration} />
      </div>
    )
  }

  const renderPage = () => {
    // Background Animation Component for all pages
    const BackgroundAnimation = () => (
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <DotLottieReact
          src="/animation/QgrtmvTISY.json"
          loop={true}
          autoplay={true}
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex: 1
          }}
        />
      </div>
    )

    switch (currentPage) {
      case 'wishes':
        return (
          <div className="relative min-h-screen">
            <BackgroundAnimation />
            <WishesPage />
          </div>
        )
      case 'memories':
        return (
          <div className="relative min-h-screen">
            <BackgroundAnimation />
            <MemoriesPage />
          </div>
        )
      case 'gifts':
        return (
          <div className="relative min-h-screen">
            <BackgroundAnimation />
            <GiftsPage />
          </div>
        )
      case 'blessings':
        return (
          <div className="relative min-h-screen">
            <BackgroundAnimation />
            <BlessingsPage />
          </div>
        )
      case 'surprise':
        return (
          <div className="relative min-h-screen">
            <BackgroundAnimation />
            <SurprisePage />
          </div>
        )
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden relative">
            {/* Full Screen Lottie Animation Overlay */}
            {showIntro && (
              <div
                className="fixed top-0 left-0 w-full h-full z-50 bg-black flex flex-col items-center justify-center p-4"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  zIndex: 9999
                }}
              >
                {/* Animation Container */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <div className="relative w-72 h-110 sm:w-80 sm:h-80 md:w-96 md:h-96 lottie-container">
                    <DotLottieReact
                      src="/animation/m0tGCnSXLB.json"
                      loop={false}
                      autoplay
                      className="w-full h-120"
                      onComplete={() => {
                        console.log('Animation completed!')
                        setTimeout(() => {
                          setShowIntro(false)
                          setAnimationComplete(true)
                        }, 500)
                      }}
                      onLoadError={() => {
                        console.log('Animation failed to load, showing fallback')
                        setTimeout(() => {
                          setShowIntro(false)
                          setAnimationComplete(true)
                        }, 2000)
                      }}
                      onLoad={() => {
                        console.log('Animation loaded successfully')
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Animated Background Elements - Only show when animation is complete */}
            {!showIntro && (
              <div className="absolute inset-0">
                {/* Background Lottie Animation */}
                <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <DotLottieReact
                    src="/animation/QgrtmvTISY.json"
                    loop={true}
                    autoplay={true}
                    className="w-full h-full object-cover"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      minHeight: '100vh',
                      minWidth: '100vw',
                      zIndex: 1
                    }}
                  />
                </div>
                
                {/* Confetti on top of background animation */}
                <div className="absolute inset-0 z-10">
                  {confettiPieces}
                </div>
              </div>
            )}

            {/* Floating Balloons - Only show when animation is complete */}
            {!showIntro && (
              <>
                <div className="absolute top-10 left-10 animate-bounce">
                  <div className="w-16 h-20 bg-red-400 rounded-full relative">
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-600 transform -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="absolute top-20 right-16 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="w-16 h-20 bg-yellow-400 rounded-full relative">
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-600 transform -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="absolute top-32 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-20 bg-green-400 rounded-full relative">
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-600 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </>
            )}

            {/* Main Content */}
            <div className={`flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10 pt-20 pb-20 transition-opacity duration-500 ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
              {/* Main Title */}
              <h1 className="text-6xl mt-10 md:text-8xl font-bold text-white mb-6 animate-bounce">
                Happy Birthday🥳
              </h1>

              {/* Name with Special Styling */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse">
                  Reeba Amir
                </h2>
                <div className="mt-4 flex justify-center space-x-2">
                  {['🌟', '💖', '🎂', '🎈', '✨'].map((emoji, index) => (
                    <span
                      key={index}
                      className="text-4xl animate-bounce"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>

              {/* Birthday Message */}
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in">
                  🎈 Wishing you the most amazing birthday filled with love, laughter, and endless joy!
                  May this special day bring you everything your heart desires and more! 🎈
                </p>
              </div>

              {/* Current Time Display */}
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-xl border border-gray-700">
                <h3 className="text-gray-300 text-lg mb-2">Birthday Celebration Time</h3>
                <div className="text-2xl font-mono text-pink-400">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-lg text-gray-400">
                  {currentTime.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              {/* Interactive Birthday Button
              <button
                onClick={handleCelebrateMore}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                🎊 Celebrate More! 🎊
              </button> */}

              {/* Birthday Wishes */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                {[
                  { icon: '🎂', text: 'Another Year of Awesome!' },
                  { icon: '🎁', text: 'May All Your Dreams Come True!' },
                  { icon: '🌟', text: 'Shine Bright Like a Star!' }
                ].map((wish, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl p-6 text-center hover:bg-opacity-60 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="text-4xl mb-3">{wish.icon}</div>
                    <p className="text-gray-200 font-semibold">{wish.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Hearts */}
            <div className="absolute bottom-10 left-10 text-4xl animate-ping">🎆</div>
            <div className="absolute bottom-20 right-10 text-4xl animate-ping" style={{ animationDelay: '1s' }}>🎆</div>
            <div className="absolute bottom-32 right-1/4 text-4xl animate-ping" style={{ animationDelay: '2s' }}>🎆</div>
          </div>
        )
    }
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Hide Navigation during intro animation */}
      {!showIntro && <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {renderPage()}

      {/* Fireworks Screen Overlay */}
      {showFireworks && <FireworksScreen onClose={closeFireworks} />}

      {/* Global CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Mobile-specific fixes for animation */
        @media (max-width: 768px) {
          .fixed.inset-0 {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            height: 100dvh !important; /* Dynamic viewport height for mobile */
          }
          
          /* Fix background animation on mobile */
          .absolute.inset-0 {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            min-height: 100vh !important;
            min-width: 100vw !important;
          }
        }
        
        /* Ensure animation is visible on mobile */
        .lottie-container {
          min-height: 200px;
          max-height: 80vh;
        }
      `}</style>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
