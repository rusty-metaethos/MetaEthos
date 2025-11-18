import { useEffect, useState } from 'react'

export default function FloatingShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div 
        className="absolute w-64 h-64 bg-gradient-to-br from-purple/20 to-purple-light/20 rounded-full blur-2xl animate-float"
        style={{
          top: '10%',
          left: '5%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      <div 
        className="absolute w-96 h-96 bg-gradient-to-tr from-purple-light/15 to-purple/15 rounded-full blur-3xl animate-float-delayed"
        style={{
          top: '60%',
          right: '10%',
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Animated hexagons */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 animate-spin-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple/10 to-transparent border border-purple/20 rotate-45" />
      </div>

      <div 
        className="absolute bottom-1/4 left-[5%] w-24 h-24 animate-spin-reverse"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="w-full h-full bg-gradient-to-tl from-purple-light/10 to-transparent border border-purple-light/20 rotate-12" />
      </div>

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple/30 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
