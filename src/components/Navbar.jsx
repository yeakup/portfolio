import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-white font-bold text-2xl">MyPortfolio</div>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-white transition"
              onClick={() => scrollToSection(link.name.toLowerCase())}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-4 py-4 space-y-4 absolute w-full left-0 top-16 shadow-2xl rounded-b-2xl animate-fade-in-down">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white/90 text-lg font-medium hover:text-white transition"
              onClick={() => {
                setMenuOpen(false)
                scrollToSection(link.name.toLowerCase())
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
