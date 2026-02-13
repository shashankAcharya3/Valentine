import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import teddyImg from '../assets/time line 2/IMG_20260212_195324_991.jpg'
import ferrisImg from '../assets/TImeline 1/IMG_20260212_195850_812.jpg'
import bwKissImg from '../assets/time line 2/IMG_20260212_195856_182.jpg'
import letterImg from '../assets/time line 2/IMG_20260212_195546_693.jpg'
import blueTopImg from '../assets/time line 2/IMG_20260212_195442_306.jpg'
import yawnImg from '../assets/time line 3/Screenshot_20260212-195229.png'

const photos = [
  {
    src: teddyImg,
    label: 'Cuteness Overload',
    caption: '"I knew I loved you when you ordered the second dessert."',
    size: 'large',
    rotate: -3,
  },
  {
    src: ferrisImg,
    label: 'Adventures',
    caption: null,
    size: 'medium',
    rotate: 2,
  },
  {
    src: bwKissImg,
    label: 'Classic Moments',
    caption: '"You make even the simplest days feel magical."',
    size: 'small',
    rotate: -4,
  },
  {
    src: letterImg,
    label: 'Words of Love',
    caption: null,
    size: 'medium',
    rotate: 3,
  },
  {
    src: blueTopImg,
    label: 'Sunshine',
    caption: '"Your smile is my favorite view."',
    size: 'large',
    rotate: -2,
  },
  {
    src: yawnImg,
    label: 'Real Moments',
    caption: null,
    size: 'small',
    rotate: 4,
  },
]

const sizeMap = {
  large: { dims: '500 × 600' },
  medium: { dims: '400 × 400' },
  wide: { dims: '600 × 400' },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.6 },
  },
}

