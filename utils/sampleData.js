// Initialize sample data if localStorage is empty
function initializeSampleData() {
  try {
    const existingMessages = localStorage.getItem('contactMessages');
    
    if (!existingMessages || JSON.parse(existingMessages).length === 0) {
      const sampleMessages = [
        {
          id: '1',
          name: 'Ahmad Rahman',
          email: 'ahmad.rahman@email.com',
          subject: 'Pertanyaan tentang Web Development',
          message: 'Halo faizzz, saya tertarik dengan karya portfolio Anda. Saya ingin menanyakan tentang layanan pengembangan website untuk bisnis saya. Bisakah kita diskusi lebih lanjut?',
          status: 'unread',
          createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
        },
        {
          id: '2',
          name: 'Sarah Putri',
          email: 'sarah.putri@company.com',
          subject: 'Kolaborasi Proyek UI/UX',
          message: 'Hi! Saya Sarah dari PT Digital Solutions. Kami sedang mencari UI/UX designer untuk proyek mobile app. Apakah Anda tertarik untuk berkolaborasi?',
          status: 'read',
          createdAt: new Date(Date.now() - 172800000).toISOString() // 2 days ago
        },
        {
          id: '3',
          name: 'Budi Santoso',
          email: 'budi.santoso@startup.id',
          subject: 'Penawaran Freelance Project',
          message: 'Selamat siang faizzz, saya Budi dari startup teknologi. Kami membutuhkan developer untuk membuat platform e-commerce. Budget tersedia dan timeline 3 bulan. Mohon responnya.',
          status: 'unread',
          createdAt: new Date(Date.now() - 259200000).toISOString() // 3 days ago
        }
      ];
      
      localStorage.setItem('contactMessages', JSON.stringify(sampleMessages));
    }
  } catch (error) {
    console.error('Error initializing sample data:', error);
  }
}

// Call initialization when script loads
initializeSampleData();