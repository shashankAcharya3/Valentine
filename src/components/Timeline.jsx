import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scrapbook from './Scrapbook'

// ── Timeline 1: The First Date ──
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

// ── Food and Views ──
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

const milestones = [
  {
    date: 'January 11, 2024',
    title: 'The First Date',
    description:
      'It started with a simple text message and ended with a promise. I knew from the moment I saw you that you were someone special.',
    image: t1_img2,
    cta: 'View Memories',
    id: 'date',
  },
  {
    date: 'January 14, 2024',
    title: 'Our sutola ra Gham Date',
    description:
      'Second date mai sutola ra gham date hanne wala comfort ma',
    image: t2_img1,
    cta: 'View Memories',
    id: 'official',
  },
  {
    date: 'May 28, 2024',
    title: 'Reunited after 6 months of LDR',
    description:
      'Survived 6 months of LDR but the love kept growing.',
    image: t3_img1,
    cta: 'View Memories',
    id: 'trip',
  },
  {
    date: 'December 6, 2024',
    title: 'Another 6 months down',
    description:
      'You became the part of my life and you became a habit. Ani i started loving you more and more each day.',
    image: t4_img1,
    cta: 'View Memories',
    id: 'home',
  },
  {
    date: 'December 12, 2025',
    title: 'Our last visit',
    description:
      'Every moment with you became a memory I will cherish forever.Ani i will keep making more of them with you.',
    image: t5_img7,
    cta: 'View Memories',
    id: 'asking',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Define the unique memories for each milestone — images stay in their timeline
const memorySets = {
  date: {
    title: 'The Beginning',
    description: 'Nervous smiles, and the spark that started it all.',
    images: [
      { src: t1_img3, label: 'The First Rose', caption: 'The lost yet not forgotten rose.', size: 'large', rotate: -3 },
      { src: t1_img1, label: 'First Smile', caption: 'I knew I was in trouble when I saw that smile.', size: 'medium', rotate: 2 },
      { src: t1_img2, label: 'The Shy One. WTF?', caption: 'Did not let me click a single photo', size: 'medium', rotate: -4 },
    ]
  },
  official: {
    title: 'Making History',
    description: 'From "I like you" to "I love you". The moments we knew this was forever.',
    images: [
      { src: t2_img1, label: 'It\'s Official', caption: 'The happiest "Yes".', size: 'large', rotate: -2 },
      { src: t2_img2, label: 'Stargazing', caption: 'Even the Moon was jealous of your shine.', size: 'medium', rotate: 3 },
      { src: t2_img3, label: 'You cutesy', caption: 'Never want to let go.', size: 'small', rotate: -3 },
      { src: t2_img4, label: 'Sakdaina ni Feri', caption: 'Realizing just how beautiful you are everyday.', size: 'wide', rotate: 2 },
      { src: t2_img5, label: 'Love Letter', caption: 'Never gonna loose this', size: 'medium', rotate: -1 },
    ]
  },
  trip: {
    title: 'Finding Love in LDR',
    description: 'Learnt to Love one another',
    images: [
      { src: t3_img1, label: 'kept going', caption: 'Feeling of meeting you after a long time', size: 'large', rotate: 3 },
      { src: t3_img2, label: 'Gham Part 2', caption: 'Gham tw chutnu bhayena nii !!', size: 'medium', rotate: -2 },
      { src: t3_img3, label: 'OOTD', caption: 'Keep these comming and going', size: 'medium', rotate: 4 },
      { src: t3_img4, label: 'Goofing Around', caption: 'Making memories in every corner.', size: 'wide', rotate: -1 },
      { src: t3_img5, label: 'Focused me', caption: 'Sometime the world vanished when shashank was in focus', size: 'large', rotate: 2 },
      { src: t3_img6, label: 'Distance Sucks', caption: 'Video calls kept us going.', size: 'small', rotate: -3 },
      { src: fv_img1, label: 'Foodie Adventures', caption: 'Tasting the world together.', size: 'medium', rotate: 2 },
      { src: fv_img2, label: 'Scenic Views', caption: 'Moments like these.', size: 'large', rotate: -2 },
      { src: fv_img3, label: 'Date Spot', caption: 'Perfect ambiance.', size: 'wide', rotate: 1 },
    ]
  },
  home: {
    title: 'Your the world',
    description: 'Realized just who you mean to me',
    images: [
      { src: t4_img1, label: 'Keeping you close', caption: 'Vaccum', size: 'large', rotate: -3 },
      { src: t4_img2, label: 'Always a Cute Couple', caption: 'Maybe being is our sin', size: 'wide', rotate: 2 },
      { src: t4_img3, label: 'Mero GF haii', caption: 'Looking great and cute as always', size: 'medium', rotate: -2 },
      { src: t4_img4, label: 'I still remember this dat', caption: 'Last day before I go back again', size: 'large', rotate: 4 },
      { src: fv_img4, label: 'Sweet Treats', caption: 'Dessert is a must.', size: 'medium', rotate: -1 },
      { src: fv_img5, label: 'City Lights', caption: 'Beautiful nights.', size: 'wide', rotate: 3 },
      { src: fv_img6, label: 'Good Eats', caption: 'Food coma pending.', size: 'medium', rotate: -2 },
    ]
  },
  asking: {
    title: 'Moment of Recent Enjoyment',
    description: 'Always a fun time with you and the world disappears in us',
    images: [
      { src: t5_img7, label: 'Asthetic', caption: 'Gonna keep this rose forever', size: 'large', rotate: 2 },
      { src: t5_img4, label: 'Bunny Ears', caption: 'We never take ourselves too seriously.', size: 'medium', rotate: -3 },
      { src: t5_img5, label: 'Laliguras Tea', caption: 'Laliguras tea khana jamm!!', size: 'wide', rotate: 1 },
      { src: t5_img2, label: 'Night Lights', caption: 'Glowing in the dark.', size: 'medium', rotate: -2 },
      { src: t5_img3, label: 'Winter Stroll', caption: 'Cold hands, warm hearts.', size: 'medium', rotate: 3 },
      { src: t5_img6, label: 'Art Walk', caption: 'Walking through life with you.', size: 'large', rotate: -4 },
      { src: t5_img8, label: 'Reunited day', caption: 'Finally!!', size: 'medium', rotate: -1 },
      { src: t5_img9, label: 'Americano with Honey & love', caption: 'Small things mean the most.', size: 'small', rotate: 3 },
      { src: t5_img10, label: 'Pure Joy', caption: 'Laughter is the best medicine.', size: 'medium', rotate: -3 },
      { src: t5_img12, label: 'Style Icons', caption: 'Looking good, feeling good.', size: 'large', rotate: -2 },
      { src: fv_img7, label: 'Yum!', caption: 'Delicious.', size: 'medium', rotate: 2 },
      { src: fv_img8, label: 'Another View', caption: 'So peaceful.', size: 'wide', rotate: -1 },
      { src: fv_img9, label: 'Cheers to Us', caption: 'Celebrating life.', size: 'medium', rotate: 4 },
      { src: fv_img10, label: 'Last Bite', caption: 'Saving the best for last.', size: 'small', rotate: -2 },
    ]
  }
}

export default function Timeline() {
  const [activeMemory, setActiveMemory] = useState(null)

  return (
    <>
      <section id="timeline" className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-brand-rose/30 rounded-full blur-3xl" />

        {/* Header */}
        <motion.div
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-dark mb-4">
            The <span className="text-brand-pink italic">Journey</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-lg mx-auto">
            A timeline of our favorite moments, from the very first hello to today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central axis line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-pink/20 via-brand-pink/40 to-brand-pink/20 transform -translate-x-1/2 hidden md:block" />

          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-pink rounded-full border-4 border-brand-cream z-10 hidden md:block" />

                {/* Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
                    {/* Date pill */}
                    <span className="inline-block text-brand-pink font-serif text-sm font-semibold tracking-wide uppercase mb-3">
                      {milestone.date}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                      {milestone.title}
                      <svg
                        className="w-5 h-5 text-brand-pink"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>

                    {/* Description */}
                    <p className="text-brand-muted leading-relaxed mb-4 text-sm md:text-base">
                      {milestone.description}
                    </p>

                    {/* Image placeholder */}
                    <motion.div
                      className="rounded-xl overflow-hidden mb-4"
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {/* TODO: Replace placeholder with your actual image */}
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="w-full h-48 md:h-56 object-cover"
                      />
                    </motion.div>

                    {/* CTA link — opens the memories gallery modal */}
                    <button
                      onClick={() => setActiveMemory(milestone.id)}
                      className="text-brand-pink font-medium text-sm hover:text-brand-pink-dark transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {milestone.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Two Years <span className="text-brand-pink">&</span> Counting
          </h3>
          <p className="text-brand-muted max-w-md mx-auto mb-8">
            Every day since that first coffee has been a gift. Thank you for being my partner, my best friend, and my greatest adventure.
          </p>
          <p className="text-brand-pink/50 text-sm font-script text-xl">Made with love for our anniversary</p>
        </motion.div>
      </section>

      {/* Memories Gallery Modal */}
      <AnimatePresence>
        {activeMemory && memorySets[activeMemory] && (
          <Scrapbook 
            onClose={() => setActiveMemory(null)}
            title={memorySets[activeMemory].title}
            description={memorySets[activeMemory].description}
            images={memorySets[activeMemory].images}
          />
        )}
      </AnimatePresence>
    </>
  )
}
