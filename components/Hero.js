function Hero({ isDarkMode }) {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-name="hero" data-file="components/Hero.js">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 gradient-gold rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-center md:text-left">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-shadow ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Halo, Saya <span className="gradient-text">Muhammad Faizul Umam</span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mahasiswa Aktif Universitas Qomaruddin
              </p>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                "Kemampuan bisa diasah, tetapi konsistensi dan tekad adalah kunci sejati menuju keberhasilan."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a href="#portfolio" className="btn-gold">
                  Lihat Karya Saya
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Hubungi Saya
                </a>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <div className="icon-github text-2xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <div className="icon-linkedin text-2xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <div className="icon-twitter text-2xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <div className="icon-message-circle text-2xl"></div>
                </a>
              </div>
            </div>

            {/* Photo - Right Side */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={document.querySelector('[data-hero]').src} 
                  alt="faizzz"
                  className="w-96 h-96 object-cover rounded-2xl border-4 border-yellow-400 shadow-2xl"
                />
                <div className="absolute -inset-4 gradient-gold rounded-2xl opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
