import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'

interface NavigationProps {
  scrolled: boolean
}

type MenuItem = {
  id: number
  title: string
  url: string
  dropdown?: boolean
  items?: MenuItem[]
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Services',
      url: '#services',
      dropdown: false,
    },
    {
      id: 2,
      title: 'Our Work',
      url: '#work',
      dropdown: false,
    },
    {
      id: 3,
      title: 'Why Us',
      url: '#why-us',
      dropdown: false,
    },
  ]

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
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 absolute right-6 top-6">
            <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
              <nav className="relative">
                <ul className="flex items-center gap-1">
                  {menuItems.map((item) => (
                    <li key={item.id} className="relative">
                      <a
                        className={`
                          relative flex items-center justify-center gap-1 rounded-lg px-4 py-2 transition-all text-white/80
                          hover:bg-white/10 hover:text-purple
                          ${hovered === item.id ? 'bg-white/10 text-purple' : ''}
                        `}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        href={item.url}
                      >
                        {item.title}
                        {item.dropdown && (
                          <ChevronDown size={16} className="transition-transform" />
                        )}
                      </a>
                      {hovered === item.id && !item.dropdown && (
                        <motion.div
                          layout
                          layoutId="cursor"
                          className="absolute h-0.5 w-full bg-purple"
                        />
                      )}
                      {item.dropdown && hovered === item.id && (
                        <div
                          className="absolute left-0 top-full z-50"
                          style={{ pointerEvents: 'auto' }}
                          onMouseEnter={() => setHovered(item.id)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <motion.div
                            transition={{ bounce: 0 }}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            style={{ borderRadius: '12px', pointerEvents: 'auto' }}
                            className="mt-4 flex w-56 flex-col rounded-xl bg-navy/95 backdrop-blur-lg border border-white/10 shadow-2xl overflow-hidden"
                          >
                            {item.items?.map((nav) => (
                              <a
                                key={`link-${nav.id}`}
                                href={nav.url}
                                className="w-full px-4 py-3 text-white/80 hover:bg-purple/20 hover:text-purple transition-colors block"
                                style={{ pointerEvents: 'auto' }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHovered(null);
                                }}
                              >
                                {nav.title}
                              </a>
                            ))}
                          </motion.div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </MotionConfig>
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-purple text-white font-semibold rounded-lg hover:bg-purple-light transition-all hover:scale-105"
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
            {menuItems.map((item) => (
              <div key={item.id}>
                <a
                  href={item.url}
                  className="text-white/80 hover:text-purple transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
                {item.dropdown && item.items && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={subItem.url}
                        className="text-white/60 hover:text-purple transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
