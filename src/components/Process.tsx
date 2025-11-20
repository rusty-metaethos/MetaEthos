const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Deep dive into your vision, users, and business goals to define the perfect solution. We analyze your market, competitors, and target audience.',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Craft beautiful interfaces and user experiences with modern design principles. Interactive prototypes bring your vision to life.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Build robust, scalable applications using cutting-edge technologies. Rigorous testing ensures quality and performance.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Deploy with confidence and monitor performance. Continuous optimization and support for sustained growth.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-32 bg-gradient-to-b from-midnight via-navy to-midnight overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Our <span className="text-gradient">process</span>
            </h2>
            <p className="text-2xl text-white/70 mb-16 font-light leading-relaxed">
              A proven methodology that transforms ambitious ideas into exceptional digital products
            </p>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-purple before:to-purple-light before:opacity-30"
                >
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-2 border-purple bg-midnight transition-all duration-300 group-hover:scale-125 group-hover:bg-purple group-hover:shadow-lg group-hover:shadow-purple/50" />
                  
                  <div className="mb-2 text-sm font-bold text-purple-light tracking-wider">
                    STEP {step.number}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-light transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
              
              {/* Floating stats overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 sm:gap-6 p-4 sm:p-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">
                      100
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium">Transparency</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">
                      Agile
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium">Methodology</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium">Support</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent mb-2">
                      ∞
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium">Iterations</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blur */}
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-purple/30 blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
