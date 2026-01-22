'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Card {
  id: number
  emoji: string
  matched: boolean
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [solved, setSolved] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const emojis = ['💕', '💖', '💗', '💝', '💞', '💓', '💘', '❤️']

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        matched: false,
      }))
    setCards(shuffledCards)
    setFlipped([])
    setSolved([])
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (id: number) => {
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) {
      return
    }

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      if (cards[first].emoji === cards[second].emoji) {
        setSolved([...solved, first, second])
        setFlipped([])
        
        if (solved.length + 2 === cards.length) {
          setGameWon(true)
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Juego de Memoria del Amor 🎮
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6 bg-white rounded-2xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-gray-700">
            Movimientos: <span className="text-pink-500">{moves}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={initializeGame}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg"
          >
            Reiniciar 🔄
          </motion.button>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-2xl text-4xl md:text-5xl flex items-center justify-center shadow-lg transition-all ${
                flipped.includes(card.id) || solved.includes(card.id)
                  ? 'bg-gradient-to-br from-pink-300 to-purple-300'
                  : 'bg-gradient-to-br from-pink-500 to-purple-500'
              }`}
            >
              {flipped.includes(card.id) || solved.includes(card.id) ? (
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.emoji}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 0 }}
                  className="text-white"
                >
                  ❤️
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {gameWon && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 p-8 rounded-3xl shadow-2xl text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-2">¡Ganaste!</h3>
            <p className="text-white text-lg mb-4">
              Completaste el juego en {moves} movimientos
            </p>
            <p className="text-white text-xl font-semibold">
              ¡Te amo tanto como amo pasar tiempo contigo! 💕
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
