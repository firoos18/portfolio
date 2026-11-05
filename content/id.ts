import type { Dictionary } from "./types";

export const id: Dictionary = {
  meta: {
    title: "Naufal Firoos – Full-stack engineer",
    description:
      "Full-stack engineer di Yogyakarta. Antarmuka, API, data, dan infrastruktur: lima sistem yang dikerjakan dari ujung ke ujung.",
    ogAlt: "Naufal Firoos, full-stack engineer – portofolio lembar survei",
  },
  nav: {
    work: "Karya",
    about: "Tentang",
    experience: "Pengalaman",
    contact: "Kontak",
    skip: "Lompat ke konten",
    home: "Beranda",
    primary: "Navigasi utama",
    language: "Bahasa",
  },
  hero: {
    name: "Naufal Firoos Asy Syarif",
    role: "Full-stack engineer",
    location: "Yogyakarta, Indonesia",
    datumLabel: "Datum",
    datumValue: "Sistem Informasi, Universitas Ahmad Dahlan",
    sheetLabel: "Lembar",
    sheetValue: "Portofolio / 2026",
    statement:
      "Saya membangun sistem dari antarmuka sampai klaster tempat sistem itu berjalan, dan mencatat keputusan yang menyatukan keduanya.",
    availability: "Kerja full-stack dan platform, dari antarmuka sampai klaster.",
    primary: "Baca survei",
    links: [
      { label: "Email", href: "mailto:itsfiroos@gmail.com" },
      { label: "GitHub", href: "https://github.com/firoos18", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
        external: true,
      },
    ],
    traverseCaption: "Lima stasiun, satu traverse: antarmuka, API, data, infrastruktur.",
  },
  work: {
    heading: "Karya pilihan",
    intro:
      "Lima sistem, masing-masing dikerjakan dari ujung ke ujung. Buka lembarnya untuk batasan, keputusan, dan bagian yang sengaja belum selesai.",
    open: "Buka lembar",
    stackLabel: "Stack",
    earlierHeading: "Karya sebelumnya",
    earlier: [
      {
        name: "SILAB",
        note: "Manajemen kelas untuk laboratorium Sistem Informasi",
        href: "https://github.com/firoos18/silab",
      },
      {
        name: "Teman Tanam",
        note: "Aplikasi Android pendamping petani; capstone Bangkit 2023",
        href: "https://github.com/firoos18/Capstone-Project",
      },
      {
        name: "Sehatin",
        note: "Aplikasi pemesanan makanan diet",
        href: "https://github.com/firoos18/sehatin",
      },
      {
        name: "Rentzy",
        note: "Aplikasi sewa motor",
        href: "https://github.com/firoos18/Rentzy",
      },
    ],
  },
  about: {
    heading: "Tentang",
    paragraphs: [
      "Saya membangun perangkat lunak ketika antarmuka, API, dan model data harus sepakat. Di Berijalan Technocenter itu berarti platform tanda tangan digital: alur penandatanganan kontrak dari awal sampai akhir, verifikasi identitas, SSO dan MFA perusahaan, serta aplikasi React Native untuk surveyor lapangan yang mengambil foto dan lokasi di lokasi kerja.",
      "Sebelumnya saya menempuh jalur mobile: Flutter dan Kotlin di Bangkit Academy dan IDCamp. Mobile mengajarkan saya memperlakukan antarmuka sebagai rangkaian keadaan yang dilalui seseorang, bukan kumpulan komponen yang ditempel di halaman. Kebiasaan itu terbawa ke Next.js dan React.",
      "Di luar pekerjaan saya membangun sisa stack-nya: layanan .NET dan PostgreSQL, alat trading Python, dan homelab k3s yang dikelola Argo CD. Studi kasus di bawah adalah tentang sambungan antar bagian itu: bagaimana state machine menjadi baris di layar, bagaimana email gagal menjadi percobaan ulang, bagaimana deploy menjadi sebuah commit.",
    ],
  },
  experience: {
    heading: "Pengalaman",
    intro: "Peran yang relevan dengan karya di atas, terbaru lebih dulu.",
    roles: [
      {
        period: "Feb 2025 – Sekarang",
        title: "Full Stack Developer",
        org: "Berijalan Technocenter",
        note: "Platform tanda tangan digital dengan Next.js, Express.js, PostgreSQL, dan Docker; verifikasi identitas, SSO, dan MFA. Membangun aplikasi survei lapangan React Native dan NestJS dengan foto, geolokasi, dan push notification. Sebelumnya: migrasi aplikasi lama ke Next.js dan Express, atomic design.",
      },
      {
        period: "Okt 2023 – Apr 2024",
        title: "Multi-Platform App Developer",
        org: "IDCamp",
        note: "Jalur belajar Flutter melalui Dicoding: tiga kursus, penilaian bintang lima dan empat.",
      },
      {
        period: "Feb 2023 – Jul 2023",
        title: "Mobile Developer",
        org: "Bangkit Academy",
        note: "Android dengan Kotlin; capstone Teman Tanam, aplikasi pendamping petani.",
      },
    ],
    educationLabel: "Pendidikan",
    education: {
      period: "Agu 2020 – Des 2024",
      title: "Sarjana, Sistem Informasi",
      org: "Universitas Ahmad Dahlan",
      note: "IPK 3.85. Rekayasa perangkat lunak, algoritma, pengembangan mobile, dan UI/UX.",
    },
  },
  skills: {
    heading: "Keahlian",
    intro: "Dikelompokkan berdasarkan bukti, bukan logo.",
    groups: [
      {
        label: "Antarmuka",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "React Native",
          "Expo",
          "Tailwind CSS",
          "Flutter",
          "Kotlin / Jetpack Compose",
        ],
      },
      {
        label: "API & data",
        items: [
          "NestJS",
          "Express.js",
          "Node.js",
          "C# / .NET 10",
          "ASP.NET Core",
          "Python",
          "PostgreSQL",
          "PL/pgSQL",
          "MongoDB",
          "Firebase",
        ],
      },
      {
        label: "Infrastruktur",
        items: [
          "Docker",
          "k3s",
          "Argo CD",
          "Traefik",
          "Helm",
          "Kustomize",
          "GitHub Actions",
          "Woodpecker",
        ],
      },
      {
        label: "Praktik",
        items: [
          "SSO / MFA",
          "HTML Canvas",
          "Firebase Cloud Messaging",
          "xUnit",
          "Playwright",
          "GitOps",
          "Aksesibilitas",
        ],
      },
    ],
  },
  languages: {
    heading: "Bahasa",
    items: [
      { name: "Indonesia", level: "Native" },
      { name: "Inggris", level: "Limited working" },
      { name: "Deutsch", level: "A1" },
    ],
  },
  contact: {
    heading: "Kontak",
    body: "Email adalah cara tercepat menghubungi saya. Kirim masalah, batasan, dan tenggatnya; saya akan membalas dengan apa yang bisa saya kerjakan.",
    emailLabel: "itsfiroos@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/firoos18" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
      },
    ],
  },
  footer: {
    note: "Portofolio Naufal Firoos Asy Syarif.",
    built: "Dibangun dengan Next.js. Konten ada di version control, bukan CMS.",
    backToTop: "Kembali ke atas",
  },
  caseStudy: {
    back: "Semua karya",
    problem: "Masalah",
    constraints: "Batasan",
    system: "Sistem",
    decisions: "Keputusan",
    tradeoff: "Tradeoff",
    evidence: "Bukti",
    status: "Status",
    previous: "Stasiun sebelumnya",
    next: "Stasiun berikutnya",
    stack: "Stack",
    role: "Peran",
    year: "Tahun",
  },
  details: {
    "e-signature": {
      name: "Platform tanda tangan digital",
      summary: "Penandatanganan kontrak dari awal sampai akhir, dari verifikasi identitas sampai dokumen bertanda tangan.",
      role: "Full-stack developer",
      problem:
        "Penandatanganan kontrak berpindah antara kertas, email, dan penyimpanan. Platform ini membuat alurnya digital: siapkan kontrak, verifikasi penanda tangan, tangkap tanda tangan, dan simpan catatan yang bisa diaudit, di web maupun di lapangan.",
      constraints: [
        "SSO dan MFA yang dikelola perusahaan, ditambah penyedia verifikasi identitas pihak ketiga.",
        "Tanda tangan digambar di browser dan harus bekerja dengan mouse, trackpad, dan sentuhan.",
        "Aplikasi survei lapangan membutuhkan foto, geolokasi, dan push notification.",
        "Penyedia identitas yang ada harus terintegrasi tanpa membuat login kedua.",
      ],
      system: [
        {
          title: "Web",
          body: "Next.js di klien, Express.js di API, PostgreSQL untuk kontrak dan tanda tangan, Docker untuk lingkungan yang identik.",
        },
        {
          title: "Identitas",
          body: "Verifikasi identitas pihak ketiga berdampingan dengan SSO dan MFA perusahaan. Autentikasi terpusat; alur penandatanganan tidak pernah memiliki password.",
        },
        {
          title: "Penangkapan tanda tangan",
          body: "Permukaan HTML Canvas merekam tanda tangan yang digambar dan mengirimkannya bersama kontrak, sehingga penanda tangan tidak perlu mengunggah hasil pindai.",
        },
        {
          title: "Aplikasi lapangan",
          body: "React Native untuk surveyor, NestJS untuk API-nya. Foto, geolokasi, dan Firebase Cloud Messaging menjaga kerja lapangan dan kantor dalam satu catatan.",
        },
      ],
      decisions: [
        {
          title: "Gambar tanda tangannya, jangan unggah",
          body: "Penangkapan lewat Canvas mengikat tanda tangan ke sesi penandatanganan dan menghapus langkah unggah berkas.",
          tradeoff: "Penanganan input di pointer, sentuhan, dan stylus butuh pengujian sendiri.",
        },
        {
          title: "Identitas terpusat, tanpa akun lokal",
          body: "SSO dan MFA tetap di penyedia identitas perusahaan; platform hanya mengonsumsi hasilnya.",
          tradeoff: "Platform mewarisi setiap gangguan dan perubahan kebijakan penyedia itu.",
        },
        {
          title: "Satu API untuk web dan lapangan",
          body: "NestJS melayani aplikasi mobile sementara Express.js menjaga kontrak API web yang sudah ada.",
          tradeoff: "Dua framework Node dalam satu produk; batasnya harus tetap disengaja.",
        },
        {
          title: "Docker sejak commit pertama",
          body: "Setiap layanan berjalan dalam bentuk container yang sama secara lokal dan saat deployment.",
          tradeoff: "Build image menambah langkah di setiap perubahan dependensi.",
        },
      ],
      status: "Platform di Berijalan Technocenter. Basis kode privat.",
      evidence: [
        {
          label: "Profil LinkedIn",
          href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
        },
      ],
    },
    tempo: {
      name: "Tempo",
      summary: "Pencatatan waktu, persetujuan, dan invoice untuk studio kecil, dalam satu ruang kerja.",
      role: "Desain dan pembangunan",
      problem:
        "Freelancer dan agensi mencatat jam di satu alat, menyetujuinya di alat lain, dan membuat invoice dari alat ketiga. Tempo menyambung lingkaran itu: proyek, tugas, timesheet, persetujuan, invoice, dan portal klien dalam satu tempat.",
      constraints: [
        "Pemisahan arsitektur harus mempertahankan setiap route, status code, dan bentuk JSON.",
        "Riwayat migrasi tetap linear; tidak ada penulisan ulang migrasi yang sudah rilis.",
        "Izin multi-workspace dengan pemeriksaan server-side di setiap endpoint.",
        "Satu target deploy: klaster k3s homelab, disajikan melalui satu ingress.",
      ],
      system: [
        {
          title: "API",
          body: ".NET 10 minimal API yang dibagi menjadi Domain, Shared, Application, Infrastructure, dan Api. Aturan bisnis berupa static class dengan unit test; handler memakai EF Core langsung, tanpa lapisan repository.",
        },
        {
          title: "Data dan job",
          body: "PostgreSQL dengan migrasi EF Core yang dijalankan saat startup di balik advisory lock. Outbox dispatcher menangani email; overdue sweep menandai invoice. Persetujuan timesheet adalah state machine, bukan sekadar kolom status.",
        },
        {
          title: "Klien",
          body: "Next.js 15 App Router dengan React 19, Tailwind v4, dan primitif Radix. Portal klien dan ruang kerja internal berbagi komponen, tetapi tidak berbagi izin.",
        },
      ],
      decisions: [
        {
          title: "Aturan di static class, bukan service",
          body: "Total invoice, pembulatan waktu, dan state machine tugas adalah fungsi murni. Integration test mencakup kontrak HTTP; unit test mencakup aritmetika dan transisi.",
          tradeoff: "Lebih sedikit indirection, tetapi handler harus tetap tipis atau aturan bocor ke dalamnya.",
        },
        {
          title: "Outbox, bukan email langsung",
          body: "Penulisan menyimpan pesan dalam transaksi yang sama dengan perubahan bisnis. Dispatcher mencoba ulang di luar request.",
          tradeoff: "Satu tabel dan background worker tambahan untuk dioperasikan.",
        },
        {
          title: "Satu workspace per request",
          body: "CurrentWorkspace diselesaikan sekali dan diwajibkan di setiap endpoint. Tidak ada tenant ambien di koneksi database.",
          tradeoff: "Setiap query harus membawa predikat workspace; test menegakkannya.",
        },
        {
          title: "Migrasi saat startup",
          body: "Advisory lock PostgreSQL menyerialkan migrasi di antara replika. Deploy tetap satu langkah.",
          tradeoff: "Migrasi yang buruk menjatuhkan API; lock hanya mencegah balapan.",
        },
      ],
      status: "Target deployment: klaster k3s homelab. Repositori privat.",
      evidence: [
        { label: "Repositori privat" },
        { label: "Profil GitHub", href: "https://github.com/firoos18" },
      ],
    },
    "dms-platform": {
      name: "DMS Platform",
      summary: "Situs publik, CMS, dan platform pembelajaran untuk bisnis pelatihan.",
      role: "Desain dan pembangunan",
      problem:
        "Sebuah bisnis pelatihan menjalankan situs publik, katalog kursus, dan data peserta di tempat terpisah. Platform ini menyatukannya: satu situs publik, satu CMS untuk editor, dan dashboard pembelajaran untuk peserta.",
      constraints: [
        "Tiga peran dengan visibilitas berbeda: editor, reviewer, dan administrator.",
        "Rich text disimpan sebagai TipTap JSON dan disanitasi saat disimpan maupun saat dirender.",
        "Konten Indonesia dan Inggris dari record yang sama.",
        "Pembayaran di luar cakupan rilis pertama; model data harus menyisakan ruang untuk itu.",
      ],
      system: [
        {
          title: "API",
          body: ".NET 10 modular monolith dengan modul Identity, Content, Catalog, dan Learning. ASP.NET Identity dengan JWT berumur pendek dan refresh token berotasi; FluentValidation pada setiap input.",
        },
        {
          title: "Konten",
          body: "PostgreSQL 17 untuk konten terstruktur, MinIO untuk media dengan presigned URL. Section landing, banner, artikel, dan record kursus berbagi satu audit trail.",
        },
        {
          title: "Klien",
          body: "Next.js 16 untuk situs publik, CMS admin, dan dashboard peserta. Primitif shadcn/ui dengan struktur komponen atomik; security header diatur di konfigurasi Next.",
        },
      ],
      decisions: [
        {
          title: "Modular monolith, bukan microservice",
          body: "Satu deployable dengan batas modul yang eksplisit. Content dan Learning bisa diekstrak nanti tanpa mengubah kontrak API.",
          tradeoff: "Disiplin modul ditegakkan lewat review, bukan lewat jaringan.",
        },
        {
          title: "Sanitasi dua kali",
          body: "TipTap JSON disanitasi saat disimpan dan lagi saat dirender. Konten tersimpan tidak pernah dipercaya.",
          tradeoff: "Render lebih mahal; record yang tercemar tidak bisa mencapai pembaca.",
        },
        {
          title: "Admin hanya desktop",
          body: "CMS mengasumsikan ruang kerja 1440px dan meruntuhkan rail menjadi ikon. Situs publik dan dashboard peserta responsif.",
          tradeoff: "Editor tidak bisa menerbitkan dari ponsel; permukaan editing tetap terbaca.",
        },
        {
          title: "Hanya DTO",
          body: "Tidak ada entity yang melewati batas HTTP. Overposting mustahil secara konstruksi.",
          tradeoff: "Lebih banyak kode mapping per fitur.",
        },
      ],
      status: "MVP dalam pengerjaan. Repositori privat.",
      evidence: [{ label: "Repositori privat" }],
    },
    bericuan: {
      name: "Bericuan",
      summary: "Engine crypto futures multi-strategi dengan dashboard pemantauan.",
      role: "Desain dan pembangunan",
      problem:
        "Menjalankan beberapa strategi Binance USDT-M futures di satu host, dengan kontrol risiko yang bertindak sebelum strategi, dan dashboard yang menunjukkan kerja engine tanpa backend kedua.",
      constraints: [
        "Hanya pustaka standar Python: tanpa requests, pandas, atau numpy.",
        "Satu proses host dengan event bus in-process.",
        "Testnet secara default; strategi tidak bisa mengirim order sebelum lolos validity gate.",
        "Dokumentasi hanya di docs/, dengan aturan indeks per folder.",
      ],
      system: [
        {
          title: "Engine",
          body: "Event bus menghubungkan screener, pelacak open interest, strategi, executor, dan risk manager. Signal, entry, exit, reject, dan error adalah event terpisah dengan batas eksepsi.",
        },
        {
          title: "Venue",
          body: "Panggilan REST bertanda tangan dan tidak bertanda tangan ke Binance Futures, dengan Cloudflare DNS-over-HTTPS dan IP pinning untuk bertahan dari gangguan DNS ISP. Stream kline tersambung ulang dengan exponential backoff.",
        },
        {
          title: "Risiko dan eksekusi",
          body: "Circuit breaker pada drawdown, batas posisi, kendala satu posisi global, cooldown, dan sizing volatility-parity. Order place-first reduceOnly stop-loss dan take-profit, dengan rollback saat gagal.",
        },
        {
          title: "Dashboard",
          body: "Next.js 15 App Router untuk login API Binance multi-pengguna, posisi, signal, dan kesehatan engine. Engine tetap satu-satunya sumber kebenaran.",
        },
      ],
      decisions: [
        {
          title: "Pustaka standar, bukan pandas",
          body: "Indikator dan sizing ditulis langsung terhadap list dan dict. Permukaan dependensi tetap kecil dan bisa di-deploy di host Python mana pun.",
          tradeoff: "Lebih banyak kode yang harus dirawat; iterasi riset lebih lambat.",
        },
        {
          title: "Validity gate sebelum promosi",
          body: "Strategi harus lolos enam lapisan gate riset sebelum masuk daftar strategi live.",
          tradeoff: "Sebagian besar ide tidak pernah rilis; yang rilis bisa diukur.",
        },
        {
          title: "Satu strategi live",
          body: "Engine bisa menjalankan beberapa, tetapi hanya satu yang aktif di testnet. Yang lain ditutup secara empiris dan disimpan sebagai bukti.",
          tradeoff: "Permukaan yang kurang mengesankan, operasi yang lebih jujur.",
        },
      ],
      status: "Testnet, satu strategi live. Repositori privat.",
      evidence: [
        { label: "Repositori privat" },
        {
          label: "Subset dashboard publik",
          href: "https://github.com/firoos18/signaldash",
        },
      ],
    },
    "homelab-gitops": {
      name: "Homelab GitOps",
      summary: "GitOps untuk klaster yang menjalankan karya lainnya.",
      role: "Desain dan operasi",
      problem:
        "Proyek-proyek membutuhkan tempat berjalan yang berperilaku seperti produksi: deploy yang reproducible, ingress, secret di luar repositori, dan jalur rollback yang tidak bergantung pada ingatan.",
      constraints: [
        "Satu klaster k3s di perangkat rumah.",
        "Tidak ada secret di Git.",
        "Setiap aplikasi bisa di-deploy dari sebuah commit, bukan dari sesi terminal.",
      ],
      system: [
        {
          title: "Klaster",
          body: "k3s dengan Traefik sebagai ingress controller. Namespace memisahkan layanan platform dari aplikasi.",
        },
        {
          title: "Pengiriman",
          body: "Argo CD memantau repositori. Helm chart untuk layanan pihak ketiga, overlay Kustomize untuk konfigurasi per aplikasi.",
        },
        {
          title: "Bootstrap",
          body: "Direktori bootstrap memasang Argo CD dan menyerahkan klaster ke Git. Setelah itu, perubahan datang sebagai commit.",
        },
      ],
      decisions: [
        {
          title: "Git sebagai satu-satunya sumber kebenaran",
          body: "Perubahan manual lewat kubectl dianggap drift. Argo CD merekonsiliasinya.",
          tradeoff: "Commit yang buruk cepat mencapai klaster; review adalah gerbangnya.",
        },
        {
          title: "Helm untuk upstream, Kustomize untuk milik sendiri",
          body: "Chart pihak ketiga tetap dekat dengan upstream. Overlay aplikasi tetap kecil dan terbaca.",
          tradeoff: "Dua alat templating untuk dipahami.",
        },
        {
          title: "Satu ingress, banyak host",
          body: "Aplikasi berbagi Traefik dan dipisahkan berdasarkan host dan namespace.",
          tradeoff: "Satu kesalahan konfigurasi ingress memengaruhi semuanya.",
        },
      ],
      status: "Klaster homelab dikelola melalui Argo CD. Repositori privat.",
      evidence: [{ label: "Repositori privat" }],
    },
  },
};
