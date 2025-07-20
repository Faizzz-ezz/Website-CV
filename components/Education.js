function Education({ isDarkMode }) {
  try {
    const educations = [
      {
        degree: 'S1 Teknik Informatika',
        institution: 'Universitas Qomaruddin',
        period: '2023 - Sekarang',
        level: 'Universitas',
        description: 'Spesialis Rekayasa Perangkat Lunak dan Kecerdasan Buatan. Lulus dengan predikat Magna Cum Laude.',
        achievements: ['GPA: 3.9/4.0', 'Presiden BEM', 'Ketua DPM'],
        icon: 'icon-graduation-cap',
        color: 'from-blue-500 to-purple-600'
      },
      {
        degree: 'Sekolah Menengah Atas',
        institution: 'SMA Assaadah',
        period: '2019 - 2022',
        level: 'SMA',
        description: 'Fokus pada Matematika dan Sains. Anggota aktif Klub Komputer dan Tim Robotika.',
        achievements: ['Anggota OSIS', 'Pondok Pesantren Qomaruddin', 'Pemenang kompetisi robotika'],
        icon: 'icon-book-open',
        color: 'from-green-500 to-teal-600'
      },
      {
        degree: 'Sekolah Menengah Pertama',
        institution: 'MTS Al Mukarromin',
        period: '2016 - 2019',
        level: 'SMP',
        description: 'Keunggulan dalam bidang akademis dengan kekuatan khusus dalam Matematika dan Teknologi.',
        achievements: ['Siswa Berprestasi', 'Ketua OSIS', 'Peserta Olimpiade Matematika'],
        icon: 'icon-users',
        color: 'from-orange-500 to-red-600'
      },
      {
        degree: 'Sekolah Dasar',
        institution: 'MI Infarul Ghoyyi',
        period: '2010 - 2016',
        level: 'SD',
        description: 'Tahun-tahun dasar dengan kinerja yang kuat di semua mata pelajaran dan minat awal terhadap teknologi.',
        achievements: ['Siswa Berprestasi', 'Juara Pidato Bahasa Arab', 'Peserta Olimpiade Matematika'],
        icon: 'icon-star',
        color: 'from-pink-500 to-rose-600'
      }
    ];

    return (
      <section id="education" className="section-padding bg-black/30" data-name="education" data-file="components/Education.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="gradient-text">Pendidikan</span> Saya
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Perjalanan akademik dan pencapaian pendidikan yang membentuk karir saya
            </p>
          </div>

          <div className="grid gap-8">
            {educations.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon and Level */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-lg`}>
                      <div className={`${edu.icon} text-white text-2xl`}></div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{edu.level}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-xl p-6 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600' 
                      : 'bg-gradient-to-r from-white/80 to-gray-50/80 border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                        <h4 className="text-lg text-blue-400 mb-2">{edu.institution}</h4>
                      </div>
                      <div className="flex items-center bg-blue-600/20 px-3 py-1 rounded-full">
                        <div className="icon-calendar text-blue-400 text-sm mr-2"></div>
                        <span className="text-blue-400 text-sm font-medium">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{edu.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className={`flex items-center px-3 py-2 rounded-lg ${
                          isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'
                        }`}>
                          <div className="icon-trophy text-yellow-400 text-sm mr-2"></div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}
