import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="text-white min-h-screen relative">
      {/* Animated background effects */}
      <div className="bg-effects">
        <div className="pulse-circle w-80 h-80 bg-blue-500/10 top-20 left-20" style={{animationDelay: '0s'}}></div>
        <div className="pulse-circle w-96 h-96 bg-purple-500/8 bottom-32 right-16" style={{animationDelay: '1s'}}></div>
        <div className="pulse-circle w-64 h-64 bg-pink-500/12 top-1/3 right-1/3" style={{animationDelay: '2s'}}></div>
        <div className="pulse-circle w-72 h-72 bg-cyan-500/10 bottom-20 left-1/4" style={{animationDelay: '3s'}}></div>
        <div className="pulse-circle w-56 h-56 bg-indigo-500/15 top-10 right-10" style={{animationDelay: '0.5s'}}></div>
        <div className="pulse-circle w-88 h-88 bg-teal-500/8 top-2/3 left-10" style={{animationDelay: '1.5s'}}></div>
        <div className="pulse-circle w-48 h-48 bg-violet-500/12 bottom-1/2 right-1/4" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <Navbar activeSection={activeSection} />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App



