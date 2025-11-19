import { Mail, MapPin, Phone } from 'lucide-react'
import { FooterBackgroundGradient, TextHoverEffect } from './ui/hover-footer'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'AI Solutions', href: '#services' },
        { label: 'Database Design', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Work', href: '#work' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ]

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-purple" />,
      text: 'sales@metaethos.com',
      href: 'mailto:sales@metaethos.com',
    },
    {
      icon: <Phone size={18} className="text-purple" />,
      text: 'Contact Us',
      href: '#contact',
    },
    {
      icon: <MapPin size={18} className="text-purple" />,
      text: 'Remote Services',
    },
  ]

  return (
    <footer className="bg-midnight/10 relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-12 pb-8">
          {/* Brand section */}
          <div className="flex flex-col items-center">
            <div>
              <img src="/MetaEthos.png" alt="MetaEthos" className="h-40 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-white/60 text-center -mt-5">
              Technology solutions with purpose. Building exceptional digital experiences.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/60 hover:text-purple transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/60 text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-sm mt-6">
              &copy; {currentYear} MetaEthos. All rights reserved.
            </p>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex justify-center items-center text-sm">

        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none">
        <TextHoverEffect text="MetaEthos" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
