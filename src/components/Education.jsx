const Education = () => {
  const education = [
    {
      degree: "Master of Computer Aided Technologies",
      school: "STU - Slovak University of Technology",
      period: "2019-2022"
    },
    {
      degree: "Bachelor of Computer Aided Technologies",
      school: "STU - Slovak University of Technology",
      period: "2016 - 2019"
    },
    {
      degree: "Computer Systems, IT",
      school: "Secondary School of Electrical Engineering",
      period: "2012 - 2016"
    },
  ]

  return (
    <section 
      id="education" 
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            // Education
          </h2>
          <div className="flex justify-center mb-8">
            <div className="font-mono text-white/30 text-lg">{'<'} degrees: "completed" {'/>'}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className={`group ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className="bg-black/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-black/40 hover:border-white/20 transition-all duration-500 transform hover:scale-102 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium">
                    {edu.period}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">{edu.degree}</h3>
                <h4 className="text-white/70 font-medium mb-6 text-lg">{edu.school}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education











