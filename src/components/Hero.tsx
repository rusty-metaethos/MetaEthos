import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)'
        ctx.fill()

        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 150)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight via-purple/10 to-midnight">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-light/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple/20 to-purple-light/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-8 animate-slide-up leading-[0.95] tracking-tight">
          Build
          <br />
          <span className="text-gradient bg-gradient-to-r from-purple via-purple-light to-purple bg-clip-text animate-gradient">Without</span>
          <br />
          Limits
        </h1>

        <p className="text-xl md:text-3xl text-white/80 max-w-4xl mx-auto mb-16 animate-slide-up leading-relaxed font-light" style={{ animationDelay: '0.1s' }}>
          We build <span className="text-purple-light font-semibold">custom websites</span>, <span className="text-purple-light font-semibold">mobile apps</span>, <span className="text-purple-light font-semibold">AI solutions</span>, and <span className="text-purple-light font-semibold">databases</span> that transform your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-purple to-purple-light text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple/50 transition-all hover:scale-105 flex items-center gap-3 text-lg"
          >
            Start Your Project
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-purple/50 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-purple transition-all text-lg"
          >
            View Our Services
          </a>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple/50 transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-sm text-white/70 font-medium">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple/50 transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-sm text-white/70 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple/50 transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-sm text-white/70 font-medium">Code Quality</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple/50 transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-sm text-white/70 font-medium">Tech Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
