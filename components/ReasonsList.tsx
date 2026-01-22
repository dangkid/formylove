'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ReasonsList() {
  const [count, setCount] = useState(0)

  const reasons = [
    'Tus ojos son lo más hermoso que he visto',
    'Me pierdo en tu mirada cada vez que te veo',
    'Tus ojos brillan de una forma especial',
    'Tu sonrisa ilumina mis días',
    'Me haces sentir especial cada día',
    'Eres mi mejor amiga y confidente, Cabezo',
    'Tu risa es contagiosa y hermosa',
    'Me apoyas en todo lo que hago',
    'Eres increíblemente inteligente',
    'Tu bondad no tiene límites',
    'Compartimos los mejores momentos juntos',
    'Tu fuerza me inspira cada día',
    'Eres hermosa por dentro y por fuera',
    'Me entiendes como nadie más',
    'Eres mi sueño hecho realidad',
    'Tu paciencia es admirable',
    'Eres creativa y talentosa',
    'Me haces reír sin esfuerzo',
    'Eres mi paz en medio del caos',
    'Contigo todo es mejor',
    'Eres mi persona favorita en el mundo',
    'Tu amor me hace sentir completo',
    'Eres mi motivación diaria',
    'Cada día contigo es una aventura',
    'Eres perfecta para mí',
    'Tu presencia hace todo más bonito',
    'Eres mi futuro y mi presente',
    'Me haces creer en el amor verdadero',
    'Eres mi razón de sonreír',
    'Simplemente porque eres TÚ',
  ]

  const getReason = () => {
    return reasons[count % reasons.length]
  }

  const nextReason = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ∞ Razones Por Las Que Te Amo
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-pink-400 via-purple-400 to-red-400 p-8 md:p-12 rounded-3xl shadow-2xl mb-8"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
            <motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💝
            </motion.div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-4">
              Razón #{count + 1}
            </div>
            <motion.p
              className="text-xl md:text-2xl text-white font-semibold leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {getReason()}
            </motion.p>
          </div>
        </motion.div>

        <div className="text-center space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextReason}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
          >
            Ver Otra Razón 💕
          </motion.button>

          <p className="text-gray-600 text-sm">
            Hay infinitas razones, pero estas son algunas de mis favoritas
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {reasons.slice(0, 6).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
              className="bg-pink-100 p-4 rounded-xl shadow-md text-center"
            >
              <div className="text-3xl mb-2">💖</div>
              <p className="text-sm text-gray-700 font-medium">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
