import { Code2, Palette, Zap, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Code2,
    title: 'Full-Stack Expertise',
    description: 'From design to deployment, we handle every aspect of your project. Modern frameworks, AI integration, and cloud-native solutions.',
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Beautiful, intuitive interfaces that users love. Every pixel crafted with attention to detail and user experience.',
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Efficient workflows that deliver production-ready solutions in 3-6 weeks. Agile development with continuous feedback.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Partnership',
    description: "Dedicated support, maintenance, and continuous improvement. We're your long-term technology partner.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-gradient-to-b from-navy via-midnight to-midnight relative overflow-hidden scroll-mt-24">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Custom-Built. </span>
            <span className="text-gradient">Future-Proof</span>
            <span className="text-white">.</span>
            <br />
            <span className="text-gradient">Exceptional</span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto font-light">
            We don&apos;t just build software—we craft digital experiences that transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="flex items-start gap-8 relative z-10">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple to-purple-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                    <Icon className="text-white" size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-light transition-colors">{benefit.title}</h3>
                    <p className="text-white/80 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-purple-light/10" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your <span className="text-gradient">Digital Presence</span>?
            </h3>
            <p className="text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light">
              Let's discuss how we can build custom technology solutions tailored to your business goals
            </p>
            <a
              href="#contact"
              className="inline-block px-12 py-6 bg-gradient-to-r from-purple to-purple-light text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple/50 transition-all hover:scale-105 text-lg"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
