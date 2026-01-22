'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoveCounter() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    // Fecha en que iniciamos nuestra historia de amor 💕
    const startDate = new Date('2025-10-02T00:00:00')

    const updateCounter = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      setDays(d)
      setHours(h)
      setMinutes(m)
    }

    updateCounter()
    const interval = setInterval(updateCounter, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 p-8 rounded-3xl shadow-2xl max-w-md mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
        Llevamos Juntos ❤️
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-bold text-white">{days}</div>
          <div className="text-sm text-white/90">Días</div>
        </motion.div>
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-bold text-white">{hours}</div>
          <div className="text-sm text-white/90">Horas</div>
        </motion.div>
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl font-bold text-white">{minutes}</div>
          <div className="text-sm text-white/90">Minutos</div>
        </motion.div>
      </div>
      <p className="text-center text-white mt-6 text-lg">
        Y cada momento contigo es perfecto 💕
      </p>
      
      <motion.div className="mt-6 bg-white/30 backdrop-blur-sm rounded-2xl p-4">
        <p className="text-white text-sm mb-2">Próxima fecha especial:</p>
        <p className="text-white text-xl font-bold">2 de Febrero 💝</p>
      </motion.div>
    </motion.div>
  )
}
