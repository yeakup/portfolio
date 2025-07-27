import { useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('https://formspree.io/f/mblkgyyo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.target.reset() // Clear the form
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0e1118'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            // Get In Touch
          </h2>
          <div className="flex justify-center mb-8">
            <div className="font-mono text-white/30 text-lg">contact.init()</div>
          </div>
          <p className="text-xl text-white/60 mt-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-white/70 mb-12 leading-relaxed text-lg">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            
            <div className="space-y-8">
              {/* Email */}
              <a 
                href="mailto:jakub.bugyi97@gmail.com"
                className="flex items-center group cursor-pointer hover:bg-white/10 rounded-2xl p-4 -m-4 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-6 border border-white/20">
                  <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white text-lg font-medium">jakub.bugyi97@gmail.com</p>
                </div>
              </a>              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/jakub-bugyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer hover:bg-white/10 rounded-2xl p-4 -m-4 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-6 border border-white/20">
                  <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-sm">LinkedIn</p>
                  <p className="text-white text-lg font-medium">linkedin.com/in/jakub-bugyi</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/jakub.bugyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer hover:bg-white/10 rounded-2xl p-4 -m-4 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-6 border border-white/20">
                  <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-sm">GitHub</p>
                  <p className="text-white text-lg font-medium">github.com/jakub.bugyi</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
            <form 
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name"
                  required
                  disabled={isSubmitting}
                  className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name"
                  required
                  disabled={isSubmitting}
                  className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject"
                required
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
              />
              <textarea 
                rows="6" 
                name="message"
                placeholder="Your Message"
                required
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none disabled:opacity-50"
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white py-4 rounded-2xl font-medium transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:scale-105 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className={`text-sm text-center transition-all duration-300 ${
                submitStatus === 'success' 
                  ? 'text-green-400' 
                  : submitStatus === 'error' 
                  ? 'text-red-400' 
                  : 'text-white/50'
              }`}>
                {submitStatus === 'success' 
                  ? '✓ Message sent successfully! I\'ll get back to you soon.' 
                  : submitStatus === 'error' 
                  ? '✗ Failed to send message. Please try again.' 
                  : 'Your message will be sent directly to my email inbox.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact