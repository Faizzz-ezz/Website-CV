function Header({ isDarkMode, toggleTheme, onAdminClick }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
      { name: 'Beranda', href: '#home' },
      { name: 'Tentang', href: '#about' },
      { name: 'Keahlian', href: '#skills' },
      { name: 'Pengalaman', href: '#experience' },
      { name: 'Pendidikan', href: '#education' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Kontak', href: '#contact' }
    ];

    return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-white/80 backdrop-blur-lg border-b border-gray-200'
      }`} data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold gradient-text`}>
                faizzz
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 hover:text-yellow-400 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                <div className={`${isDarkMode ? 'icon-sun' : 'icon-moon'} text-xl`}></div>
              </button>

              <button
                onClick={() => {
                  const password = prompt('Masukkan password admin:');
                  if (password === window.AppConfig.ADMIN_PASSWORD) {
                    onAdminClick();
                  } else if (password !== null) {
                    alert('Password salah!');
                  }
                }}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                <div className="icon-settings text-xl"></div>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                <div className={`${isMenuOpen ? 'icon-x' : 'icon-menu'} text-xl`}></div>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors duration-300 hover:text-yellow-400 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}