'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  // Nuestros momentos especiales juntos
  const photos = [
    { id: 1, emoji: '🏰', title: 'Sevilla Mágica', description: 'Paseando por las calles de Sevilla' },
    { id: 2, emoji: '🕌', title: 'Córdoba Inolvidable', description: 'Descubriendo la mezquita juntos' },
    { id: 3, emoji: '🌹', title: 'Nuestra Historia', description: 'El día que todo comenzó' },
    { id: 4, emoji: '🌸', title: 'Jardines de Andalucía', description: 'Entre flores y sonrisas' },
    { id: 5, emoji: '💑', title: 'Momentos Únicos', description: 'Cada segundo a tu lado' },
    { id: 6, emoji: '🌙', title: 'Noches Especiales', description: 'Bajo el cielo andaluz' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Nuestros Momentos Especiales 📸
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
            onClick={() => setSelectedPhoto(photo.id)}
            className="relative bg-white p-3 md:p-4 rounded-2xl shadow-xl transform rotate-0 hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-6xl md:text-8xl">{photo.emoji}</div>
            </div>
            <div className="mt-3 text-center">
              <h3 className="font-bold text-sm md:text-base text-gray-800">{photo.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{photo.description}</p>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              📌
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full"
            >
              {photos.find((p) => p.id === selectedPhoto) && (
                <>
                  <div className="aspect-square bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-9xl">
                      {photos.find((p) => p.id === selectedPhoto)?.emoji}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {photos.find((p) => p.id === selectedPhoto)?.title}
                  </h3>
                  <p className="text-gray-600">
                    {photos.find((p) => p.id === selectedPhoto)?.description}
                  </p>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                  >
                    Cerrar ❤️
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
