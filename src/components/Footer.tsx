import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-slate/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img src="/MetaEthos.png" alt="MetaEthos" className="h-40 md:h-48 w-auto" />
            </div>
            <p className="text-white/60 leading-relaxed text-center md:text-left">
              Technology solutions with purpose. Custom websites, mobile apps, AI solutions, and databases for businesses that demand excellence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/60 hover:text-purple transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/60 hover:text-purple transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center hover:bg-purple/20 transition-colors"
              >
                <Github className="text-purple" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center hover:bg-purple/20 transition-colors"
              >
                <Linkedin className="text-purple" size={20} />
              </a>
              <a
                href="mailto:hello@metaethos.com"
                className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center hover:bg-purple/20 transition-colors"
              >
                <Mail className="text-purple" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} MetaEthos. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
