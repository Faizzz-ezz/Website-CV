function About({ isDarkMode }) {
  try {
    return (
      <section id="about" className="section-padding bg-black/50" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tentang <span className="gradient-text">Saya</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Kenali lebih dalam tentang latar belakang, keahlian, dan apa yang mendorong passion saya dalam pengembangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-animate-left>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Perjalanan Saya
              </h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Saya adalah pribadi yang disiplin, bertanggung jawab, dan memiliki semangat tinggi 
                dalam menyelesaikan setiap tugas dengan dedikasi penuh. Saya menjunjung tinggi integritas 
                serta komitmen terhadap hasil kerja yang berkualitas, baik saat bekerja secara individu 
                maupun dalam kolaborasi tim. Dengan sikap positif dan proaktif, saya mampu menghadapi 
                tantangan dengan fokus dan ketelitian.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Memiliki pengalaman dalam berbagai organisasi, saya terbiasa bekerja dalam lingkungan 
                yang dinamis dan menuntut koordinasi efektif. Keahlian saya dalam desain grafis dan 
                komunikasi publik mendukung kemampuan untuk menyampaikan ide secara visual maupun verbal 
                dengan jelas dan menarik. Saya juga terampil dalam mengelola informasi dan menyusun 
                strategi komunikasi yang tepat sasaran.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Saya adalah pembelajar yang antusias dan adaptif terhadap perubahan. Bagi saya, 
                setiap kesempatan adalah ruang untuk berkembang dan meningkatkan kompetensi. 
                Dengan motivasi tinggi dan kemauan belajar yang kuat, saya siap memberikan kontribusi 
                terbaik di setiap peran yang saya jalani.
              </p>
            </div>

            <div className="space-y-6" data-animate-right>
              <div className={`p-6 hover-glow hover-scale transition-all duration-300 ${
                isDarkMode 
                  ? 'card-glass' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="icon-code text-yellow-400 text-2xl mr-3"></div>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Development</h4>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  HTML, CSS, JavaScript, PHP, MySQL
                </p>
              </div>

              <div className={`p-6 hover-glow hover-scale transition-all duration-300 ${
                isDarkMode 
                  ? 'card-glass' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="icon-palette text-yellow-400 text-2xl mr-3"></div>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Design</h4>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Canva, CorelDRAW, UI/UX design
                </p>
              </div>

              <div className={`p-6 hover-glow hover-scale transition-all duration-300 ${
                isDarkMode 
                  ? 'card-glass' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="icon-users text-yellow-400 text-2xl mr-3"></div>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kolaborasi / Team</h4>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Kemampuan komunikasi dan kerja tim yang kuat untuk pengiriman proyek yang sukses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}