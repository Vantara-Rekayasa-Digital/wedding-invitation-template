# Wedding RSVP Database Setup

## Instalasi Dependencies

```bash
npm install
```

## Development Mode (Lokal)

Untuk development, gunakan command berikut untuk menjalankan frontend dan backend secara bersamaan:

```bash
npm run dev:all
```

Atau jalankan secara terpisah:

```bash
# Terminal 1 - Frontend (port 8080)
npm run dev

# Terminal 2 - Backend API (port 3001)
npm run dev:server
```

## Database

Database menggunakan **SQLite** dengan file `rsvp.db` yang akan dibuat otomatis di root folder saat pertama kali dijalankan.

### Struktur Tabel RSVP

```sql
CREATE TABLE rsvp (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL,
  guests INTEGER DEFAULT 1,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Production (Vercel)

Untuk production di Vercel, project ini menggunakan **Vercel Serverless Functions**.

### Setup Database di Vercel

Ada beberapa pilihan untuk database di production:

#### Option 1: Vercel Postgres (Recommended)

1. Install Vercel Postgres di dashboard Vercel
2. Update `api/rsvp.ts` untuk menggunakan Vercel Postgres
3. Tambahkan environment variables dari Vercel Postgres

#### Option 2: Supabase

1. Buat project di supabase.com
2. Buat tabel `rsvp` dengan struktur yang sama
3. Update konfigurasi database di `server/db.ts`
4. Tambahkan `SUPABASE_URL` dan `SUPABASE_KEY` di Vercel environment variables

#### Option 3: PlanetScale / Railway

Alternative lain untuk managed database

### Deploy ke Vercel

```bash
vercel
```

API endpoint akan tersedia di `/api/rsvp`

## API Endpoints

### POST /api/rsvp

Menyimpan data RSVP baru

**Request Body:**

```json
{
  "name": "John Doe",
  "attendance": "hadir",
  "guests": "2",
  "message": "Selamat menempuh hidup baru!"
}
```

**Response:**

```json
{
  "success": true,
  "message": "RSVP berhasil disimpan",
  "data": {
    "id": 1,
    "name": "John Doe",
    "attendance": "hadir",
    "guests": "2",
    "message": "Selamat menempuh hidup baru!"
  }
}
```

### GET /api/rsvp

Mengambil semua data RSVP

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "attendance": "hadir",
      "guests": 2,
      "message": "Selamat menempuh hidup baru!",
      "created_at": "2026-01-18 10:30:00"
    }
  ]
}
```

## File Database

File database SQLite (`rsvp.db`) sudah ditambahkan ke `.gitignore` sehingga tidak akan di-commit ke repository.