export default function Scrapbook({ onClose, title, description, images }) {
  const scrollRef = useRef(null)
  const [fadeAmount, setFadeAmount] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [reachedEnd, setReachedEnd] = useState(false)
  const overscroll = useRef(0)

  const ABSORB_THRESHOLD = 80
  const FADE_DISTANCE = 250 // slightly longer for a more gradual feel

  // Use passed images or fallback to default photos if specific ones aren't provided
  // In a real scenario, you'd likely want 'images' to be required or have a better fallback strategy
  const displayPhotos = images || photos 
  const displayTitle = title || "Our Custom Memories"
  // Split title for styling if it contains spaces, otherwise just use it
  const titleParts = displayTitle.split(' ')
  const titleMain = titleParts.slice(0, -1).join(' ')
  const titleAccent = titleParts.slice(-1).join(' ')

  const displayDescription = description || "Every moment with you is a treasure I hold dear."

  const handleClose = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
    // Let the slide-up animation play fully, then remove
    setTimeout(() => {
      onClose()
    }, 600)
  }, [isClosing, onClose])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleWheel = (e) => {
      if (isClosing) return

      const { scrollTop, scrollHeight, clientHeight } = el
      const isAtBottom = scrollHeight - clientHeight - scrollTop < 2

      if (isAtBottom && e.deltaY > 0) {
        e.preventDefault()
        overscroll.current += e.deltaY

        if (!reachedEnd) {
          if (overscroll.current >= ABSORB_THRESHOLD) {
            setReachedEnd(true)
            overscroll.current = 0
          }
        } else {
          const cappedOverscroll = Math.min(overscroll.current, FADE_DISTANCE)
          const fade = cappedOverscroll / FADE_DISTANCE
          setFadeAmount(fade)
          if (fade >= 1) handleClose()
        }
      } else if (overscroll.current > 0 && e.deltaY < 0) {
        e.preventDefault()
        overscroll.current = Math.max(overscroll.current + e.deltaY, 0)
        if (reachedEnd) {
          setFadeAmount(overscroll.current / FADE_DISTANCE)
        }
      } else if (!isAtBottom) {
        overscroll.current = 0
        setFadeAmount(0)
        setReachedEnd(false)
      }
    }

    let touchStartY = 0
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const handleTouchMove = (e) => {
      if (isClosing) return
      const delta = touchStartY - e.touches[0].clientY
      const { scrollTop, scrollHeight, clientHeight } = el
      const isAtBottom = scrollHeight - clientHeight - scrollTop < 2
      if (isAtBottom && delta > 0) {
        e.preventDefault()
        if (!reachedEnd) {
          if (delta >= ABSORB_THRESHOLD) { setReachedEnd(true); overscroll.current = 0 }
        } else {
          overscroll.current = delta
          const fade = Math.min(delta / FADE_DISTANCE, 1)
          setFadeAmount(fade)
          if (fade >= 1) handleClose()
        }
      }
    }
    const handleTouchEnd = () => {
      if (isClosing) return
      if (reachedEnd && fadeAmount >= 0.6) handleClose()
      else if (reachedEnd) { overscroll.current = 0; setFadeAmount(0) }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('wheel', handleWheel)
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchmove', handleTouchMove)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isClosing, reachedEnd, fadeAmount, handleClose])

  // --- Computed visual styles ---
  // While dragging: smooth proportional feedback
  // While closing: big dramatic slide-up + fade
  const contentOpacity = isClosing ? 0 : 1 - fadeAmount * 0.7
  const contentScale = isClosing ? 0.9 : 1 - fadeAmount * 0.06
  const contentBlur = isClosing ? 8 : fadeAmount * 5
  // Slide UP (negative Y) when closing for a natural "page going up" feel
  const contentTranslateY = isClosing ? -100 : fadeAmount * 15
  const backdropOpacity = isClosing ? 0 : 1 - fadeAmount * 0.5

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isClosing ? 0 : 1,
        y: isClosing ? -80 : 0,
      }}
      exit={{ opacity: 0, y: -80 }}
      transition={{
        duration: isClosing ? 0.55 : 0.4,
        ease: [0.4, 0, 0.2, 1], // Material-style ease
      }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-brand-cream/95 backdrop-blur-lg"
        onClick={() => { if (!isClosing) { setIsClosing(true); setTimeout(onClose, 600) } }}
        style={{
          opacity: backdropOpacity,
          transition: isClosing ? 'opacity 0.5s ease' : 'none',
        }}
      />

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="relative z-10 flex-1 overflow-y-auto"
        style={{
          opacity: contentOpacity,
          transform: `scale(${contentScale}) translateY(${contentTranslateY}px)`,
          filter: `blur(${contentBlur}px)`,
          transition: isClosing
            ? 'opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1), filter 0.5s ease'
            : 'filter 0.1s ease',
        }}
      >
        {/* Close button */}
        <div className="sticky top-0 z-20 flex justify-end p-4 md:p-6">
          <button
            onClick={() => { if (!isClosing) { setIsClosing(true); setTimeout(onClose, 600) } }}
            className="group flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/50 hover:bg-white transition-colors cursor-pointer"
          >
            <span className="text-brand-muted text-sm font-medium group-hover:text-brand-dark transition-colors">
              Close
            </span>
            <svg className="w-5 h-5 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-dark mb-4">
              {titleMain} <span className="text-brand-pink italic">{titleAccent}</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              {displayDescription}
            </p>
          </motion.div>

          {/* Scrapbook Grid */}
          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayPhotos.map((photo, i) => {
              const size = sizeMap[photo.size]
              const isLarge = photo.size === 'large'
              const isWide = photo.size === 'wide'

              return (
                <motion.div
                  key={i}
                  className={`${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${isWide ? 'md:col-span-2' : ''}`}
                  variants={photoVariants}
                >
                  <motion.div
                    className="bg-white rounded-lg p-3 pb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                    style={{ rotate: `${photo.rotate}deg` }}
                    whileHover={{ rotate: 0, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full object-cover rounded"
                      style={{ height: isLarge ? '400px' : isWide ? '250px' : '280px' }}
                    />

                    <p className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-brand-dark/70">
                      {photo.label}
                    </p>

                    {photo.caption && (
                      <div className="absolute -bottom-8 left-4 right-4 text-center">
                        <p className="font-serif text-sm italic text-brand-pink/60">{photo.caption}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom area — two phases */}
          <div className="mt-20 mb-4">
            <AnimatePresence mode="wait">
              {!reachedEnd && (
                <motion.div
                  key="scroll-hint"
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.div
                    className="flex flex-col items-center gap-0.5"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="w-5 h-5 text-brand-pink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg className="w-5 h-5 text-brand-pink/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}

              {reachedEnd && (
                <motion.div
                  key="end-hint"
                  className="text-center"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="w-16 h-px bg-brand-pink/20" />
                    <span className="text-brand-pink/40 text-lg">✦</span>
                    <div className="w-16 h-px bg-brand-pink/20" />
                  </div>

                  <p className="font-serif text-xl text-brand-dark/60 mb-2">
                    You've reached the end of the memories
                  </p>
                  <p className="text-brand-muted/50 text-sm mb-4">
                    Keep scrolling to return to the journey
                  </p>

                  <motion.div
                    className="flex flex-col items-center gap-0.5"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="w-5 h-5 text-brand-pink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg className="w-5 h-5 text-brand-pink/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
