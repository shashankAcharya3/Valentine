import { motion } from 'framer-motion'
import coupleMirrorImg from '../assets/time line 5/PXL_20251212_114007606.MP.jpg'
import videoCallImg from '../assets/time line 3/IMG_20260212_195008_736.jpg'
import palmsImg from '../assets/time line 5/IMG-20260121-WA0049.jpg'
import coffeeImg from '../assets/time line 5/Snapchat-1361794491.jpg'
import t5_img12 from '../assets/time line 5/Snapchat-497164607.jpg'


import fv_img1 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.11 PM (1).jpeg'
import fv_img2 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.11 PM (2).jpeg'
import fv_img3 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.11 PM (3).jpeg'
import fv_img4 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.11 PM.jpeg'
import fv_img5 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.12 PM (1).jpeg'
import fv_img6 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.12 PM (2).jpeg'
import fv_img7 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.12 PM (3).jpeg'
import fv_img8 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.12 PM.jpeg'
import fv_img9 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.13 PM (1).jpeg'
import fv_img10 from '../assets/Food and views/WhatsApp Image 2026-02-13 at 7.22.13 PM.jpeg'


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.8 },
  },
}

const chatMessages = [
  { time: '10:42 PM', text: 'Miss you so much 🥺', sent: true },
  { time: '10:43 PM', text: 'Counting down the days..', sent: false },
  { time: '10:44 PM', text: "Can't wait to see you again", sent: true },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-dark mb-4">
          The Chaos of <span className="text-brand-pink italic">Distance</span>
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          Miles apart but connected by late-night calls and shared recipes. A collection of our digital dates, airport reunions, and the flavors we've discovered together.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Large photo card */}
        <motion.div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden" variants={itemVariants}>
          <img 
            src={t5_img12} 
            alt="Distance Photo 1" 
            className="w-full h-72 md:h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Quote card */}
        <motion.div
          className="bg-brand-pink rounded-2xl p-6 md:p-8 flex items-center justify-center text-center"
          variants={itemVariants}
        >
          <p className="text-white font-serif text-lg md:text-xl italic leading-relaxed">
            "Distance separates bodies, but good food and great love connect souls."
          </p>
        </motion.div>

        {/* Small photo */}
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img 
            src={videoCallImg} 
            alt="Distance Photo 2" 
            className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Chat mockup */}
        <motion.div
          className="md:col-span-2 bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 shadow-lg"
          variants={itemVariants}
        >
          <div className="space-y-4">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.sent
                      ? 'bg-brand-pink text-white rounded-br-md'
                      : 'bg-gray-100 text-brand-dark rounded-bl-md'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sent ? 'text-white/60' : 'text-brand-muted'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photo 3 */}
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img 
            src={palmsImg} 
            alt="Distance Photo 3" 
            className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>



        {/* Photo 4 */}
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img 
            src={coffeeImg} 
            alt="Distance Photo 4" 
            className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* ── Food & Views Expansion ── */}
        
        {/* Row 4 */}
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img1} alt="Food Delight" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div className="md:col-span-2 rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img2} alt="Scenic View" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* Row 5 */}
        <motion.div className="md:col-span-2 rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img3} alt="Another Memory" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img4} alt="Tasty Treat" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>

        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img6} alt="Foodie" className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img7} alt="Yum" className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* Row 8 */}
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img8} alt="Atmosphere" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img9} alt="Cheers" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden" variants={itemVariants}>
          <img src={fv_img10} alt="Sweetest" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </motion.div>

      {/* Continue indicator */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-brand-muted text-sm uppercase tracking-widest mb-3">Continue the journey</p>
        <motion.div
          className="text-brand-pink text-2xl"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
