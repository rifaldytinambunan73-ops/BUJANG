KANDANGLAB AI GENERATIF — 20 BOT PETERNAK SAPI PERAH
================================================

STATUS
Website generatif sudah dibuat (frontend dan fungsi API server), tetapi
BELUM dihosting dan BELUM terhubung ke akun OpenAI API Anda.

TUJUAN
20 persona peternak sapi perah fiktif dengan usia 35-50 tahun,
pendidikan SD/SMP/SMA, sapi perah tidak melebihi 15 ekor, pengalaman
beternak tidak melebihi 10 tahun, dan keanggotaan kelompok bervariasi.
Mereka menjawab kuesioner menggunakan model AI generatif, bukan aturan
jawaban tetap. Ada pula percakapan langsung dengan satu bot.

PENTING UNTUK TUGAS AKHIR
Semua profil, dialog, dan kuesioner hasil website ini adalah DATA
SINTETIS dari AI, BUKAN data lapangan. Cocok untuk pilot test, latihan
analisis, uji tampilan, dan melihat kelemahan redaksi pertanyaan.
Tidak boleh disajikan sebagai jawaban 20 responden asli.

CARA MEMBUAT WEBSITE BENAR-BENAR ONLINE (VERCEL)
1. Buat akun di https://github.com dan https://vercel.com
2. Buat repository GitHub baru (misal kandanglab-ai).
3. Unggah SEMUA file dan folder dari paket ini, bukan file ZIP:
   - index.html
   - package.json
   - api/ai.js
   - api/status.js
   - api/_personas.js
   - .env.example (opsional)
4. Di https://vercel.com/new pilih Import Git Repository,
   lalu pilih repository yang barusan diunggah.
5. Buka pengaturan proyek Vercel > Settings > Environment Variables.
   Tambahkan tiga variabel:
     OPENAI_API_KEY = API key dari akun OpenAI Platform Anda.
     APP_ACCESS_CODE = kode akses panjang buatan sendiri (dirahasiakan).
     OPENAI_MODEL = gpt-4o-mini (opsional; default gpt-4o-mini).
   Catatan: ChatGPT Plus tidak otomatis termasuk kredit OpenAI API.
6. Deploy atau Redeploy agar environment variables terbaca.
7. Buka alamat yang disediakan Vercel, contohnya ...vercel.app.
8. Klik Input Kuesioner, ketik APP_ACCESS_CODE pada kolom
   'Kode akses website', tekan Periksa sambungan.
9. Klik 'Isi contoh 4 pertanyaan' atau tulis sendiri. Pilih
   'Generate jawaban 20 bot'. Hasil bisa diunduh CSV bertanda SIMULASI.
10. Gunakan tab Chat Bot untuk berbicara dengan satu persona AI.

PENTING: Versi Vercel ini MEMERLUKAN serverless function. Upload langsung
ke Netlify Drop atau membuka file index.html saja TIDAK akan membuat
AI dapat diakses karena API server tidak ikut dijalankan.

PRIVASI & BIAYA
- API key hanya ada di server via environment variable.
- Pemakaian model AI memakai biaya sesuai tarif dan kuota API Anda.
- Kode akses tidak disimpan di localStorage, hanya di kolom input tab
  saat ini. Jagalah kode ini karena tiap panggilan AI menggunakan kuota.
- Data pertanyaan disimpan di localStorage browser, tidak disimpan ke
  database. Hasil simulasi hanya ada di memori tab sampai diekspor.
- Endpoint AI menyetel 'store: false' saat memanggil OpenAI.
- Untuk penggunaan publik atau trafik besar, tambahkan login dan
  rate limiting dari layanan hosting karena kode akses bersama saja
  belum merupakan sistem akun multi-user.

FORMAT PERTANYAAN (SATU PER BARIS)
[SKALA] Saya berminat mencoba membuat briket bioarang.
[YA/TIDAK] Apakah Bapak/Ibu pernah melihat pembuatan briket bioarang?
[TEKS] Apa kendala terbesar dalam pemanfaatan feses sapi?

Batas 60 pertanyaan per generasi dan 20 bot per putaran.
Untuk jawaban skala: 1 Sangat Tidak Setuju, 2 Tidak Setuju,
3 Setuju, 4 Sangat Setuju. Sesuaikan dengan instrumen Anda.

File ini tidak menyertakan kredensial, hosting, atau jawaban AI yang
benar-benar telah dijalankan. Respons baru akan dihasilkan saat API
berhasil dihubungkan.
