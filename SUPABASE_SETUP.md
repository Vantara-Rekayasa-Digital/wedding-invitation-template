# Setup Supabase untuk Production Database

## 1. Buat Akun Supabase

1. Kunjungi https://supabase.com
2. Klik "Start your project"
3. Sign in dengan GitHub atau email

## 2. Buat Project Baru

1. Klik "New Project"
2. Pilih Organization (atau buat baru)
3. Isi detail project:
   - **Name**: `aulia-wibowo-wedding`
   - **Database Password**: (buat password yang kuat)
   - **Region**: Southeast Asia (Singapore) - terdekat dengan Indonesia
4. Klik "Create new project" (tunggu ~2 menit)

## 3. Buat Tabel RSVP

Setelah project selesai dibuat:

1. Buka **SQL Editor** di sidebar kiri
2. Klik "New query"
3. Copy-paste SQL berikut:

```sql
-- Create rsvp table
CREATE TABLE rsvp (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL,
  guests INTEGER DEFAULT 1,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

-- Create policy to allow INSERT for everyone
CREATE POLICY "Allow public insert" ON rsvp
  FOR INSERT TO public
  WITH CHECK (true);

-- Create policy to allow SELECT for everyone
CREATE POLICY "Allow public select" ON rsvp
  FOR SELECT TO public
  USING (true);
```

4. Klik **Run** atau tekan `Ctrl+Enter`

## 4. Dapatkan API Credentials

1. Buka **Project Settings** (ikon gear di sidebar)
2. Pilih **API** di sidebar settings
3. Copy credentials berikut:
   - **Project URL** (contoh: `https://xxxxx.supabase.co`)
   - **anon public** key (key yang panjang)

## 5. Tambahkan Environment Variables ke Vercel

### Via Vercel Dashboard:

1. Buka https://vercel.com
2. Pilih project **aulia-wibowo-invitation**
3. Klik tab **Settings**
4. Pilih **Environment Variables**
5. Tambahkan 2 variables baru:

   **Variable 1:**
   - **Key**: `SUPABASE_URL`
   - **Value**: (paste Project URL dari Supabase)
   - **Environment**: Production, Preview, Development (check semua)

   **Variable 2:**
   - **Key**: `SUPABASE_KEY`
   - **Value**: (paste anon public key dari Supabase)
   - **Environment**: Production, Preview, Development (check semua)

6. Klik **Save**

### Via Command Line (Alternative):

```bash
vercel env add SUPABASE_URL
# Paste URL dan tekan Enter

vercel env add SUPABASE_KEY
# Paste key dan tekan Enter
```

## 6. Redeploy Website

```bash
npm install
vercel --prod
```

Atau dari Vercel Dashboard:

1. Buka tab **Deployments**
2. Klik tombol "Redeploy" pada deployment terakhir

## 7. Test RSVP

Buka website production dan coba submit form RSVP. Data akan tersimpan di Supabase.

## View Data di Supabase

1. Buka Supabase Dashboard
2. Pilih **Table Editor** di sidebar
3. Klik tabel **rsvp**
4. Lihat semua data RSVP yang masuk

---

## Troubleshooting

### Error: "Database tidak terkonfigurasi"

- Pastikan environment variables sudah ditambahkan
- Pastikan sudah redeploy setelah menambahkan env vars

### Error saat insert data

- Check apakah tabel `rsvp` sudah dibuat
- Pastikan RLS policies sudah di-enable

### Koneksi timeout

- Pastikan region Supabase dipilih yang terdekat
- Check apakah Supabase project dalam status "Active"

---

**Status**: ✅ Gratis selamanya untuk:

- 500MB database storage
- 2GB bandwidth/bulan
- 50,000 monthly active users

Lebih dari cukup untuk website undangan! 🎉
