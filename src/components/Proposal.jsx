import { useState, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Proposal({ onYes }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noMoved, setNoMoved] = useState(false)
  const [yesClicked, setYesClicked] = useState(false)
  const sectionRef = useRef(null)
  const noButtonRef = useRef(null)

  // Handle the "No" button running away from cursor
  const handleNoMouseMove = useCallback((e) => {
    if (!noButtonRef.current || !sectionRef.current) return

    const buttonRect = noButtonRef.current.getBoundingClientRect()
    const buttonCenterX = buttonRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top + buttonRect.height / 2

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
    )

    // If cursor is within 100px of the "No" button, make it run away
    if (distance < 100) {
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const maxX = sectionRect.width / 2 - 60
      const maxY = 150

      // Randomize new position — adjust these multipliers to control speed
      const newX = (Math.random() - 0.5) * 2 * maxX
      const newY = (Math.random() - 0.5) * 2 * maxY

      setNoPosition({ x: newX, y: newY })
      setNoMoved(true)
    }
  }, [])

  // Handle "Yes" click
  const handleYes = () => {
    if (yesClicked) return
    setYesClicked(true)

    // Massive confetti explosion 🎉
    const duration = 3000
    const end = Date.now() + duration

    const colors = ['#ee2b5b', '#f94c75', '#FEE2E2', '#FFB6C1', '#FF69B4', '#D4A853', '#ffffff']

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors,
      })
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()

    // Also fire a center burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors,
      startVelocity: 45,
      gravity: 0.8,
    })

    // Trigger the celebration section
    if (onYes) onYes()
  }

  return (
    <section
      id="proposal"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      onMouseMove={handleNoMouseMove}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,43,91,0.06)_0%,_transparent_70%)]" />

      {/* Decorative hearts */}
      <motion.div
        className="absolute top-20 left-20 text-brand-pink/10 text-8xl"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        ♥
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-brand-pink/10 text-6xl"
        animate={{ rotate: [0, -10, 10, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ♥
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-dark mb-4">
          One last{' '}
          <span className="text-brand-pink italic">Question</span>...
        </h2>
        <p className="text-brand-muted text-lg md:text-xl max-w-lg mx-auto mb-16">
          After two years of laughter, adventures, and endless memories, there's just one thing left to ask.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
          {/* YES Button */}
          <motion.button
            onClick={handleYes}
            disabled={yesClicked}
            className={`px-12 py-5 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 cursor-pointer ${
              yesClicked
                ? 'bg-green-500 text-white scale-110'
                : 'bg-brand-pink text-white hover:bg-brand-pink-dark shadow-lg hover:shadow-xl hover:shadow-brand-pink/30'
            }`}
            whileHover={!yesClicked ? { scale: 1.08 } : {}}
            whileTap={!yesClicked ? { scale: 0.95 } : {}}
          >
            {yesClicked ? '🎉 YES!!!' : 'YES ❤️'}
          </motion.button>

          {/* NO Button — runs away from cursor */}
          <motion.button
            ref={noButtonRef}
            className="px-6 py-3 rounded-full text-sm text-brand-muted border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            {noMoved ? '😏 Nice try!' : 'No'}
          </motion.button>
        </div>

        {yesClicked && (
          <motion.p
            className="mt-8 text-brand-pink font-script text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I knew you'd say yes! 💝
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
