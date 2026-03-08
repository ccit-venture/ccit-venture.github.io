# CCIT Venture Studio

Landing page resmi untuk program CCIT Venture Studio - sebuah program inkubasi yang mengubah ide mahasiswa menjadi produk digital yang siap bersaing di pasar.

## Tech Stack

- **Framework**: [Astro.js](https://astro.build/) (Latest)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Inter (body) & JetBrains Mono (technical elements)
- **Hosting**: GitHub Pages

## Fitur

- **Home**: Hero section dengan tagline "Building the next generation of digital founders"
- **Showcases**: Grid kartu proyek dengan data dari Content Collections
- **Mentors**: Profil mentor dengan informasi lengkap
- **Batches**: Riwayat program inkubasi

## Struktur Folder

```
ccit-venture/
├── src/
│   ├── components/          # Komponen reusable
│   │   ├── Navbar.astro
│   │   └── ProjectCard.astro
│   ├── layouts/             # Layout utama
│   │   └── Layout.astro
│   ├── pages/               # Halaman website
│   │   ├── index.astro
│   │   ├── showcases/
│   │   ├── mentors.astro
│   │   └── batches.astro
│   ├── content/             # Content Collections (data-driven)
│   │   ├── config.ts        # Schema definisi
│   │   ├── showcases/       # Data proyek
│   │   ├── mentors/         # Data mentor
│   │   └── batches/         # Data batch
│   └── styles/
│       └── global.css       # Tailwind + custom styles
├── public/                  # Static assets
├── astro.config.mjs         # Konfigurasi Astro
└── README.md
```

## Palet Warna

- **Background**: `slate-50`
- **Text Utama**: `slate-900`
- **Accent**: `indigo-600`
- **Card**: `white` dengan border `slate-200`

## Cara Menjalankan

### Development

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

### Build

```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

## Deployment ke GitHub Pages

Repository ini sudah dikonfigurasi untuk auto-deployment ke GitHub Pages.

### Konfigurasi

**Repository**: `ccit-venture/ccit-venture.github.io` (User Site)

**URL**: https://ccit-venture.github.io

### Setup Awal (Satu Kali)

1. **Push ke GitHub**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin git@github.com:ccit-venture/ccit-venture.github.io.git
    git push -u origin main
    ```

2. **Enable GitHub Pages**:
    - Buka repository di GitHub
    - Pergi ke **Settings** > **Pages**
    - Di bagian "Build and deployment", pilih **Source**: `GitHub Actions`

3. **Verifikasi Deployment**:
    - Buka tab **Actions** di repository
    - Pastikan workflow "Deploy to GitHub Pages" berjalan sukses
    - Website akan live di https://ccit-venture.github.io

### Auto-Deployment

Setiap kali Anda push ke branch `main`, website akan otomatis:
1. Build dengan Astro
2. Deploy ke GitHub Pages

### Development vs Production

**Development** (lokal):
```bash
npm run dev
# Akses di http://localhost:4321
```

**Production** (GitHub Pages):
- Konfigurasi sudah di `astro.config.mjs`:
  ```javascript
  site: 'https://ccit-venture.github.io',
  // Tidak perlu base path untuk user site
  ```

### Troubleshooting

Jika deployment gagal:
1. Cek tab **Actions** di GitHub untuk error log
2. Pastikan `astro.config.mjs` sudah benar
3. Pastikan file `.github/workflows/deploy.yml` ada
4. Verifikasi GitHub Pages sudah di-enable di Settings

## Menambah Data

### Tambah Proyek Baru

Buat file baru di `src/content/showcases/nama-proyek.md`:

```markdown
---
productName: "Nama Produk"
tagline: "Tagline produk"
jurusan: "FSD" # atau ISA, DCM
status: "In-Incubation" # atau Launched, Archived
description: "Deskripsi produk"
team:
  - "Nama Anggota 1"
  - "Nama Anggota 2"
githubUrl: "https://github.com/..."
demoUrl: "https://..."
batch: "Batch 1"
---

Konten tambahan tentang proyek...
```

### Tambah Mentor

Buat file baru di `src/content/mentors/nama-mentor.md`:

```markdown
---
name: "Nama Mentor"
role: "Lead Mentor" # atau Strategic Advisor
title: "Jabatan"
bio: "Deskripsi singkat"
linkedin: "https://linkedin.com/in/..."
github: "https://github.com/..."
email: "email@ccit.edu"
order: 1
---

Konten tambahan...
```

### Tambah Batch

Buat file baru di `src/content/batches/batch-n.md`:

```markdown
---
batchNumber: 2
name: "Nama Batch"
startDate: 2026-09-01
endDate: 2027-02-28
status: "Upcoming" # atau Active, Completed
description: "Deskripsi batch"
totalProjects: 5
---

Konten tambahan...
```

## License

MIT License - CCIT Venture Studio 2026
