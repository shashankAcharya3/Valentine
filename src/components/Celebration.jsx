import { motion } from 'framer-motion'
import coupleSelfieImg from '../assets/time line 4/IMG-20250727-WA0008.jpg'
import artGalleryImg from '../assets/time line 5/PXL_20251226_095721142.MP.jpg'

import t1_img1 from '../assets/TImeline 1/IMG-20250422-WA0015.jpg'
import t1_img2 from '../assets/TImeline 1/IMG_20260212_195850_812.jpg'
import t1_img3 from '../assets/TImeline 1/motion_photo_8877342918544580175.jpg'

// ── Timeline 2: Making it Official ──
import t2_img1 from '../assets/time line 2/IMG-20250422-WA0015.jpg'
import t2_img2 from '../assets/time line 2/IMG_20260212_195252_214.jpg'
import t2_img3 from '../assets/time line 2/IMG_20260212_195324_991.jpg'
import t2_img4 from '../assets/time line 2/IMG_20260212_195442_306.jpg'
import t2_img5 from '../assets/time line 2/IMG_20260212_195546_693.jpg'
import t2_img6 from '../assets/time line 2/IMG_20260212_195856_182.jpg'

// ── Timeline 3: Our First Adventure ──
import t3_img1 from '../assets/time line 3/IMG-20250330-WA0017.jpg'
import t3_img2 from '../assets/time line 3/IMG-20250521-WA0005.jpg'
import t3_img3 from '../assets/time line 3/IMG_20260212_195008_736.jpg'
import t3_img4 from '../assets/time line 3/IMG_20260212_195057_191.jpg'
import t3_img5 from '../assets/time line 3/IMG_20260212_195800_820.jpg'
import t3_img6 from '../assets/time line 3/Screenshot_20260212-195229.png'

// ── Timeline 4: Home Sweet Home ──
import t4_img1 from '../assets/time line 4/IMG-20250330-WA0016.jpg'
import t4_img2 from '../assets/time line 4/IMG-20250521-WA0006.jpg'
import t4_img3 from '../assets/time line 4/IMG-20250606-WA0011.jpg'
import t4_img4 from '../assets/time line 4/IMG-20250727-WA0008.jpg'

// ── Timeline 5: Asking the Question (Today) ──
import t5_img1 from '../assets/time line 5/IMG-20251113-WA0010.jpg'
import t5_img2 from '../assets/time line 5/IMG-20260121-WA0049.jpg'
import t5_img3 from '../assets/time line 5/IMG-20260121-WA0054.jpg'
import t5_img4 from '../assets/time line 5/PXL_20251212_114007606.MP.jpg'
import t5_img5 from '../assets/time line 5/PXL_20251212_114021043.MP.jpg'
import t5_img6 from '../assets/time line 5/PXL_20251226_095721142.MP.jpg'
import t5_img7 from '../assets/time line 5/Snapchat-1361794491.jpg'
import t5_img8 from '../assets/time line 5/Snapchat-1509332301 2.jpg'
import t5_img9 from '../assets/time line 5/Snapchat-1820994471 2.jpg'
import t5_img10 from '../assets/time line 5/Snapchat-1907154556.jpg'
import t5_img11 from '../assets/time line 5/Snapchat-214728483.jpg'
import t5_img12 from '../assets/time line 5/Snapchat-497164607.jpg'


export default function Celebration() {
  return (
    <section
      id="celebration"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Confetti-scattered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-rose-light/40 to-brand-cream" />

      {/* Floating decorative elements */}
      {['💕', '✨', '🌹', '💝', '🎉', '💐'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl"
          style={{
            left: `${15 + i * 14}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
        >
          <motion.h2
            className="font-serif text-5xl md:text-7xl font-bold text-brand-dark mb-2 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeOut', duration: 0.8, delay: 0.2 }}
          >
            Happy
            <br />
            <span className="text-brand-pink italic">Valentine's</span>
            <br />
            Day
          </motion.h2>

          <motion.p
            className="text-brand-muted text-lg md:text-xl mt-6 mb-4 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeOut', duration: 0.8, delay: 0.4 }}
          >
            Here's to two amazing years and many more to come. Thank you for making every moment special.
          </motion.p>

          <motion.p
            className="font-script text-3xl text-brand-pink mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Just us. Forever.
          </motion.p>

          <motion.p
            className="font-serif text-brand-muted/50 italic text-sm mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            "And so the adventure continues..."
          </motion.p>
        </motion.div>

        {/* Right: Photo collage */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8, delay: 0.3 }}
        >
          {/* Rotating circular text badge */}
          <motion.div
            className="absolute -top-6 -right-6 w-28 h-28 md:w-36 md:h-36 z-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0"
                />
              </defs>
              <text className="fill-brand-pink text-[8px] font-medium tracking-[4px] uppercase">
                <textPath href="#circlePath">
                  VALENTINE'S • FOREVER TOGETHER • ♥ •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-brand-pink text-2xl">♥</span>
            </div>
          </motion.div>

          {/* Photo collage - 3 overlapping images */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Photo 1 - large, back */}
            <motion.div
              className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 0.4 }}
            >
              {/* TODO: Replace with your image path */}
              <img 
                src={t1_img1} 
                alt="Celebration Photo 1" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Photo 2 - smaller, overlapping */}
            <motion.div
              className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 0.6 }}
            >
              {/* TODO: Replace with your image path */}
              <img 
                src={t5_img1} 
                alt="Celebration Photo 2" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 text-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-brand-muted/50 text-xs tracking-widest uppercase">
          Made with ♥ for us
        </p>
      </motion.div>
    </section>
  )
}
