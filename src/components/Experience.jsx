const Experience = () => {
  const experiences = [
    {
      title: "Principal Software QA Engineer",
      company: "Gen Digital",
      period: "2024 - Present",
      year: "2024",
      technologies: ["Javascript", "Python", "Cypress", "Playwright", "SQL", "HTML", "CSS", "Postman"]
    },
    {
      title: "Senior Software QA Engineer",
      company: "Avast Software",
      period: "2023 - 2024",
      year: "2023",
      technologies: ["Javascript", "Python", "Cypress", "Playwright", "SQL", "HTML", "CSS", "Postman"]
    },
    {
      title: "Software QA Engineer",
      company: "Avast Software",
      period: "2022 - 2023",
      year: "2022",
      technologies: ["Javascript", "Python", "Cypress", "SQL", "HTML", "CSS", "Postman"]
    },
    {
      title: "IT Software/Technology Tester",
      company: "Tatra banka",
      period: "2022 - 2022",
      year: "2022",
      technologies: ["Python", "Robot Framework", "SQL", "HTML", "CSS", "Postman"]
    },
    {
      title: "Internship at IT Department",
      company: "Dell Technologies",
      period: "2019 - 2022",
      year: "2019",
      technologies: ["Python", "SQL", "HTML", "CSS", "Excel"],
      isInternship: true
    }
  ]

  const getTechColor = (tech) => {
    const colors = {
      'Javascript': 'bg-yellow-500/20 border-yellow-400/40 text-yellow-200',
      'Python': 'bg-green-500/20 border-green-400/40 text-green-200',
      'Cypress': 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200',
      'Robot Framework': 'bg-yellow-500/20 border-yellow-400/40 text-yellow-200',
      'Playwright': 'bg-purple-500/20 border-purple-400/40 text-purple-200',
      'SQL': 'bg-blue-500/20 border-blue-400/40 text-blue-200',
      'HTML': 'bg-red-500/20 border-red-400/40 text-red-200',
      'CSS': 'bg-pink-500/20 border-pink-400/40 text-pink-200'
    }
    return colors[tech] || 'bg-white/10 border-white/20 text-white/80'
  }

  return (
    <section 
      id="experience" 
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            // Experience
          </h2>
          <div className="flex justify-center mb-8">
            <div className="font-mono text-white/30 text-sm sm:text-base lg:text-lg">{'{'} work_history: [ ]</div>
          </div>
        </div>
        
        <div className="relative">
          {/* Desktop Timeline - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full opacity-60"></div>
          
          {/* Mobile Timeline - Left side */}
          <div className="lg:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full opacity-60"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-8 sm:mb-12 lg:mb-16 ${
              // Desktop: alternating sides, Mobile: all on right
              'lg:flex lg:items-center ' + (index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end')
            }`}>
              
              {/* Mobile Layout */}
              <div className="lg:hidden flex items-start">
                {/* Year connector - Mobile */}
                <div className="absolute left-8 transform -translate-x-1/2 bg-white/20 backdrop-blur-xl px-2 py-1 rounded-full border border-white/30 text-white font-bold text-xs shadow-lg">
                  {exp.year}
                </div>
                
                {/* Card - Mobile */}
                <div className="ml-16 w-full">
                  <div className={`bg-black/30 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-102 group ${
                    exp.isInternship 
                      ? 'border-2 border-dashed border-white/30 hover:border-white/50' 
                      : 'border border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      {index === 0 ? (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs shadow-lg animate-pulse w-fit">
                          current job
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div className="text-white/60 text-sm font-medium">{exp.period}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{exp.title}</h3>
                    <h4 className="text-white/70 font-medium mb-4">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`backdrop-blur-xl border px-2 py-1 rounded-full text-xs font-medium hover:scale-105 transition-all duration-300 ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block lg:w-5/12" style={{
                [index % 2 === 0 ? 'paddingRight' : 'paddingLeft']: '2rem',
                textAlign: index % 2 === 0 ? 'right' : 'left'
              }}>
                <div className={`bg-black/30 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-102 group ${
                  exp.isInternship 
                    ? 'border-2 border-dashed border-white/30 hover:border-white/50' 
                    : 'border border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    {index === 0 ? (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs shadow-lg animate-pulse">
                        current job
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className="text-white/60 text-sm font-medium">{exp.period}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{exp.title}</h3>
                  <h4 className="text-white/70 font-medium mb-4">{exp.company}</h4>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`backdrop-blur-xl border px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition-all duration-300 ${getTechColor(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Year connector - Desktop */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 text-white font-bold text-sm shadow-lg">
                {exp.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

