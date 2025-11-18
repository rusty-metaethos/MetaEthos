import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/95 backdrop-blur-lg border-b border-slate/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 relative overflow-visible">
        <div className="flex items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-2 -my-8">
            <img src="/MetaEthos.png" alt="MetaEthos" className="h-40 md:h-48 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0 absolute right-6 top-6">
            <a href="#services" className="text-white/80 hover:text-purple transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-white/80 hover:text-purple transition-colors">
              Why Us
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-purple text-white font-semibold rounded-lg hover:bg-purple-light transition-all hover:scale-105"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#services"
              className="text-white/80 hover:text-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-white/80 hover:text-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-purple text-white font-semibold rounded-lg hover:bg-purple-light transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
