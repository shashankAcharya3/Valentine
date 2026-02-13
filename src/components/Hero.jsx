import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { ease: 'easeOut', duration: 0.8 },
}

const scaleIn = {
  initial: { scale: 0.85, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { ease: 'easeOut', duration: 0.8, delay: 0.2 },
}

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,43,91,0.08)_0%,_transparent_70%)]" />

      {/* EST badge */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-16"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="border-2 border-brand-pink/30 rounded-full px-4 py-2 text-brand-pink font-serif text-sm tracking-widest">
          EST. 2022
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div className="relative z-10 max-w-3xl" {...fadeUp}>
        {/* Small decorative heart */}
        <motion.div
          className="text-brand-pink text-3xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♥
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-dark leading-tight mb-6">
          It's been quite a{' '}
          <span className="text-brand-pink italic">journey</span>...
        </h1>

        <motion.p
          className="text-lg md:text-xl text-brand-muted max-w-xl mx-auto mb-12 leading-relaxed"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          Two years of laughter, growth, and endless love.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToNext}
          className="bg-white text-brand-dark font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm tracking-wider uppercase cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          Start the Story
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-brand-muted text-xs tracking-widest uppercase"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll to Begin</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
