import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: 'Ade Kurniawan',
  role: {
    id: 'IT Support • Web Development • Data Administration • Human Resources',
    en: 'IT Support • Web Development • Data Administration • Human Resources',
  },
  email: 'adekurniawan21032003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adekurniawan2103',
  whatsapp: '6281367059816',
  github: 'https://github.com/adekurniawan2103',
  location: {
    id: 'Palembang, Sumatera Selatan, Indonesia',
    en: 'Palembang, South Sumatra, Indonesia',
  },
  education: {
    id: 'S1 Sistem Informasi, UIN Raden Fatah Palembang (2022–2026)',
    en: 'Bachelor of Information Systems, UIN Raden Fatah Palembang (2022–2026)',
  },
  gpa: '3.78 / 4.00',
  summary: {
    id: 'Saya lulusan S1 Sistem Informasi dengan pengalaman pengolahan dan validasi data, penyusunan laporan, serta pengembangan sistem informasi melalui magang dan proyek akademik.',
    en: 'Information Systems graduate experienced in data processing, data validation, report generation, and systems development through internships and academic projects.',
  },
  about: {
    id: 'Saya lulusan S1 Sistem Informasi dengan pengalaman pengolahan dan validasi data, penyusunan laporan, serta pengembangan sistem informasi melalui magang dan proyek akademik. Terampil menggunakan Microsoft Excel, Word, PowerPoint, dan Google Workspace untuk mengelola data, dokumen, serta menyajikan informasi. Pengalaman organisasi turut membentuk kemampuan saya dalam administrasi, komunikasi, dan koordinasi kegiatan. Didukung pelatihan Microsoft Office Excel, Word & PowerPoint Specialist serta Google IT Support Professional Certificate, saya tertarik berkontribusi dalam pengelolaan data dan pelayanan administrasi yang akurat, tertib, dan terstruktur.',
    en: 'I am an Information Systems graduate experienced in data processing, data validation, report preparation, and information systems development through internships and academic projects. Skilled in utilizing Microsoft Excel, Word, PowerPoint, and Google Workspace to manage data, handle documentation, and present structured information. Organizational leadership experience has further strengthened my competencies in office administration, communication, and event coordination. Backed by Microsoft Office Specialist (Excel, Word & PowerPoint) training and the Google IT Support Professional Certificate, I am eager to contribute to accurate, orderly, and structured data management and administrative services.',
  },
  interests: {
    id: ['Data Administration', 'System Analysis', 'Database Management', 'IT Support', 'Web Development', 'Human Resources'],
    en: ['Data Administration', 'System Analysis', 'Database Management', 'IT Support', 'Web Development', 'Human Resources'],
  },
  pillars: [
    {
      title: {
        id: 'IT Support & Systems',
        en: 'IT Support & Systems',
      },
      desc: {
        id: 'Troubleshooting hardware, software, konfigurasi jaringan dasar, sistem operasi Windows, dan manajemen pengguna.',
        en: 'Hardware & software troubleshooting, basic network configurations, Windows OS maintenance, and end-user technical support.',
      },
      iconName: 'Server',
    },
    {
      title: {
        id: 'Web Development',
        en: 'Web Development',
      },
      desc: {
        id: 'Membangun aplikasi web responsif, arsitektur MVC, RESTful API, integrasi basis data, dan antarmuka modern.',
        en: 'Building scalable responsive web applications, MVC architecture, RESTful APIs, database schemas, and modern user interfaces.',
      },
      iconName: 'Code',
    },
    {
      title: {
        id: 'Data Administration',
        en: 'Data Administration',
      },
      desc: {
        id: 'Pengolahan dan visualisasi data, formula lanjutan Excel & Spreadsheets, administrasi dokumen, dan database MySQL.',
        en: 'Data processing, advanced spreadsheet modeling, automated reporting, documentation governance, and MySQL querying.',
      },
      iconName: 'Database',
    },
    {
      title: {
        id: 'Human Resources & Leadership',
        en: 'Human Resources & Leadership',
      },
      desc: {
        id: 'Koordinasi tim, talent acquisition, administrasi SDM, kepemimpinan organisasi lebih dari 100 anggota, dan event organizer.',
        en: 'Team leadership of 100+ members, talent development, HR administration metrics, event management, and stakeholder communication.',
      },
      iconName: 'Users',
    },
  ],
  skills: [
    {
      name: {
        id: 'Web Development',
        en: 'Web Development',
      },
      skills: [
        { name: 'Laravel', iconSrc: 'https://cdn.simpleicons.org/laravel/FF2D20', color: '#FF2D20' },
        { name: 'Next.js', iconSrc: 'https://cdn.simpleicons.org/nextdotjs/000000', color: '#000000' },
        { name: 'JavaScript', iconSrc: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
        { name: 'TypeScript', iconSrc: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
        { name: 'PHP', iconSrc: 'https://cdn.simpleicons.org/php/777BB4', color: '#777BB4' },
        { name: 'MySQL', iconSrc: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
        { name: 'HTML & CSS', iconSrc: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
        { name: 'Tailwind CSS', iconSrc: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
        { name: 'Bootstrap', iconSrc: 'https://cdn.simpleicons.org/bootstrap/7952B3', color: '#7952B3' },
      ],
    },
    {
      name: {
        id: 'IT Support & Operasional',
        en: 'IT Support & Operations',
      },
      skills: [
        { name: 'Windows OS', iconSrc: '/images/skills/windows.svg', color: '#0078D6' },
        { name: 'Hardware & Network', iconSrc: 'https://cdn.simpleicons.org/cisco/1BA0D7', color: '#1BA0D7' },
        { name: 'VS Code', iconSrc: '/images/skills/vscode.svg', color: '#007ACC' },
        { name: 'Laragon', iconSrc: '/images/skills/laragon.png', color: '#0E83CD' },
        { name: 'phpMyAdmin', iconSrc: '/images/skills/phpmyadmin.png', color: '#6C78AF' },
        { name: 'Git & GitHub', iconSrc: 'https://cdn.simpleicons.org/github/181717', color: '#181717' },
      ],
    },
    {
      name: {
        id: 'Data & Produktivitas Kantor',
        en: 'Data & Office Productivity',
      },
      skills: [
        { name: 'Microsoft Excel', iconSrc: '/images/skills/excel.svg', color: '#217346' },
        { name: 'Microsoft Word', iconSrc: '/images/skills/word.svg', color: '#2B579A' },
        { name: 'Microsoft PowerPoint', iconSrc: '/images/skills/powerpoint.svg', color: '#D24726' },
        { name: 'Microsoft Office 365', iconSrc: '/images/skills/office.svg', color: '#EB3C00' },
        { name: 'Google Workspace', iconSrc: 'https://cdn.simpleicons.org/google/4285F4', color: '#4285F4' },
        { name: 'Google Sheets', iconSrc: 'https://cdn.simpleicons.org/googlesheets/34A853', color: '#34A853' },
        { name: 'Google Forms & Drive', iconSrc: 'https://cdn.simpleicons.org/googledrive/4285F4', color: '#4285F4' },
      ],
    },
    {
      name: {
        id: 'Desain & Keahlian Pendukung',
        en: 'Design & Supporting Tools',
      },
      skills: [
        { name: 'Figma', iconSrc: 'https://cdn.simpleicons.org/figma/F24E1E', color: '#F24E1E' },
        { name: 'Canva', iconSrc: '/images/skills/canva.png', color: '#00C4CC' },
        { name: 'Human Resource Mgmt', iconSrc: 'https://cdn.simpleicons.org/coursera/0056D2', color: '#0056D2' },
        { name: 'Event Coordination', iconSrc: 'https://cdn.simpleicons.org/trello/0052CC', color: '#0052CC' },
      ],
    },
  ],
  projects: [
    {
      slug: 'batik',
      name: {
        id: 'Sistem Informasi Butik Batik',
        en: 'Batik Boutique E-Commerce System',
      },
      type: {
        id: 'E-commerce & Katalog Digital',
        en: 'E-commerce & Digital Catalog',
      },
      category: 'web',
      year: '2025',
      featured: true,
      description: {
        id: 'Butik batik digital dengan katalog terkurasi, koleksi berdasarkan kategori tradisional dan modern, serta interaksi keranjang belanja yang responsif.',
        en: 'A curated digital boutique storefront featuring categorized collections of traditional and contemporary Indonesian batik with responsive cart interactions.',
      },
      impact: {
        id: 'Menyajikan pengalaman menjelajah produk yang lebih elegan, cepat, dan mudah dipahami pelanggan.',
        en: 'Delivered an elegant, swift, and intuitive customer shopping journey that elevates artisanal boutique branding.',
      },
      stack: ['PHP', 'JavaScript', 'Responsive UI', 'CSS3', 'MySQL'],
      demo: 'http://localhost/batik-modern/',
      coverImage: '/images/projects/gallery/batik/slide-1.png',
      slides: [
        '/images/projects/gallery/batik/slide-1.png',
        '/images/projects/gallery/batik/slide-2.png',
        '/images/projects/gallery/batik/slide-3.png',
      ],
      features: {
        id: [
          'Katalog produk batik dinamis dengan filter motif dan harga',
          'Sistem keranjang belanja lokal responsif dan checkout interaktif',
          'Tampilan mobile-first yang nyaman untuk transaksi smartphone',
          'Manajemen kategori produk dan rincian deskripsi motif batik',
        ],
        en: [
          'Dynamic batik catalog with motif and price filtering',
          'Responsive client-side shopping cart with interactive checkout',
          'Mobile-first layout optimized for seamless smartphone browsing',
          'Category management and rich motif provenance documentation',
        ],
      },
    },
    {
      slug: 'gudang-barang',
      name: {
        id: 'Sistem Informasi Gudang Barcode Kilang Pertamina',
        en: 'Pertamina Refinery Barcode Warehouse System',
      },
      type: {
        id: 'Environment Warehouse Management',
        en: 'Environment Warehouse Management',
      },
      category: 'system',
      year: '2025',
      featured: true,
      description: {
        id: 'Sistem gudang barang environment Kilang Pertamina RU III Plaju dengan pemindaian barcode untuk pencatatan, mutasi, dan pelacakan barang secara real-time.',
        en: 'Enterprise warehouse system for Pertamina RU III Plaju environment unit featuring barcode scanning for fast inventory logging, tracking, and auditing.',
      },
      impact: {
        id: 'Mempercepat identifikasi barang logistik serta menjaga data persediaan gudang tetap tertata rapi dan akurat.',
        en: 'Accelerated logistic item identification and ensured 100% precision in refinery environmental inventory records.',
      },
      stack: ['Laravel', 'MySQL', 'Barcode Integration', 'Bootstrap', 'JavaScript'],
      demo: 'http://localhost/gudang_barang/public',
      coverImage: '/images/projects/gallery/gudang-barang/slide-1.png',
      slides: [
        '/images/projects/gallery/gudang-barang/slide-1.png',
        '/images/projects/gallery/gudang-barang/slide-2.png',
        '/images/projects/gallery/gudang-barang/slide-3.png',
        '/images/projects/gallery/gudang-barang/slide-4.png',
        '/images/projects/gallery/gudang-barang/slide-5.png',
      ],
      features: {
        id: [
          'Pemindaian barcode terintegrasi untuk input dan pencarian cepat inventaris',
          'Pelacakan stok barang masuk, keluar, dan kondisi kelayakan barang',
          'Laporan inventori otomatis yang siap dicetak untuk evaluasi operasional',
          'Hak akses bertingkat untuk staf gudang dan supervisor',
        ],
        en: [
          'Integrated barcode scanning for instant item logging and querying',
          'Real-time tracking of inbound/outbound goods and equipment condition',
          'Automated printable inventory audit reports for management review',
          'Role-based access control for warehouse operators and supervisors',
        ],
      },
    },
    {
      slug: 'mandalagiri-coffee',
      name: {
        id: 'Sistem Informasi Koperasi Kopi Mandalagiri',
        en: 'Mandalagiri Coffee Cooperative Platform',
      },
      type: {
        id: 'Company Profile & Online Store',
        en: 'Company Profile & Online Store',
      },
      category: 'web',
      year: '2026',
      featured: true,
      description: {
        id: 'Website koperasi produsen kopi untuk memperkenalkan identitas lembaga, edukasi budidaya kopi, dan kanal pemasaran produk Kopi Mandalagiri.',
        en: 'Official web platform for a coffee producer cooperative showcasing brand identity, community farming stories, and direct online product store.',
      },
      impact: {
        id: 'Menyatukan informasi profil koperasi dan katalog produk unggulan dalam pengalaman digital yang modern dan mudah diakses pasar luas.',
        en: 'Unified cooperative branding and retail product catalog into an accessible digital presence that expands market reach.',
      },
      stack: ['Laravel', 'Vite', 'Tailwind CSS', 'Alpine.js', 'MySQL'],
      demo: 'http://localhost/mandalagiricoffee/public',
      coverImage: '/images/projects/gallery/mandalagiri-coffee/slide-1.png',
      slides: [
        '/images/projects/gallery/mandalagiri-coffee/slide-1.png',
        '/images/projects/gallery/mandalagiri-coffee/slide-2.png',
        '/images/projects/gallery/mandalagiri-coffee/slide-3.png',
        '/images/projects/gallery/mandalagiri-coffee/slide-4.png',
        '/images/projects/gallery/mandalagiri-coffee/slide-5.png',
      ],
      features: {
        id: [
          'Company profile interaktif dengan kisah petani dan proses pengolahan kopi',
          'Katalog varian biji kopi pilihan (Robusta/Arabika) dengan spesifikasi rasa',
          'Form pemesanan terintegrasi langsung dengan WhatsApp admin koperasi',
          'Desain visual modern dan responsif dengan Tailwind CSS & Vite',
        ],
        en: [
          'Interactive company profile highlighting farmer heritage and coffee processing',
          'Specialty coffee bean catalog with flavor profiles and processing methods',
          'Direct order workflow integrated with cooperative WhatsApp support',
          'Ultra-clean modern visual design built with Tailwind CSS & Vite',
        ],
      },
    },
    {
      slug: 'inventory-system',
      name: {
        id: 'Sistem Informasi Inventori Aset FST UIN',
        en: 'Faculty Asset Inventory Management System',
      },
      type: {
        id: 'Asset Management System',
        en: 'Asset Management System',
      },
      category: 'system',
      year: '2025',
      featured: true,
      description: {
        id: 'Sistem inventori aset Fakultas Sains dan Teknologi UIN Raden Fatah Palembang untuk pencatatan, pencarian, monitoring kondisi, dan riwayat perpindahan aset.',
        en: 'Campus asset management platform for the Faculty of Science & Technology to track equipment conditions, serial numbers, and departmental transfers.',
      },
      impact: {
        id: 'Mendukung tata kelola aset fakultas yang lebih terstruktur, transparan, dan mudah ditelusuri keberadaannya.',
        en: 'Established structured, transparent, and auditable faculty asset management with instant location tracking.',
      },
      stack: ['Laravel 12', 'MySQL', 'Vite', 'Tailwind CSS', 'Blade'],
      demo: 'http://localhost/inventaris-main/public/login',
      coverImage: '/images/projects/gallery/inventory-system/slide-1.png',
      slides: [
        '/images/projects/gallery/inventory-system/slide-1.png',
        '/images/projects/gallery/inventory-system/slide-2.png',
        '/images/projects/gallery/inventory-system/slide-3.png',
        '/images/projects/gallery/inventory-system/slide-4.png',
        '/images/projects/gallery/inventory-system/slide-5.png',
      ],
      features: {
        id: [
          'Pendataan kode registrasi aset fakultas, laboratorium, dan ruang kuliah',
          'Klasifikasi status kondisi aset (Baik, Rusak Ringan, Rusak Berat)',
          'Riwayat peminjaman dan pemindahan barang antar ruangan',
          'Dashboard statistik total nilai dan jumlah aset per jurusan',
        ],
        en: [
          'Standardized asset registration across faculties, labs, and lecture halls',
          'Condition status categorization (Good, Light Damage, Critical Damage)',
          'Complete audit log for equipment borrowing and intra-department transfers',
          'Statistical executive dashboard displaying total assets and condition metrics',
        ],
      },
    },
    {
      slug: 'kilang-ru3',
      name: {
        id: 'Sistem Informasi Peta Monitoring HSSE Pertamina RU III',
        en: 'Pertamina RU III HSSE Coordinate Monitoring Map',
      },
      type: {
        id: 'Monitoring Dashboard & GIS',
        en: 'Monitoring Dashboard & GIS',
      },
      category: 'dashboard',
      year: '2025',
      featured: true,
      description: {
        id: 'Dashboard peta pemantauan HSSE Kilang Pertamina RU III Plaju untuk memantau data lingkungan dan operasional kilang secara spasial dan terpusat.',
        en: 'Interactive GIS and monitoring dashboard for Pertamina Refinery Unit III Plaju HSSE division to track environmental compliance and operations spatially.',
      },
      impact: {
        id: 'Membantu visualisasi data monitoring agar lebih cepat dianalisis dan ditindaklanjuti oleh pimpinan serta tim HSSE lapangan.',
        en: 'Transformed tabular environmental datasets into intuitive spatial insights, cutting response and analysis turnaround times.',
      },
      stack: ['Laravel 12', 'Leaflet.js / Maps', 'MySQL', 'Charts.js', 'Dashboard UI'],
      demo: 'http://localhost/kilang-ru3/public',
      coverImage: '/images/projects/gallery/kilang-ru3/slide-1.png',
      slides: [
        '/images/projects/gallery/kilang-ru3/slide-1.png',
        '/images/projects/gallery/kilang-ru3/slide-2.png',
        '/images/projects/gallery/kilang-ru3/slide-3.png',
        '/images/projects/gallery/kilang-ru3/slide-4.png',
        '/images/projects/gallery/kilang-ru3/slide-5.png',
      ],
      features: {
        id: [
          'Peta interaktif titik koordinat area pemantauan lingkungan kilang',
          'Grafik tren kualitas udara, air limbah, dan emisi berkala',
          'Peringatan otomatis untuk indikator operasional yang mendekati ambang batas',
          'Hasil penelitian dipublikasikan pada Jurnal Nasional terakreditasi SINTA 5',
        ],
        en: [
          'Interactive GIS coordinate mapping of refinery environmental monitoring stations',
          'Dynamic trend charts for periodic air quality, wastewater, and emissions data',
          'Threshold alerts for operational parameters nearing regulatory limits',
          'Research and system methodology published in SINTA 5 accredited national journal',
        ],
      },
    },
    {
      slug: 'academic-information-system',
      name: {
        id: 'Sistem Informasi Akademik Sekolah',
        en: 'School Academic Information System',
      },
      type: {
        id: 'Academic Information System',
        en: 'Academic Information System',
      },
      category: 'management',
      year: '2025',
      description: {
        id: 'Sistem informasi akademik untuk pengelolaan data siswa, guru, rekapitulasi nilai, jadwal pelajaran, dan kebutuhan administrasi pembelajaran.',
        en: 'Integrated academic portal for school administration managing student records, faculty data, grading schedules, and attendance logs.',
      },
      impact: {
        id: 'Mendukung proses administrasi sekolah yang lebih rapi, terpusat, dan terintegrasi antar guru serta staf.',
        en: 'Replaced manual paper ledgers with a centralized, reliable digital database accessible by educators and administration.',
      },
      stack: ['Laravel 8', 'MySQL', 'Laravel Mix', 'Bootstrap', 'JavaScript'],
      demo: 'http://127.0.0.1:8020',
      coverImage: '/images/projects/gallery/academic-information-system/slide-1.png',
      slides: [
        '/images/projects/gallery/academic-information-system/slide-1.png',
        '/images/projects/gallery/academic-information-system/slide-2.png',
        '/images/projects/gallery/academic-information-system/slide-3.png',
        '/images/projects/gallery/academic-information-system/slide-4.png',
        '/images/projects/gallery/academic-information-system/slide-5.png',
      ],
      features: {
        id: [
          'Manajemen data induk siswa, guru, dan kelas terpadu',
          'Input nilai rapor dan kalkulasi otomatis rata-rata prestasi belajar',
          'Penyusunan jadwal mata pelajaran dan rekap kehadiran siswa',
          'Cetak rapor dan laporan statistik akademik format PDF',
        ],
        en: [
          'Centralized master database for students, teachers, and classrooms',
          'Gradebook entry module with automated GPA and ranking calculations',
          'Class timetable scheduler and student attendance tracking',
          'Automated PDF report card generation and academic metrics',
        ],
      },
    },
    {
      slug: 'sibos',
      name: {
        id: 'Sistem Informasi Bioskop (SIBOS)',
        en: 'SIBOS Cinema Management & Booking System',
      },
      type: {
        id: 'Cinema Information & Booking',
        en: 'Cinema Information & Booking',
      },
      category: 'management',
      year: '2025',
      description: {
        id: 'Sistem informasi bioskop untuk mengelola data jadwal film, studio pemutaran, tiket, dan transaksi pemesanan dalam pola arsitektur MVC.',
        en: 'Cinema information system structured in clean MVC pattern for managing movie catalogs, screening halls, showtimes, and ticketing workflows.',
      },
      impact: {
        id: 'Menyediakan alur pengelolaan data bioskop dan simulasi pemesanan tiket yang terstruktur dan mudah dinavigasi pengunjung.',
        en: 'Delivered an organized, modular cinema operational interface and streamlined customer seat reservation experience.',
      },
      stack: ['PHP Native', 'MVC Architecture', 'MySQL', 'CSS3', 'JavaScript'],
      demo: 'http://localhost/sibos/',
      coverImage: '/images/projects/gallery/sibos/slide-1.png',
      slides: [
        '/images/projects/gallery/sibos/slide-1.png',
        '/images/projects/gallery/sibos/slide-2.png',
        '/images/projects/gallery/sibos/slide-3.png',
        '/images/projects/gallery/sibos/slide-4.png',
        '/images/projects/gallery/sibos/slide-5.png',
      ],
      features: {
        id: [
          'Implementasi arsitektur Model-View-Controller (MVC) murni berbasis PHP',
          'Katalog film aktif (Now Playing & Coming Soon) dengan sinopsis & trailer',
          'Manajemen studio dan denah pemilihan kursi interaktif',
          'Perhitungan total tiket dan cetak resi konfirmasi reservasi',
        ],
        en: [
          'Pure PHP Model-View-Controller (MVC) architectural design pattern',
          'Now Playing & Coming Soon movie catalog with synopsis and ratings',
          'Theater hall management and interactive seat map selection',
          'Automated billing calculation and digital ticket receipt generation',
        ],
      },
    },
    {
      slug: 'toko-bangunan',
      name: {
        id: 'Sistem Informasi Toko Material Bangunan',
        en: 'Building Material Sales & Inventory System',
      },
      type: {
        id: 'Sales & Inventory Management',
        en: 'Sales & Inventory Management',
      },
      category: 'system',
      year: '2025',
      description: {
        id: 'Sistem informasi toko bahan bangunan untuk mengelola ribuan kategori material, katalog produk, harga grosir/eceran, serta pengawasan stok harian.',
        en: 'Point-of-sales and inventory platform designed for hardware & building material stores to manage SKU catalogs, dual pricing, and stock alerts.',
      },
      impact: {
        id: 'Membantu pemilik toko memantau perputaran persediaan material dan mengelola transaksi penjualan dalam satu dasbor terpadu.',
        en: 'Equipped store owners with live stock turnover monitoring, preventing stockouts and speeding up daily counter transactions.',
      },
      stack: ['Laravel 11', 'SQLite / MySQL', 'Bootstrap 5', 'DataTables'],
      demo: 'http://localhost/toko-bangunan/public',
      coverImage: '/images/projects/gallery/toko-bangunan/slide-1.png',
      slides: [
        '/images/projects/gallery/toko-bangunan/slide-1.png',
        '/images/projects/gallery/toko-bangunan/slide-2.png',
        '/images/projects/gallery/toko-bangunan/slide-3.png',
        '/images/projects/gallery/toko-bangunan/slide-4.png',
        '/images/projects/gallery/toko-bangunan/slide-5.png',
      ],
      features: {
        id: [
          'Katalog material lengkap (Semen, Cat, Kayu, Besi, Perkakas) dengan foto',
          'Pencatatan kasir penjualan langsung dengan kalkulasi kembalian otomatis',
          'Notifikasi peringatan dini ketika stok produk mencapai batas minimum',
          'Ekspor rekapitulasi penjualan harian dan bulanan ke format spreadsheet',
        ],
        en: [
          'Categorized building material catalog with photos and unit measurements',
          'Rapid Point-of-Sale checkout interface with automatic change computation',
          'Low-stock threshold alerts preventing supply shortages',
          'Exportable daily and monthly revenue reports in spreadsheet formats',
        ],
      },
    },
  ],
  experience: [
    {
      id: 'mandalagiri',
      company: 'Koperasi Produsen Kopi Mandalagiri (KPKM)',
      role: {
        id: 'Web Developer Intern',
        en: 'Web Developer Intern',
      },
      period: {
        id: '15 Juni 2026 – 15 Agustus 2026',
        en: 'June 15, 2026 – August 15, 2026',
      },
      type: {
        id: 'Magang Industri / Koperasi',
        en: 'Industry / Cooperative Internship',
      },
      detail: {
        id: 'Merancang dan mengembangkan website terintegrasi berupa company profile dan toko online untuk memperkenalkan identitas koperasi serta mendukung pemasaran produk Kopi Mandalagiri ke pasar yang lebih luas.',
        en: 'Designed and engineered an integrated web platform combining corporate branding and an online store to boost market awareness and product distribution for Kopi Mandalagiri.',
      },
      highlights: {
        id: [
          'Mengembangkan struktur informasi website, tampilan responsif, katalog produk, dan konten pemasaran digital.',
          'Berkoordinasi intensif dengan pengurus koperasi untuk menggali kebutuhan sistem, menguji fungsionalitas fitur, dan menyesuaikan alur website dengan operasional KPKM.',
          'Menata UI/UX dan arsitektur data agar profil lembaga, lini produk kopi, serta program pemberdayaan petani mudah diakses oleh publik.',
        ],
        en: [
          'Engineered information architecture, responsive user interface, digital product catalogs, and marketing landing pages.',
          'Collaborated closely with cooperative stakeholders to gather requirements, perform user testing, and align digital workflows with daily operations.',
          'Crafted modern UI/UX to ensure seamless public discovery of farmer community initiatives and specialty coffee collections.',
        ],
      },
      photos: [
        '/images/experience/mandalagiri-closing.png',
        '/images/experience/mandalagiri-coordination.jpeg',
        '/images/experience/mandalagiri-zoom-meeting.png',
      ],
      documents: [
        {
          title: {
            id: 'Sertifikat Magang Koperasi Mandalagiri',
            en: 'Mandalagiri Internship Certificate',
          },
          file: '/documents/mandalagiri/sertifikat-magang-ade-kurniawan.pdf',
          preview: '/images/experience/mandalagiri-certificate-1.png',
        },
        {
          title: {
            id: 'Surat Keterangan Magang Koperasi Mandalagiri',
            en: 'Mandalagiri Internship Recommendation Letter',
          },
          file: '/documents/mandalagiri/surat-keterangan-magang-ade-kurniawan.pdf',
          preview: '/images/experience/mandalagiri-letter-1.png',
        },
      ],
    },
    {
      id: 'pertamina',
      company: 'PT Kilang Pertamina Internasional RU III Plaju',
      role: {
        id: 'Web Developer & Data Support Intern',
        en: 'Web Developer & Data Support Intern',
      },
      period: {
        id: 'Juni 2025 – Juli 2025',
        en: 'June 2025 – July 2025',
      },
      type: {
        id: 'Magang BUMN / Energi & Kilang',
        en: 'State-Owned Enterprise / Energy Refinery Internship',
      },
      detail: {
        id: 'Mengolah data lingkungan dan operasional kilang, sekaligus mengembangkan solusi web untuk mendukung monitoring HSSE (Health, Safety, Security, and Environment) dan kebutuhan operasional kilang minyak.',
        en: 'Processed environmental and operational data while building web-based solutions to support HSSE (Health, Safety, Security, & Environment) compliance and daily refinery monitoring.',
      },
      highlights: {
        id: [
          'Mengolah dan memvalidasi data lingkungan serta operasional menggunakan Microsoft Excel formula lanjutan untuk mendukung monitoring dan pelaporan rutin HSSE.',
          'Mengembangkan dashboard peta monitoring berbasis koordinat GIS, sistem inventaris barcode berbasis MySQL, serta dashboard kehadiran untuk lebih dari 20 pengguna aktif.',
          'Berkolaborasi aktif dengan tim HSSE, IT, dan Operasional dalam analisis kebutuhan, pengujian sistem, dan dokumentasi teknis yang dipublikasikan pada Jurnal Nasional terindeks SINTA 5.',
        ],
        en: [
          'Validated and analyzed environmental datasets using advanced Microsoft Excel models to support critical HSSE regulatory reporting.',
          'Engineered a coordinate-based GIS monitoring dashboard, MySQL barcode inventory tracker, and an internal attendance portal for 20+ active operators.',
          'Collaborated with HSSE, IT, and Operations teams to gather specifications and produce research documentation published in a SINTA 5 indexed national journal.',
        ],
      },
      photos: [
        '/images/experience/pertamina/field.jpeg',
        '/images/experience/pertamina/team.jpeg',
        '/images/experience/pertamina/hsse.jpeg',
      ],
      documents: [
        {
          title: {
            id: 'Sertifikat Magang PT Kilang Pertamina Internasional RU III Plaju',
            en: 'PT Kilang Pertamina Internasional RU III Plaju Internship Certificate',
          },
          file: '/documents/pertamina/sertifikat-magang-pertamina.pdf',
          preview: '/images/experience/pertamina-certificate-1.png',
        },
      ],
    },
  ],
  organizations: [
    {
      id: 'genbi',
      organization: 'Generasi Baru Indonesia (GenBI) — Bank Indonesia',
      role: {
        id: 'Staff Divisi Pengabdian Masyarakat',
        en: 'Community Service Division Staff',
      },
      period: {
        id: 'Maret 2024 – Maret 2025',
        en: 'March 2024 – March 2025',
      },
      summary: {
        id: 'Mengoordinasikan peserta, kegiatan lapangan, dan dokumentasi untuk program sosial serta edukasi mitigasi bencana.',
        en: 'Coordinated field operations, volunteer participants, and media documentation for flagship social and disaster relief programs.',
      },
      narrative: {
        id: 'Terpilih sebagai penerima Beasiswa Bank Indonesia bergengsi dan bergabung dalam komunitas Generasi Baru Indonesia (GenBI) pada Divisi Pengabdian Masyarakat. Berkontribusi aktif pada pelaksanaan program unggulan seperti G-Smile, GenBI Keliling, LIKE IT (Literasi Keuangan Indonesia Terdepan), dan tanggap mitigasi bencana melalui koordinasi peserta, pelaksanaan kegiatan lapangan, serta dokumentasi publikasi.',
        en: 'Awarded the prestigious Bank Indonesia Scholarship and served in GenBI’s Community Service Division. Actively organized and executed impactful community initiatives including G-Smile, GenBI Mobile Outreach, LIKE IT financial literacy summits, and disaster relief programs through field coordination and multimedia documentation.',
      },
      folder: 'genbi',
      photos: [
        '/images/organization/genbi/GENBI 1.jpeg',
        '/images/organization/genbi/GENBI 2.jpeg',
        '/images/organization/genbi/GENBI 3.jpeg',
        '/images/organization/genbi/GENBI 4.jpeg',
        '/images/organization/genbi/GENBI 5.jpeg',
        '/images/organization/genbi/WhatsApp Image 2026-07-20 at 01.02.56.jpeg',
        '/images/organization/genbi/WhatsApp Image 2026-07-20 at 01.02.59.jpeg',
      ],
    },
    {
      id: 'empoweru',
      organization: 'EmpowerU Incubation (UNDP, IsDB, Microsoft, Samsara)',
      role: {
        id: 'Koordinator Proyek — Proyek Komunitas Pemuda',
        en: 'Project Coordinator — Community Youth Project',
      },
      period: {
        id: 'April 2026 – Mei 2026',
        en: 'April 2026 – May 2026',
      },
      summary: {
        id: 'Memimpin perencanaan proyek komunitas dan pelaksanaan webinar kepemudaan untuk 50+ peserta.',
        en: 'Led community project planning and executed youth empowerment webinars for 50+ participants.',
      },
      narrative: {
        id: 'Memimpin perencanaan dan pelaksanaan program community mini project melalui delapan kali rapat koordinasi intensif bersama mentor dan tim kerja, dari perumusan konsep hingga evaluasi akhir. Mengoordinasikan webinar bertema Comprehensive Youth Empowerment untuk 50 peserta, mencakup kurasi narasumber, publikasi materi visual di Canva, administrasi peserta, dan dokumentasi terstruktur di Google Drive.',
        en: 'Directed the design and execution of a community initiative over 8 structured sprint meetings with international mentors. Spearheaded the "Comprehensive Youth Empowerment" national webinar for 50+ participants, managing keynote speakers, Canva design assets, participant databases, and Google Drive records.',
      },
      folder: 'empoweru',
      photos: [
        '/images/organization/empoweru/BUKTI FOTO BOOTHCAMP EMPOWERU.png',
        '/images/organization/empoweru/BUKTI FOTO EMPOWERU 3.png',
        '/images/organization/empoweru/BUKTI FOTO EMPOWERU 5.png',
      ],
    },
    {
      id: 'himsi',
      organization: 'Himpunan Mahasiswa Program Studi Sistem Informasi (HMPS SI)',
      role: {
        id: 'Ketua Umum (President of Student Association)',
        en: 'President / General Chairperson',
      },
      period: {
        id: 'April 2024 – Maret 2025',
        en: 'April 2024 – March 2025',
      },
      summary: {
        id: 'Mengelola lebih dari 10 program kerja tahunan bersama 50–100 pengurus dan memimpin Information Systems Festival skala nasional.',
        en: 'Managed 10+ annual work programs with 50–100 committee members and directed the nationwide Information Systems Festival.',
      },
      narrative: {
        id: 'Memimpin organisasi kemahasiswaan tingkat program studi dengan menaungi lebih dari 10 program kerja bersama 50–100 pengurus dan panitia pelaksana. Mengarahkan kesuksesan Information Systems Festival (SI-FEST) berskala nasional untuk 300–400 peserta, menginisiasi rekrutmen terbuka, seminar kepemimpinan mahasiswa, kompetisi teknologi, dan pelatihan web development secara berkala.',
        en: 'Elected General Chairperson to lead the student body association, governing 10+ annual initiatives with 50–100 executives and committee members. Successfully orchestrated the national Information Systems Festival (SI-FEST) welcoming 300–400 delegates, while pioneering web development bootcamps, leadership seminars, and member regeneration.',
      },
      folder: 'himsi',
      photos: [
        '/images/organization/himsi/team.jpeg',
        '/images/organization/himsi/futsal.jpeg',
        '/images/organization/himsi/codeforce.jpeg',
        '/images/organization/himsi/sifest.jpeg',
        '/images/organization/himsi/seminar.jpeg',
        '/images/organization/himsi/handover.jpeg',
        '/images/organization/himsi/oath.jpeg',
      ],
    },
    {
      id: 'bem-fst',
      organization: 'Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi (BEM FST)',
      role: {
        id: 'Staff Ahli Divisi Pengembangan Sumber Daya Manusia (PSDM)',
        en: 'Expert Staff — Human Resources Development Division',
      },
      period: {
        id: 'Maret 2024 – Maret 2025',
        en: 'March 2024 – March 2025',
      },
      summary: {
        id: 'Mengoordinasikan orientasi mahasiswa baru (PBAK) serta mengelola database registrasi digital untuk 300+ mahasiswa.',
        en: 'Coordinated campus freshman orientation (PBAK) and managed digital registration databases for 300+ students.',
      },
      narrative: {
        id: 'Berperan sebagai Koordinator Lapangan pada orientasi mahasiswa baru (PBAK) dengan mengarahkan kepanitiaan, memandu ratusan peserta, dan memastikan kelancaran seluruh rangkaian acara. Turut merancang sistem registrasi serta absensi digital berbasis QR Code untuk lebih dari 100 panitia, serta mengelola basis data dan arsip dokumentasi lebih dari 300 peserta melalui Google Sheets dan Google Drive.',
        en: 'Served as Field Coordinator for the faculty student orientation (PBAK), orchestrating field marshals and coordinating venue readiness. Built a QR-code attendance and registration tracking system on Google Sheets/Drive handling check-ins and documentation for 300+ attendees with zero data loss.',
      },
      folder: 'bem-fst',
      photos: [
        '/images/organization/bem-fst/inauguration.jpeg',
        '/images/organization/bem-fst/pbak.jpeg',
        '/images/organization/bem-fst/coordination.jpeg',
      ],
    },
  ],
  achievements: [
    {
      id: 'leadership-himsi',
      title: {
        id: 'Sertifikat Kepemimpinan Ketua Umum HMPS SI',
        en: 'Distinguished Leadership Award — HMPS SI President',
      },
      institution: 'Himpunan Mahasiswa Program Studi Sistem Informasi',
      year: '2025',
      description: {
        id: 'Pengakuan resmi atas kepemimpinan, tata kelola organisasi, koordinasi program kerja strategis, pengelolaan tim 50-100 pengurus, dan komunikasi organisasi sebagai Ketua Umum HMPS SI.',
        en: 'Official commendation honoring outstanding leadership, governance, team management of 50-100 staff members, and institutional communication as General Chairperson.',
      },
      file: '/documents/achievements/leadership-himsi.pdf',
      preview: '/images/achievements/leadership-himsi-1.jpg',
    },
    {
      id: 'mahasiswa-berprestasi',
      title: {
        id: 'Peraih IPK Tertinggi Program Studi Sistem Informasi (IPK 3,78)',
        en: 'Highest GPA Academic Excellence Award (GPA 3.78)',
      },
      institution: 'UIN Raden Fatah Palembang',
      year: '2026',
      description: {
        id: 'Penghargaan akademik tertinggi atas capaian Indeks Prestasi Kumulatif (IPK 3,78 / 4,00) pada Program Studi Sistem Informasi Fakultas Sains dan Teknologi.',
        en: 'Highest academic distinction awarded for achieving top GPA standing (3.78/4.00) in the Department of Information Systems.',
      },
      file: '/documents/achievements/mahasiswa-berprestasi.pdf',
      preview: '/images/achievements/mahasiswa-berprestasi-1.jpg',
    },
    {
      id: 'juara-web-dev',
      title: {
        id: 'Juara I Lomba Website Development RAFATECH',
        en: '1st Place Winner — RAFATECH Web Development Competition',
      },
      institution: 'UIN Raden Fatah Palembang',
      year: '2025',
      description: {
        id: 'Pencapaian Juara 1 pada kompetisi pengembangan website teknologi melalui perancangan arsitektur, UI/UX interaktif, dan implementasi solusi perangkat lunak yang fungsional.',
        en: 'First place championship in the prestigious RAFATECH web development competition for innovative system architecture, modern UI/UX, and robust software implementation.',
      },
      file: '/documents/achievements/juara-web-development-rafatech.pdf',
      preview: '/images/achievements/juara-web-development-rafatech-1.jpg',
    },
    {
      id: 'pembicara-podcast',
      title: {
        id: 'Pembicara Podcast Inspiratif MIMPI',
        en: 'Keynote Guest Speaker — MIMPI Talkshow Podcast',
      },
      institution: 'Palcomtech OPI Mall',
      year: '2024',
      description: {
        id: 'Diundang sebagai pembicara tamu pada podcast edukatif untuk berbagi wawasan karier teknologi, pengalaman berorganisasi, dan kiat pengembangan diri bagi generasi muda.',
        en: 'Invited as featured podcast speaker to share practical insights on technology careers, organizational leadership, and skill development for youth.',
      },
      file: '/documents/achievements/pembicara-podcast-mimpi.pdf',
      preview: '/images/achievements/pembicara-podcast-mimpi-1.jpg',
    },
    {
      id: 'juara-business-plan',
      title: {
        id: 'Juara II National Business Plan Competition',
        en: '2nd Place Winner — National Business Plan Competition',
      },
      institution: 'Kementerian Agama Republik Indonesia',
      year: '2022',
      description: {
        id: 'Pencapaian kompetisi perencanaan bisnis nasional melalui perumusan gagasan inovasi produk, analisis model bisnis canvas, dan presentasi solusi di hadapan dewan juri.',
        en: 'National business plan competition runner-up for developing comprehensive startup financial models, value propositions, and pitch presentations.',
      },
      file: '/documents/achievements/juara-business-plan.pdf',
      preview: '/images/achievements/juara-business-plan-1.jpg',
    },
  ],
  certificates: [
    {
      id: 'google-it-support',
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google melalui Coursera',
      type: 'IT Support',
      modules: {
        id: 'Troubleshooting perangkat keras & lunak, protokol jaringan komputer, sistem operasi Windows & Linux, administrasi sistem, keamanan informasi dasar, dan layanan dukungan pelanggan IT.',
        en: 'Hardware & software troubleshooting, computer networking protocols (TCP/IP, DNS), Windows & Linux OS administration, security essentials, and IT customer support workflows.',
      },
      file: '/documents/certificates/google-it-support.pdf',
    },
    {
      id: 'hrci-hr',
      title: 'HRCI Professional in Human Resources',
      issuer: 'HRCI (Human Resource Certification Institute) via Coursera',
      type: 'Human Resources',
      modules: {
        id: 'Talent acquisition, workforce planning, employee engagement, kompensasi & tunjangan, HR analytics & metrics, kepatuhan hukum ketenagakerjaan, dan manajemen hubungan industrial.',
        en: 'Talent acquisition, strategic workforce planning, employee engagement, compensation & benefits, HR metrics, labor law compliance, and employee relations management.',
      },
      file: '/documents/certificates/hrci-professional-human-resources.pdf',
    },
    {
      id: 'office-bootcamp',
      title: 'Bootcamp Microsoft Office: Excel, Word & PowerPoint',
      issuer: 'Karir Nex',
      type: 'Data Administration',
      modules: {
        id: 'Microsoft Excel tingkat lanjut untuk pengolahan formula & pivot table, Microsoft Word untuk penyusunan laporan korporat terstandar, dan PowerPoint untuk presentasi bisnis eksekutif.',
        en: 'Advanced Microsoft Excel data modeling and pivot formulas, executive Word document standard styling, and high-impact PowerPoint pitch presentations.',
      },
      file: '/documents/certificates/microsoft-office-excel-word-powerpoint.pdf',
    },
    {
      id: 'excel-karirnex',
      title: 'Microsoft Excel Data Processing Specialist',
      issuer: 'Karir Nex',
      type: 'Data Administration',
      modules: {
        id: 'Pengolahan dataset besar, fungsi VLOOKUP/XLOOKUP, INDEX-MATCH, visualisasi data grafik, conditional formatting, dan otomatisasi laporan terstruktur.',
        en: 'Large dataset analysis, XLOOKUP/VLOOKUP functions, INDEX-MATCH combinations, automated chart visualization, and corporate report synthesis.',
      },
      file: '/documents/certificates/microsoft-excel-karirnex.pdf',
    },
    {
      id: 'hr-bootcamp',
      title: 'Bootcamp Human Resources Management',
      issuer: 'Karir Nex / PT Ebiz Karisma Internasional',
      type: 'Human Resources',
      modules: {
        id: 'Manajemen siklus rekrutmen (end-to-end), teknik wawancara berbasis kompetensi (STAR method), analisis jabatan (job description & specification), dan perencanaan kebutuhan SDM.',
        en: 'End-to-end recruitment lifecycle, competency-based behavioral interviewing (STAR method), job analysis formulation, and HR headcount planning.',
      },
      file: '/documents/certificates/bootcamp-human-resources.pdf',
    },
    {
      id: 'digital-marketing-ai',
      title: 'Digital Marketing with AI Certification',
      issuer: 'Karir Nex',
      type: 'Digital Marketing',
      modules: {
        id: 'Strategi pemasaran konten berbasis data, segmentasi audiens digital, optimasi SEO/SEM, kampanye media sosial, dan integrasi Artificial Intelligence untuk copy & analytics.',
        en: 'Data-driven content marketing, audience segmentation, SEO/SEM strategies, social media campaign optimization, and generative AI utilization for growth.',
      },
      file: '/documents/certificates/digital-marketing-ai-karirnex.pdf',
    },
    {
      id: 'empoweru-batch1',
      title: 'EmpowerU Incubation Batch 1 (Youth Leadership)',
      issuer: 'UNDP Indonesia, Islamic Development Bank, Microsoft & Samsara Indonesia',
      type: 'Leadership & Project',
      modules: {
        id: 'Pengembangan kepemimpinan adaptif, kolaborasi tim lintas disiplin, perancangan proyek inovasi komunitas, manajemen anggaran, dan eksekusi program pemberdayaan pemuda.',
        en: 'Adaptive leadership development, cross-functional team collaboration, community project framework design, and sustainable impact monitoring.',
      },
      file: '/documents/certificates/empoweru-incubation-batch-1.pdf',
    },
    {
      id: 'samsara-project-leader',
      title: 'Certified Project Leader & Event Chairperson',
      issuer: 'Samsara Indonesia',
      type: 'Leadership & Project',
      modules: {
        id: 'Metodologi manajemen proyek, mitigasi risiko kegiatan, koordinasi narasumber & peserta, kepemimpinan tim, serta evaluasi pasca-event.',
        en: 'Project management lifecycles, operational risk mitigation, stakeholder coordination, team leadership, and post-event reporting.',
      },
      file: '/documents/certificates/samsara-project-leader.pdf',
    },
    {
      id: 'brin-training',
      title: 'Pelatihan Riset & Inovasi BRIN',
      issuer: 'Badan Riset dan Inovasi Nasional (BRIN)',
      type: 'Research & Innovation',
      modules: {
        id: 'Metodologi riset terapan, etika penelitian ilmiah, penyusunan proposal inovasi teknologi, dan pemanfaatan data untuk memecahkan persoalan riil.',
        en: 'Applied research methodologies, scientific inquiry ethics, technology innovation proposals, and empirical problem solving with open datasets.',
      },
      file: '/documents/certificates/sertifikat-brin.pdf',
    },
    {
      id: 'toefl',
      title: 'TOEFL English Proficiency Certification',
      issuer: 'Lembaga Penyelenggara Resmi TOEFL',
      type: 'Language',
      modules: {
        id: 'Kompetensi bahasa Inggris profesional meliputi Listening Comprehension, Structure & Written Expression, serta Reading Comprehension untuk lingkungan kerja global.',
        en: 'Comprehensive English language proficiency spanning listening comprehension, grammar structure, written communication, and analytical text comprehension.',
      },
      file: '/documents/certificates/toefl.pdf',
    },
  ],
};
