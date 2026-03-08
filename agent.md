# PROMPT: Pembuatan Landing Page "CCIT Venture Studio" (Astro.js & Tailwind)

**Peran Anda:** Senior Frontend Developer.
**Tujuan:** Membantu saya (Lead Backend Engineer) membangun website resmi untuk program "CCIT Venture Studio". Website ini akan di-host di GitHub Pages dan berfungsi sebagai showcase produk mahasiswa.

### 1. Spesifikasi Tech Stack & Style
- **Framework:** Astro.js (Latest) & Tailwind CSS.
- **Tema:** Light Mode (Minimalis, Profesional, Industrial Tech).
- **Palet Warna:** - Background: `slate-50`
    - Text Utama: `slate-900`
    - Accent: `indigo-600`
    - Card: `white` dengan border `slate-200` & shadow tipis.
- **Typography:** Sans-serif (Inter/Geist) untuk body, Monospace (JetBrains Mono) untuk elemen teknis/tag.

### 2. Struktur Halaman & Konten
Buatkan draf struktur untuk halaman berikut:
1. **Home:** Hero section dengan tagline "Building the next generation of digital founders". Tambahkan section singkat tentang visi Venture Studio (Inkubasi, bukan sekadar kuliah).
2. **Showcases:** Grid kartu proyek. Setiap kartu wajib menampilkan: Nama Produk, Tagline, Badge Jurusan (FSD/ISA/DCM), dan Status "In-Incubation".
3. **Mentors:** Profil Lead Mentor (Lead Backend Engineer) dan Strategic Advisor (Manajer Akademik).
4. **Batches:** Daftar riwayat program (Batch 1: Maret - Agustus 2026).

### 3. Kebutuhan Teknis (Output yang Diminta)
Tolong berikan:
1. **Struktur Folder:** Berikan struktur folder Astro yang modular. Gunakan **Astro Content Collections** untuk data di halaman Showcases agar data-driven (berbasis file .md atau .json).
2. **Tailwind Config:** Berikan isi `tailwind.config.mjs` yang sudah mencakup custom colors di atas.
3. **Komponen Reusable:** - `Navbar.astro` (Sticky & Minimalis).
    - `ProjectCard.astro` (Komponen kartu proyek yang elegan dengan hover effect).
4. **Main Layout:** `Layout.astro` sebagai pembungkus utama semua halaman.
5. **Deployment Hint:** Settingan `astro.config.mjs` untuk GitHub Pages agar aset (CSS/JS) tidak broken saat dideploy ke `username.github.io/repo-name/`.

Tolong berikan kode yang clean, modern, dan mudah saya kembangkan sebagai basis organisasi GitHub CCIT Venture Studio.

