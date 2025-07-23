const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0e1118'
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <img 
              src= {`url('${import.meta.env.BASE_URL}avatar.png')`}
              alt="Jakub Bugyi" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            />
          </div>

          <>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight font-mono">
              Hi, I am <strong>Jakub Bugyi</strong><span style={{
                animation: "blink 1s infinite",
                color: "white",
                fontSize: "1em"
              }}>|</span>
            </h1>

            <style>
              {`
                @keyframes blink {
                  0%, 100% { opacity: 1 }
                  50% { opacity: 0 }
                }
              `}
            </style>
          </>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light tracking-wide">
            I build and test your apps!
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light px-4" style={{ color: '#6A9955' }}>
            /* Passionate software developer/QA engineer with expertise in modern web technologies.
            I create beautiful, functional, and user-friendly applications that solve real-world problems. */
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <button 
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 sm:px-8 py-3 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:border-white/30 active:scale-95"
            >
              View My Work
            </button>
            <button className="w-full sm:w-auto bg-black/20 backdrop-blur-xl border border-white/10 text-white/90 px-6 sm:px-8 py-3 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 hover:bg-black/30 hover:border-white/20 active:scale-95 opacity-50 cursor-not-allowed" disabled>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About






















