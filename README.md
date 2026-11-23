# Ensiklopedia Sejarah

## Deskripsi
Ensiklopedia Sejarah adalah aplikasi web untuk menampilkan dan mengelola informasi tokoh-tokoh sejarah. Aplikasi ini dibuat menggunakan React sebagai frontend dan NestJS sebagai backend dengan struktur MVC.

## Teknologi
- **Frontend:** React, Vite, JavaScript
- **Backend:** NestJS, TypeScript
- **Validasi:** class-validator dan class-transformer
- **API Testing:** REST Client (VS Code)

## Fitur Aplikasi
- Menampilkan daftar tokoh sejarah.
- Menambahkan data tokoh sejarah.
- Mengubah data tokoh sejarah.
- Menghapus data tokoh sejarah.
- Validasi input menggunakan DTO.
- Penanganan error menggunakan HTTP Exception.

## Struktur Backend
```text
backend/
├── src/
│   ├── tokoh-sejarah/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── tokoh-sejarah.controller.ts
│   │   ├── tokoh-sejarah.service.ts
│   │   └── tokoh-sejarah.module.ts
│   ├── app.module.ts
│   └── main.ts
└── tokoh-sejarah.http
```

## API Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /tokoh-sejarah | Menampilkan semua tokoh |
| GET | /tokoh-sejarah/:id | Menampilkan detail tokoh |
| POST | /tokoh-sejarah | Menambahkan tokoh |
| PATCH | /tokoh-sejarah/:id | Mengubah tokoh |
| DELETE | /tokoh-sejarah/:id | Menghapus tokoh |

## Cara Menjalankan Aplikasi

### 1. Backend
```bash
cd backend
npm install
npm run start:dev
```

Backend berjalan di `http://localhost:3000`.

### 2. Frontend
Buka terminal baru dari folder utama proyek:
```bash
npm install
npm run dev
```

Frontend berjalan di alamat yang ditampilkan oleh Vite, biasanya `http://localhost:5173`.

## Penyimpanan Data
Data tokoh sejarah disimpan sementara menggunakan array di dalam service NestJS (in-memory), sehingga data akan kembali ke kondisi awal ketika server dimulai ulang.

## Dokumentasi Pengujian
Screenshot pengujian API dan integrasi frontend dapat dilihat pada folder `docs/screenshots/`.  