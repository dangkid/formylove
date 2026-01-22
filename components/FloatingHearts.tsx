'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl"
          style={{ left: `${heart.left}%` }}
          initial={{ bottom: '-10%', opacity: 0 }}
          animate={{
            bottom: '110%',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  )
}
