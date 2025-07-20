function Skills({ isDarkMode }) {
  try {
    const skills = [
      { name: 'HTML', level: 97, icon: 'icon-code' },
      { name: 'CSS', level: 90, icon: 'icon-palette' },
      { name: 'JavaScript', level: 80, icon: 'icon-zap' },
      { name: 'PHP', level: 80, icon: 'icon-server' },
      { name: 'Canva', level: 96, icon: 'icon-image' },
      { name: 'UI/UX Design', level: 80, icon: 'icon-figma' }
    ];

    return (
      <section id="skills" className="section-padding" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="gradient-text">Keahlian</span> Saya
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Gambaran komprehensif tentang keahlian teknis dan tingkat kompetensi saya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`p-6 hover-glow hover-scale transition-all duration-300 ${
                isDarkMode 
                  ? 'card-glass hover:bg-white/20' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-gray-50/80'
              }`} data-animate-up>
                <div className="flex items-center mb-4">
                  <div className={`${skill.icon} text-yellow-400 text-2xl mr-3`}></div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className={`flex justify-between text-sm mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    <span>Kemampuan</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="gradient-gold h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Teknologi yang Saya Gunakan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'HTML', icon: 'icon-code', color: 'text-orange-500' },
                { name: 'CSS', icon: 'icon-palette', color: 'text-blue-500' },
                { name: 'JavaScript', icon: 'icon-zap', color: 'text-yellow-500' },
                { name: 'PHP', icon: 'icon-server', color: 'text-purple-500' },
                { name: 'MySQL', icon: 'icon-database', color: 'text-orange-600' },
                { name: 'GitHub', icon: 'icon-github', color: isDarkMode ? 'text-gray-300' : 'text-gray-800' },
                { name: 'Figma', icon: 'icon-figma', color: 'text-purple-400' },
                { name: 'Canva', icon: 'icon-image', color: 'text-blue-300' },
                { name: 'CorelDRAW', icon: 'icon-pen-tool', color: 'text-red-600' }
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className={`backdrop-blur-sm p-4 rounded-xl border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-yellow-400 hover:bg-gray-700/50' 
                      : 'bg-white/50 border-gray-300 hover:border-yellow-400 hover:bg-gray-100/50'
                  }`}
                >
                  <div className={`${tech.icon} ${tech.color} text-3xl mb-2 group-hover:scale-110 transition-transform duration-300`}></div>
                  <span className={`text-sm font-semibold group-hover:text-yellow-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}