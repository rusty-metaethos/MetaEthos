import { useEffect, useRef, useState } from 'react'
import { Rocket, Users, Code2, Sparkles } from 'lucide-react'

const stats = [
  {
    icon: Rocket,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-purple to-purple-light',
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-purple-light to-purple',
  },
  {
    icon: Code2,
    value: 50,
    suffix: 'K+',
    label: 'Lines of Code',
    color: 'from-purple to-purple-light',
  },
  {
    icon: Sparkles,
    value: 24,
    suffix: '/7',
    label: 'Tech Support',
    color: 'from-purple-light to-purple',
  },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-midnight via-navy to-midnight relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Proven </span>
            <span className="text-gradient">Results</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto font-light">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <StatCard
                key={index}
                stat={stat}
                Icon={Icon}
                index={index}
                isVisible={isVisible}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, Icon, index, isVisible }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:border-purple/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-purple-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Rotating border effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-20 blur-xl`} />
      </div>

      <div className="relative z-10">
        {/* Animated icon */}
        <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-purple/30`}>
          <Icon className="text-white" size={36} />
        </div>

        {/* Animated counter */}
        <div className={`text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {isVisible ? count : 0}{stat.suffix}
        </div>

        <div className="text-xl font-bold text-white/90 mb-2">{stat.label}</div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4">
          <div
            className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
            style={{ width: isVisible ? '100%' : '0%' }}
          />
        </div>
      </div>
    </div>
  )
}
