import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Navigation scrolled={scrolled} />
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <WhyChooseUs />
      <Stats />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
