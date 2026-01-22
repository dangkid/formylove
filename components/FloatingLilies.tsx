'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FloatingLilies() {
  const [lilies, setLilies] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const newLilies = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 5,
    }))
    setLilies(newLilies)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {lilies.map((lily) => (
        <motion.div
          key={lily.id}
          className="absolute text-5xl"
          style={{ left: `${lily.left}%` }}
          initial={{ bottom: '-10%', opacity: 0, rotate: 0 }}
          animate={{
            bottom: '110%',
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: lily.duration,
            delay: lily.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  )
}
