import { useState } from 'react'

const Navbar = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false) // close menu on link click
  }

  const navItems = [
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'education', label: 'education' },
    { id: 'contact', label: 'contact' }
  ]

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Blurred circle effect for navbar */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/12 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full filter blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Empty left space for balance */}
          <div className="w-20"></div>
          
          {/* Centered navigation buttons (desktop only) */}
          <div className="hidden md:flex space-x-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 border ${
                  activeSection === item.id 
                    ? 'bg-white/15 backdrop-blur-xl border-white/30 text-white shadow-lg' 
                    : 'text-white/30 hover:text-white hover:bg-white/5 backdrop-blur-xl border-white/20 hover:border-white/30'
                }`}
              >
                {activeSection === item.id ? `// ${item.label}` : item.label}
              </button>
            ))}
          </div>

          {/* Burger icon for mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} className="text-white">
              <path d="M6 9h16M6 15h16" />
            </svg>
          </button>

          {/* Social icons on the right */}
          <div className="flex space-x-3">
            <a 
              href="https://linkedin.com/in/jakub-bugyi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/jakubbugyi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl py-4 flex flex-col items-center space-y-2 z-50">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-11/12 px-4 py-3 rounded-full text-base font-normal transition-all duration-300 border ${
                  activeSection === item.id 
                    ? 'bg-white/15 backdrop-blur-xl border-white/30 text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/5 backdrop-blur-xl border-white/20 hover:border-white/30'
                }`}
              >
                {activeSection === item.id ? `// ${item.label}` : item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar














