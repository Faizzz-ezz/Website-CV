function Portfolio({ isDarkMode }) {
  try {
    const projects = [
      {
        title: 'Platform E-Commerce',
        description: 'Solusi e-commerce full-stack dengan React, Node.js, dan MongoDB',
        image: document.querySelector('[data-portfolio-1]').src,
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/Faizzz-ezz'
      },
      {
        title: 'Aplikasi Manajemen Tugas',
        description: 'Tool manajemen proyek kolaboratif dengan update real-time',
        image: document.querySelector('[data-portfolio-2]').src,
        technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
        liveUrl: 'https://example-taskmanager.com',
        githubUrl: 'https://github.com/Faizzz-ezz'
      },
      {
        title: 'Website Portofolio',
        description: 'Website portofolio responsif dengan desain modern dan animasi',
        image: document.querySelector('[data-portfolio-3]').src,
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://example-portfolio.com',
        githubUrl: 'https://github.com/Faizzz-ezz'
      },
      {
        title: 'Dashboard Cuaca',
        description: 'Aplikasi cuaca real-time dengan peta interaktif dan prediksi',
        image: document.querySelector('[data-portfolio-4]').src,
        technologies: ['JavaScript', 'API Integration', 'Chart.js'],
        liveUrl: 'https://example-weather.com',
        githubUrl: 'https://github.com/Faizzz-ezz'
      }
    ];

    return (
      <section id="portfolio" className="section-padding" data-name="portfolio" data-file="components/Portfolio.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="gradient-text">Portofolio</span> Saya
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Showcase proyek terbaru dan pencapaian teknis saya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`overflow-hidden hover-glow hover-scale transition-all duration-300 group ${
                isDarkMode 
                  ? 'card-glass hover:bg-white/20' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-gray-50/80'
              }`} data-animate-fade>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
                      >
                        Demo Langsung
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                      >
                        Kode
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Ingin melihat lebih banyak karya saya?</p>
            <a 
              href="https://github.com/Faizzz-ezz" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Lihat Semua Proyek
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    return null;
  }
}