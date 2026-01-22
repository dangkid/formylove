'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoveLetters() {
  const [openLetter, setOpenLetter] = useState<number | null>(null)

  const letters = [
    {
      id: 1,
      title: 'Para Ti, Cabezo',
      emoji: '💌',
      content:
        'Marta, cada día que pasa me enamoro más de ti. Tu sonrisa ilumina mis días, tu risa es la melodía más hermosa que he escuchado. Eres mi persona favorita, mi mejor amiga, mi todo. Desde aquel 2 de octubre, mi vida tiene más sentido. Te amo más de lo que las palabras pueden expresar.',
    },
    {
      id: 2,
      title: 'Mis Promesas Para Ti',
      emoji: '💝',
      content:
        'Prometo estar a tu lado en los buenos y malos momentos. Prometo hacerte sonreír cada día. Prometo amarte incondicionalmente, Cabezo. Prometo ser tu refugio cuando necesites paz. Prometo celebrar cada logro contigo y apoyarte en cada desafío. Prometo que cada día será una nueva aventura juntos.',
    },
    {
      id: 3,
      title: 'Lo Que Significas Para Mí',
      emoji: '💖',
      content:
        'Marta, eres mi inspiración, mi motivación, mi razón de ser mejor persona cada día. Contigo he descubierto el verdadero significado del amor. Has llenado mi vida de colores que no sabía que existían. Cada paseo por Sevilla y Córdoba contigo es mágico. Eres mi hogar, mi paz, mi felicidad.',
    },
    {
      id: 4,
      title: 'Nuestro Futuro',
      emoji: '💕',
      content:
        'Sueño con todos los momentos que viviremos juntos, Cabezo. Cada aventura, cada risa, cada abrazo. Quiero estar contigo en cada paso del camino. Construir una vida llena de amor, risas y momentos inolvidables. El 2 de febrero y cada día después. Porque contigo, el futuro es más brillante.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Cartas de Amor Para Ti 💌
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {letters.map((letter, index) => (
          <motion.div
            key={letter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-br from-pink-100 to-red-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-6xl opacity-20">
                {letter.emoji}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-3">{letter.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{letter.title}</h3>
                <p className="text-sm text-gray-600">
                  {openLetter === letter.id ? 'Toca para cerrar' : 'Toca para leer'}
                </p>
              </div>
            </motion.button>

            <AnimatePresence>
              {openLetter === letter.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="mt-4 bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-200"
                  >
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {letter.content}
                    </p>
                    <div className="mt-4 text-right text-pink-500 font-semibold">
                      Con todo mi amor 💕
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
