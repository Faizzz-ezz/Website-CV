function Contact({ isDarkMode }) {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('');
      
      try {
        // Get existing messages from localStorage
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        
        // Create new message
        const newMessage = {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'unread',
          createdAt: new Date().toISOString()
        };
        
        // Add new message to the beginning of array
        existingMessages.unshift(newMessage);
        
        // Save back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" className="section-padding bg-black/50" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hubungi <span className="gradient-text">Saya</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Mari berdiskusi bagaimana kita bisa bekerja sama, dan tinggalkan saran atau masukan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Hubungi Saya</h3>
                <p className={`leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  Saya selalu terbuka untuk peluang kerja baru, kolaborasi profesional, 
                  atau diskusi lebih lanjut mengenai pengalaman dan keahlian saya. 
                  Jangan ragu untuk menghubungi saya melalui kontak di bawah ini. 
                  Saya siap merespons dengan cepat dan profesional.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="icon-mail text-yellow-400 text-xl mr-4"></div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>muhammadfaizulumam4@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="icon-phone text-yellow-400 text-xl mr-4"></div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Telepon</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>+62 821-4105-5654</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="icon-map-pin text-yellow-400 text-xl mr-4"></div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Lokasi</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Gresik City, Jawa Timur, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
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
                  <div className="icon-instagram text-2xl"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <div className="icon-message-circle text-2xl"></div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 hover-glow transition-all duration-300 ${
              isDarkMode 
                ? 'card-glass' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg'
            }`} data-animate-right>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kirim Pesan</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 animate-slide-in-up">
                  <div className="flex items-center">
                    <div className="icon-check-circle text-lg mr-2"></div>
                    <span>Terima kasih! Pesan Anda berhasil dikirim. Saya akan segera menghubungi Anda kembali.</span>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 animate-slide-in-up">
                  <div className="flex items-center">
                    <div className="icon-alert-circle text-lg mr-2"></div>
                    <span>Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi saya langsung melalui email.</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-600 text-white' 
                          : 'bg-gray-100 border border-gray-300 text-gray-900'
                      }`}
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-600 text-white' 
                          : 'bg-gray-100 border border-gray-300 text-gray-900'
                      }`}
                      placeholder="email.anda@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Saran</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-600 text-white' 
                        : 'bg-gray-100 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="Pertanyaan Proyek"
                  />
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-600 text-white' 
                        : 'bg-gray-100 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="Ceritakan tentang proyek Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-gold flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <div className="icon-send text-lg mr-2"></div>
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
