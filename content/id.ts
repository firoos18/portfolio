import type { Dictionary } from "./types";

export const id: Dictionary = {
  meta: {
    title: "Naufal Firoos – Full-stack developer",
    description:
      "Full-stack developer di Yogyakarta. Antarmuka, API, data, dan infrastruktur di bawahnya: platform gym, platform pelatihan, dan alat pencatat waktu yang dikerjakan dari ujung ke ujung.",
  },
  nav: {
    work: "Karya",
    about: "Tentang",
    process: "Proses",
    articles: "Tulisan",
    experience: "Pengalaman",
    contact: "Kontak",
    skip: "Lompat ke konten",
    home: "Beranda",
    primary: "Navigasi utama",
    language: "Bahasa",
    menu: "Menu",
    close: "Tutup",
  },
  hero: {
    firstName: "Naufal",
    lastName: "Firoos",
    name: "Naufal Firoos Asy Syarif",
    role: "Full-stack developer",
    basedLabel: "Berbasis di",
    location: "Yogyakarta, Indonesia",
    timeLabel: "Waktu lokal",
    disciplinesLabel: "Bidang",
    disciplines: ["Antarmuka", "API", "Data", "Infrastruktur", "Mobile"],
    motto: "Saya percaya pada proses.",
    statement:
      "Hampir lima tahun berlatih di gym mengajarkan bahwa progres datang dari terus hadir, dan saya membangun perangkat lunak dengan cara yang sama: dari antarmuka sampai klaster tempat ia berjalan.",
    cta: "Kirim email",
    portraitAlt: "Potret Naufal Firoos",
  },
  about: {
    heading: "Tentang",
    lead: "Saya membangun sistem ketika antarmuka, API, dan model data harus sepakat. Belakangan saya juga me-review apa yang ditulis agen AI sebelum ada yang dirilis.",
    paragraphs: [
      "Di Berijalan Technocenter saya mengerjakan platform tanda tangan digital: alur penandatanganan kontrak dari awal sampai akhir, verifikasi identitas, SSO dan MFA perusahaan, serta aplikasi React Native untuk surveyor lapangan yang mengambil foto dan lokasi di lokasi kerja.",
      "Saat ini saya sedang melakukan R&D tentang alur kerja pengembangan berbasis AI dengan Claude Code dan omp. Tujuannya satu rantai yang tersambung, dari perencanaan dan manajemen proyek sampai implementasi dan pengujian end-to-end, tempat agen menyusun draf dan saya me-review di setiap serah terima: saya menulis brief, menetapkan batasan, membaca setiap diff, dan memutuskan apa yang di-merge. Tujuannya bukan mengetik lebih sedikit, melainkan menjaga standar arsitektur, keamanan, dan aksesibilitas yang sama ketika jumlah kode terus bertambah. Aplikasi member Infinity Gym dan portofolio ini sama-sama dibangun dengan cara itu.",
      "Bersama teman-teman saya menjalankan drunkcode.dev, sebuah studio perangkat lunak kecil. Di sanalah platform Infinity Gym dibangun, dan di sana pula saya mengerjakan proyek klien.",
      "Sebelumnya saya menempuh jalur mobile: Flutter dan Kotlin di Bangkit Academy dan IDCamp. Mobile mengajarkan saya memperlakukan antarmuka sebagai rangkaian keadaan yang dilalui seseorang, bukan kumpulan komponen yang ditempel di halaman. Kebiasaan itu terbawa ke Next.js dan React.",
      "Di luar pekerjaan saya membangun sisa stack-nya: layanan .NET dan PostgreSQL, alat trading Python, dan homelab k3s yang dikelola Argo CD. Studi kasus di bawah adalah tentang sambungan antar bagian itu: bagaimana membership menjadi state machine, bagaimana email gagal menjadi percobaan ulang, bagaimana deploy menjadi sebuah commit.",
      "Di luar layar, saya sudah berlatih secara konsisten hampir lima tahun, dan saya sedang belajar bahasa Jerman. Keduanya berjalan dengan aturan yang sama seperti pekerjaan: sesi kecil, diulang, dan diukur terhadap diri saya tahun lalu, bukan terhadap orang lain.",
    ],
  },
  work: {
    heading: "Karya pilihan",
    intro:
      "Tiga sistem yang dikerjakan dari ujung ke ujung. Setiap studi kasus membahas batasan, keputusan, dan bagian yang sengaja belum selesai.",
    open: "Baca studi kasus",
    live: "Deployment dev",
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
  process: {
    heading: "Cara saya bekerja",
    intro: "Urutan yang sama di setiap proyek, entah layar pertamanya sudah ada atau belum, dan entah kodenya ditulis manusia atau agen.",
    steps: [
      {
        title: "Model",
        body: "Mulai dari data dan keadaan yang dilaluinya. Membership, timesheet, dan kursus adalah state machine sebelum menjadi layar.",
      },
      {
        title: "Kontrak",
        body: "Tetapkan bentuk API sejak awal: satu envelope respons, error bertipe, dan izin yang dicek di server untuk setiap request.",
      },
      {
        title: "Antarmuka",
        body: "Bangun layar di atas kontrak itu. Saat API tertinggal, klien berjalan dengan layanan mock berbentuk sama, jadi menggantinya cukup mengubah isi fungsi.",
      },
      {
        title: "Review",
        body: "Agen kini menyusun banyak bagian kode. Setiap perubahan dibaca terhadap brief, kontrak, dan test sebelum di-merge; tidak ada yang dirilis berdasarkan kepercayaan saja.",
      },
      {
        title: "Rilis",
        body: "Container sejak commit pertama, migrasi yang berjalan saat deploy, dan klaster yang mengambil keadaannya dari Git.",
      },
    ],
  },
  experience: {
    heading: "Pengalaman",
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
          "Pengembangan dan review berbantuan AI",
          "Claude Code",
          "omp",
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
    heading: ["Mari bekerja", "bersama"],
    body: "Saya terbuka untuk peran full-time dan proyek freelance, sendiri maupun bersama drunkcode.dev. Email adalah cara tercepat menghubungi saya: kirim masalah, batasan, dan tenggatnya, dan saya akan membalas dengan apa yang bisa saya kerjakan.",
    email: "itsfiroos@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/firoos18" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/" },
    ],
  },
  articles: {
    heading: "Tulisan",
    intro: "Catatan dari sistem-sistem di situs ini: keputusannya, harganya, dan apa yang akan saya ubah.",
    latest: "Tulisan terbaru",
    all: "Semua artikel",
    read: "Baca artikel",
    back: "Semua artikel",
    published: "Terbit",
    updated: "Diperbarui",
    minutes: "menit baca",
    tags: "Tag",
    feed: "Feed RSS",
    empty: "Belum ada artikel.",
    metaTitle: "Tulisan",
    metaDescription: "Artikel Naufal Firoos tentang membangun sistem full-stack: .NET, Next.js, PostgreSQL, infrastruktur, dan me-review kode yang ditulis AI.",
  },
  footer: {
    note: "Dibangun dengan Next.js. Konten ada di version control.",
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
    screens: "Layar",
    previous: "Sebelumnya",
    next: "Proyek berikutnya",
    stack: "Stack",
    role: "Peran",
    year: "Tahun",
    type: "Jenis",
  },
  details: {
    "infinity-gym": {
      name: "Infinity Gym",
      category: "Platform · API, admin, aplikasi member",
      summary: "Manajemen gym: API .NET, CMS admin, aplikasi member mobile-first, dan landing page dua bahasa.",
      role: "Co-founder dan developer, drunkcode.dev",
      problem:
        "Sebuah gym mengelola membership, cuti membership, kelas, personal training, loker, pembayaran, dan check-in. Staf butuh satu permukaan admin untuk semuanya, dan member butuh satu aplikasi di ponsel, bukan meja resepsionis dan thread chat.",
      constraints: [
        "Satu model domain untuk member, langganan, pembayaran, kehadiran, dan training, bahkan ketika API belum membukanya.",
        "Sesi harus bisa dicabut: keluar atau mengganti password mengakhiri akses di semua perangkat, bukan saat token kedaluwarsa.",
        "Menu admin digerakkan oleh izin, jadi staf hanya melihat yang diizinkan perannya.",
        "Aplikasi member harus mencakup setiap alur di desain sebelum API-nya tersedia, dan dibangun oleh agen AI, sehingga setiap perubahan perlu di-review terhadap desain dan kontrak API.",
      ],
      system: [
        {
          title: "API",
          body: "Modular monolith .NET 10 dengan modul Admin dan Members di atas satu domain bersama dan satu DbContext PostgreSQL. Controller tipis, service konkret, exception bertipe yang dipetakan oleh handler global.",
        },
        {
          title: "Auth",
          body: "Access dan refresh token JWT di cookie HttpOnly, dengan kebenaran sesi di Redis: sesi aktif, refresh token yang di-hash, dan daftar hitam ID token yang dicabut. Izin berupa policy string yang dicek per endpoint.",
        },
        {
          title: "CMS admin",
          body: "Next.js 16 dan React 19 dengan design system berbasis token sendiri. Setiap modul backend dipetakan ke satu vertical slice: page, organism, hook, wrapper TanStack Query, dan service API di sisi server.",
        },
        {
          title: "Aplikasi member dan landing",
          body: "Aplikasi member Next.js mobile-first yang mencakup onboarding, QR check-in, kelas, personal training, loker, dan pembayaran membership, dibangun di atas layanan mock dengan bentuk respons API. Landing page memakai Next.js dengan next-intl, bahasa Indonesia lebih dulu.",
        },
      ],
      decisions: [
        {
          title: "Modular monolith, satu database",
          body: "Dua modul, satu host, satu DbContext. Modul tidak saling mereferensikan; keduanya hanya bertemu di domain bersama.",
          tradeoff: "Batas dijaga oleh referensi proyek dan review, bukan oleh jaringan.",
        },
        {
          title: "Redis memegang sesi",
          body: "Token membuktikan identitas; Redis memutuskan apakah sesinya masih ada. Mencabut sesi cukup menghapus key, tanpa menunggu kedaluwarsa.",
          tradeoff: "Setiap request terautentikasi bergantung pada Redis yang menyala.",
        },
        {
          title: "Satu slice per modul backend",
          body: "CMS mencerminkan API: satu folder per modul dengan tiga file service yang sama. Endpoint baru punya tempat yang jelas.",
          tradeoff: "Lebih banyak file per fitur, dan bentuknya harus dijaga bahkan untuk layar kecil.",
        },
        {
          title: "Mock dulu, bentuk sama",
          body: "Layanan aplikasi member mengembalikan bentuk respons API dari store bersama di browser, sehingga layar dan state bisa selesai sebelum endpoint-nya ada.",
          tradeoff: "Belum ada yang tersimpan; pekerjaan integrasi masih di depan.",
        },
        {
          title: "Dibangun agen, di-review manusia",
          body: "Saya mengarahkan omp, sebuah agen AI untuk coding, membangun aplikasi member dari frame desain: saya menulis brief per modul, me-review setiap perubahan, dan menjaganya tetap sesuai bentuk respons API dan state di desain.",
          tradeoff: "Review menjadi titik sempit, dan brief harus presisi; brief yang kabur menghasilkan layar yang meyakinkan tapi salah.",
        },
      ],
      status:
        "Dibangun di drunkcode.dev; dalam pengembangan. Auth, menu, dan member sudah berjalan di API; langganan, pembayaran, kehadiran, dan training ada sebagai entitas dan seed data; aplikasi member berjalan dengan layanan mock. Repositori privat.",
      evidence: [{ label: "Repositori privat" }],
    },
    "dms-platform": {
      name: "DMS Platform",
      category: "Platform · Situs publik, CMS, LMS",
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
      status: "MVP dalam pengerjaan, berjalan di deployment dev. Repositori privat.",
      evidence: [
        { label: "Deployment dev: dev-dms.byros.dev", href: "https://dev-dms.byros.dev" },
        { label: "Repositori privat" },
      ],
    },
    tempo: {
      name: "Tempo",
      category: "Produk · API dan aplikasi web",
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
      status: "Berjalan di deployment dev dari klaster k3s homelab. Screenshot memakai workspace demo. Repositori privat.",
      evidence: [
        { label: "Deployment dev: dev-tempo.byros.dev (perlu masuk)", href: "https://dev-tempo.byros.dev" },
        { label: "Repositori privat" },
        { label: "Profil GitHub", href: "https://github.com/firoos18" },
      ],
    },
  },
};
