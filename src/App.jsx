import { useState } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Letter from './components/Letter'
import Proposal from './components/Proposal'
import Celebration from './components/Celebration'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [showCelebration, setShowCelebration] = useState(false)

  const handleYes = () => {
    setShowCelebration(true)
    // Smooth scroll to celebration after a short delay for confetti
    setTimeout(() => {
      document.getElementById('celebration')?.scrollIntoView({ behavior: 'smooth' })
    }, 1500)
  }

  return (
    <div className="relative">
      {/* Floating hearts in the background (parallax) */}
      <FloatingHearts />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Timeline (includes "View Memories" modal) */}
      <Timeline />

      {/* Section 3: Gallery / Chaos of Distance */}
      <Gallery />

      {/* Section 4: Love Letter */}
      <Letter />

      {/* Section 5: The Final Question */}
      <Proposal onYes={handleYes} />

      {/* Section 6: Celebration (only visible after clicking Yes) */}
      {showCelebration && <Celebration />}
    </div>
  )
}

export default App
