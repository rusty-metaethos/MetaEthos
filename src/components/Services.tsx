import { Globe, Smartphone, Brain, Database, Palette, LineChart } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom web applications built with modern frameworks like React and Next.js. Fast, responsive, and optimized for conversions.',
    features: ['Custom web applications', 'E-commerce platforms', 'Landing pages & portfolios', 'Progressive web apps (PWAs)'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. From concept to App Store, we handle it all.',
    features: ['iOS & Android apps', 'Cross-platform solutions', 'Native performance', 'App Store optimization'],
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Integrate cutting-edge AI into your business. Custom chatbots, automation, MCP integrations, and intelligent data processing.',
    features: ['Custom AI integration', 'MCP protocol integration', 'Chatbots & automation', 'Natural language processing'],
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Robust, scalable database solutions designed for performance. Cloud-native infrastructure that grows with your business.',
    features: ['Database design & optimization', 'Cloud infrastructure', 'Data migration', 'Real-time data systems'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces backed by user research and testing. Design systems that ensure consistency and delight users.',
    features: ['User interface design', 'User experience research', 'Prototyping & wireframing', 'Design systems'],
  },
  {
    icon: LineChart,
    title: 'Tech Consulting',
    description: 'Strategic technology guidance from architecture planning to code audits. Optimize performance, security, and scalability.',
    features: ['Technology strategy', 'Architecture planning', 'Code audits', 'Performance optimization'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-navy via-midnight to-navy relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            What we <span className="text-gradient">create</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto font-light">
            Comprehensive solutions from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-purple/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-purple-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Corner blur effect */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple/20 blur-3xl transition-all group-hover:bg-purple/30" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-light transition-colors">{service.title}</h3>
                  <p className="text-white/80 mb-8 text-lg leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 group-hover:text-white/90 transition-colors">
                        <span className="text-purple-light mt-1 text-lg">✦</span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
