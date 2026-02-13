import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 20 + 10,
  opacity: Math.random() * 0.3 + 0.05,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 15,
  color: ['#ee2b5b', '#f94c75', '#FEE2E2', '#FFB6C1', '#FF69B4'][Math.floor(Math.random() * 5)],
}))

export default function FloatingHearts() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -600])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ y }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${Math.random() * 120}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            color: heart.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.div>
      ))}
    </motion.div>
  )
}
