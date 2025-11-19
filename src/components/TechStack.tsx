import OrbitingSkills from './OrbitingSkills'

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-32 bg-gradient-to-b from-midnight via-navy to-midnight overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl font-light mx-auto">
            Leveraging cutting-edge technologies to build exceptional solutions
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[500px]">
          <OrbitingSkills />
        </div>
      </div>
    </section>
  )
}
