function Footer() {
  try {
    return (
      <footer className="bg-black/80 backdrop-blur-lg border-t border-gray-800 py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">faizzz</h3>
              <p className="text-gray-400 leading-relaxed">
                Mahasiswa Aktif Universitas Qomaruddin
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Tentang</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-yellow-400 transition-colors">Keahlian</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hubungi Saya</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <div className="icon-mail text-yellow-400 mr-3"></div>
                  <span>muhammadfaizulumam4@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="icon-phone text-yellow-400 mr-3"></div>
                  <span>+62 821-4105-5654</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="icon-map-pin text-yellow-400 mr-3"></div>
                  <span>Gresik City, Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 faizzz. Semua hak cipta dilindungi.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <div className="icon-github text-xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <div className="icon-twitter text-xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <div className="icon-instagram text-xl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}