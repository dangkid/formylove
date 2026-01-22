'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingHearts from '@/components/FloatingHearts'
import FloatingLilies from '@/components/FloatingLilies'
import LoveCounter from '@/components/LoveCounter'
import PhotoGallery from '@/components/PhotoGallery'
import LoveLetters from '@/components/LoveLetters'
import MemoryGame from '@/components/MemoryGame'
import ReasonsList from '@/components/ReasonsList'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    { id: 'home', name: 'Inicio', emoji: '🏠' },
    { id: 'reasons', name: 'Te Amo Porque', emoji: '💝' },
    { id: 'gallery', name: 'Momentos', emoji: '📸' },
    { id: 'letters', name: 'Cartas', emoji: '💌' },
    { id: 'game', name: 'Juego', emoji: '🎮' },
  ]

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-red-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 1 }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💕
              </motion.h1>
              <motion.p
                className="text-2xl md:text-4xl text-white font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Para Ti, Cabezo 💕
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingHearts />
      <FloatingLilies />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-red-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-center gap-2 flex-wrap">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                >
                  {section.emoji} {section.name}
                </motion.button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content Sections */}
        <div className="pt-24 pb-12">
          <AnimatePresence mode="wait">
            {currentSection === 0 && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="container mx-auto px-4"
              >
                <div className="text-center py-12">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent mb-6"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Hola, Cabezo 💖
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Marta, este sitio lo hice especialmente para ti, porque eres lo más especial en mi vida
                  </motion.p>
                  <LoveCounter />
                </div>
              </motion.div>
            )}

            {currentSection === 1 && (
              <motion.div
                key="reasons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ReasonsList />
              </motion.div>
            )}

            {currentSection === 2 && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PhotoGallery />
              </motion.div>
            )}

            {currentSection === 3 && (
              <motion.div
                key="letters"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <LoveLetters />
              </motion.div>
            )}

            {currentSection === 4 && (
              <motion.div
                key="game"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <MemoryGame />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  )
}
