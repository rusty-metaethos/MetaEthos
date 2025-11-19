import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Web3Forms to send emails - Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e3f54478-8315-4c3e-8f4f-1f412766f230',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          project_type: formData.projectType,
          budget: formData.budget || 'Not specified',
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: 'MetaEthos Website',
          to_email: 'rusty@metaethos.net',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            message: '',
          })
        }, 5000)
      } else {
        alert('There was an error sending your message. Please try again or email us directly at rusty@metaethos.net')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or email us directly at rusty@metaethos.net')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 bg-midnight relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Let's Build Something </span>
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-navy/80 to-navy/40 border border-purple/50 rounded-2xl p-12 text-center animate-fade-in">
            <CheckCircle2 className="text-purple mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
            <p className="text-xl text-white/70">
              We'll review your request and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-navy/80 to-navy/40 border border-slate/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white focus:outline-none focus:border-purple transition-colors"
                >
                  <option value="">Select a type</option>
                  <option value="ai-automation">AI-Powered Automation</option>
                  <option value="analytics">Building Analytics Dashboard</option>
                  <option value="integration">SkySpark/Niagara Integration</option>
                  <option value="workflow">Smart Workflows</option>
                  <option value="data-connector">Data Connectors</option>
                  <option value="saas">SaaS Tool Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-white font-semibold mb-2">
                Budget Range (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white focus:outline-none focus:border-purple transition-colors"
              >
                <option value="">Select a range</option>
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k-50k">$25K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-midnight border border-slate/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple transition-colors resize-none"
                placeholder="Tell us about your project, challenges, and goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-8 py-4 bg-purple text-white font-semibold rounded-lg hover:bg-purple-light transition-all hover:scale-105 glow-purple flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
