# 🖥️ Portofolio — Muhammad Soeh Ferdy Djulhaqi

Website portofolio bertema **terminal/CRT komputer**, dibangun dengan:

| Bagian | Teknologi |
|---|---|
| Frontend | Next.js 16 (App Router) + React 19 |
| Backend | Next.js API Routes |
| Styling | CSS murni, tema terminal hijau |

## 🚀 Cara Running (lokal)

```bash
# 1. Masuk folder proyek
cd portofolio-next

# 2. Install dependencies (sekali saja)
npm install

# 3. Jalankan dev server (frontend + backend sekaligus)
npm run dev
```

Buka **http://localhost:3000** di browser.

### Mode produksi

```bash
npm run build
npm start
```

## 🔌 Backend API

| Endpoint | Method | Fungsi |
|---|---|---|
| `/api/projects` | GET | Daftar semua proyek |
| `/api/contact` | POST | Simpan pesan pengunjung ke `data/pesan.json` |
| `/api/contact` | GET | Lihat daftar pesan yang masuk |

Contoh test backend:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"nama":"Budi","email":"budi@mail.com","pesan":"Halo!"}'
```

## 📦 Deploy ke Vercel

```bash
npx vercel
```

Atau otomatis: push ke GitHub lalu import repo di https://vercel.com/new

> Catatan: penyimpanan pesan memakai file JSON — di server Vercel bersifat sementara
> (serverless filesystem read-only). Untuk permanen, hubungkan ke database
> (Vercel Postgres / Supabase).

## 📁 Struktur

```
portofolio-next/
├── app/
│   ├── page.js              # Halaman utama
│   ├── layout.js            # Root layout
│   ├── globals.css          # Tema terminal/CRT
│   └── api/
│       ├── projects/route.js   # Backend: data proyek
│       └── contact/route.js    # Backend: kirim & baca pesan
├── components/              # BootScreen, Typewriter, Projects, ContactForm
├── lib/data.js              # Sumber data proyek
└── data/pesan.json          # (runtime) pesan pengunjung
```

---

&copy; 2026 Muhammad Soeh Ferdy Djulhaqi — Teknik Komputer, Telkom University
