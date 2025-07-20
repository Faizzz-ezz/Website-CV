function Experience({ isDarkMode }) {
  try {
    const experiences = [
      {
        title: 'Staff Menteri KOMINFO',
        company: 'BEM Universitas Qomaruddin',
        period: '2024 - 2025',
        description: 'Sebagai Staff Menteri Kominfo BEM, saya membantu dalam pembuatan dan pengelolaan konten informasi kegiatan BEM, serta mendukung penyebaran informasi melalui media sosial dan platform digital kampus. Saya juga terlibat dalam desain pamflet, pengeditan visual, dan dokumentasi kegiatan untuk memastikan komunikasi organisasi berjalan efektif dan menarik.',
      },
      {
        title: 'Koordinator Biro Media dan Informasi',
        company: 'PMII Rayon FT Bintang Timur',
        period: '2024 - 2025',
        description: 'Sebagai Koordinator Biro Media dan Informasi PMII, saya bertanggung jawab mengelola konten visual dan publikasi organisasi. Saya rutin membuat dan mengedit pamflet, logo menggunakan Canva dan CorelDRAW. Selain itu, saya mengatur distribusi informasi di media sosial dan memastikan branding organisasi tetap konsisten dan menarik.',
        
      },
      {
        title: 'Sekretaris Umum',
        company: 'PR IPNU Desa Wadak Kidul',
        period: '2024 - 2026',
        description: 'Sebagai Sekretaris Umum IPNU, saya bertanggung jawab dalam administrasi organisasi, menyusun dan mendokumentasikan surat-menyurat, notulen rapat, serta arsip kegiatan. Saya juga berperan dalam koordinasi internal, pengelolaan agenda organisasi, dan memastikan setiap program berjalan sesuai rencana dengan dokumentasi yang tertib dan rapi.',
        
      },
      {
        title: 'Wakil Ketua Pelaksana',
        company: 'Assaadah Campus Expo 2024',
        period: '2024',
        description: 'Sebagai Wakil Ketua Umum atau Wakil Ketua Pelaksana dalam acara Campus Expo, saya bertanggung jawab mendampingi ketua dalam perencanaan dan pelaksanaan kegiatan, mengoordinasikan panitia lintas divisi, serta memastikan seluruh rangkaian acara berjalan lancar. Saya juga terlibat dalam pengambilan keputusan strategis, pengelolaan waktu, dan komunikasi dengan pihak sekolah serta perwakilan kampus peserta.',
        
      },
      {
        title: 'Ketua Umum OSIS',
        company: 'MTS Al Mukarromin',
        period: '2017 - 2018',
        description: 'Sebagai Ketua Umum OSIS, saya memimpin organisasi siswa intra sekolah, mengkordinasikan kegiatan sekolah, menyampaikan aspirasi siswa kepada pihak sekolah, serta berhasil menyelenggarakan berbagai program. Meningkatkan partisipasi siswa dan memperkuat kerja sama antar pengurus OSIS.',
        
      }
    ];

    return (
      <section id="experience" className="section-padding bg-black/50" data-name="experience" data-file="components/Experience.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Pengalaman <span className="gradient-text">Organisasi</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Aktif berkontribusi dalam berbagai kegiatan organisasi, meningkatkan kemampuan kepemimpinan, komunikasi, dan kerja tim. 
              Terbiasa mengelola acara, berkoordinasi lintas divisi, serta mengambil keputusan strategis untuk mencapai tujuan bersama.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-yellow-400 to-orange-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 gradient-gold rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`p-6 transition-all duration-300 ${
                    isDarkMode 
                      ? 'card-glass hover:bg-white/20' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-gray-50/80'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className="icon-briefcase text-yellow-400 text-xl mr-3"></div>
                      <span className="text-yellow-400 text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                    <h4 className="text-lg text-yellow-400 mb-4">{exp.company}</h4>
                    <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}></h5>
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
    console.error('Experience component error:', error);
    return null;
  }
}