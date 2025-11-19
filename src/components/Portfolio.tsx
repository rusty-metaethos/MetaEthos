const projects = [
  {
    title: 'Asset Management PWA',
    category: 'Full-Stack Development',
    description: 'Custom progressive web app for streamlined asset tracking and management',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    featured: true,
  },
  {
    title: 'AI Customer Support',
    category: 'AI Solution',
    description: 'Intelligent chatbot reducing response time by 85%',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: false,
  },
  {
    title: 'MCP Integration',
    category: 'AI Solution',
    description: 'Seamless context protocol implementation for enhanced AI capabilities',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    featured: false,
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics platform for enterprise clients',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    title: 'Custom Development',
    category: 'Database Solution',
    description: 'Tailored database solutions and custom integrations for complex workflows',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80',
    featured: false,
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-midnight via-navy to-midnight overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-light rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Crafting digital <span className="text-gradient">excellence</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl font-light">
            Every project is an opportunity to push boundaries and create something extraordinary
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Large featured project */}
          <div className="group relative overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple/50 transition-all duration-500">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
              <span className="mb-3 inline-block rounded-full bg-purple/20 border border-purple/30 px-4 py-1.5 text-sm font-semibold text-purple-light backdrop-blur-sm">
                {projects[0].category}
              </span>
              <h3 className="mb-3 text-3xl lg:text-5xl font-black text-white">{projects[0].title}</h3>
              <p className="mb-6 text-lg lg:text-xl leading-relaxed text-white/80">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Secondary projects */}
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${project.title === 'Custom Development' ? 'lg:col-span-7' : 'lg:col-span-5'} bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple/50 transition-all duration-500`}
            >
              <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <span className="mb-2 inline-block rounded-full bg-purple-light/20 border border-purple-light/30 px-3 py-1 text-xs font-semibold text-purple-light backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="mb-2 text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-sm lg:text-base leading-relaxed text-white/70">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
