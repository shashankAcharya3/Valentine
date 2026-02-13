import { motion } from 'framer-motion'

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Blurred background image effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-rose-light/30 to-brand-cream" />

      {/* Decorative blurred photos in background */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-rose/20 rounded-full blur-3xl" />

      {/* Letter card */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl border border-white/50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
      >
        {/* Title */}
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8, delay: 0.2 }}
        >
          To My <span className="text-brand-pink italic">Dearest</span>
        </motion.h2>

        {/* Letter body with drop cap */}
        <motion.div
          className="prose prose-lg max-w-none text-brand-dark/80 leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8, delay: 0.4 }}
        >
          <p>
            <span className="float-left text-6xl md:text-7xl font-serif font-bold text-brand-pink leading-none mr-3 mt-1">M</span>
            y love Jyotsana, as I sit down to write this, the world outside seems to fade away, leaving only the quiet rhythm of my heart beating in sync with thoughts of you. It's hard to believe that two years have passed since we first started this journey together. Time has a funny way of slipping through our fingers, doesn't it? Yet, every moment with you feels infinite, captured in amber, precious and unchanging.
          </p>

          
          <p>
            Do you remember that bihana ko din where we first met, not knowing what you were like in person but still i was there waiting with roses in my bag cause i was too shy to carry it in my hands, Broo the nerves I had, I rushed to the washroom just to hype myself up. But after meeting you it was like we have know each other for ages. It was awesome and you slipping up and saying "masala" :). 
          </p>

          <p>
            We are so much more awesome that i thought. You are the greatest you really taught me how to love and what it really means. A boy with attitude and toughness and shyness to show love to anyone really does stuffs he does right now. I am glad I that boy met you. I don't think anyone would have been able to get to that boy, he had his walls to thick for anyone but you melted it away slowly but surely.
          </p>

          <p>
            Ani i do think we are awesome, the way to laugh, the way we make each other feel and the way we understand other is really special and would cherish this for entirely of my life.  I promise you to be by your side always through thick or thin. I love you Maya!
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="mt-12 text-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeOut', duration: 0.8, delay: 0.6 }}
        >
          <p className="text-brand-muted text-sm mb-2">Yours Forever,</p>
          {/* TODO: Change this name to yours */}
          <p className="font-script text-4xl text-brand-pink">Shashank</p>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        className="text-center mt-12 text-brand-muted text-sm tracking-widest uppercase relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Scroll down to relive our memories
      </motion.p>
    </section>
  )
}
