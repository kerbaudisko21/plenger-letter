# 此去春来 — Surat Perpisahan Zhejiang

Website Next.js sederhana untuk membagikan surat perpisahan ke teman-teman
sekelas bahasa di Zhejiang. Buka halaman utama, cari/pilih nama, dan surat
masing-masing akan muncul di halamannya sendiri (`/surat/nama-slug`).

## Menjalankan di komputer sendiri

Butuh Node.js 18+ sudah terpasang.

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000

## Build untuk production

```bash
npm run build
npm start
```

## Deploy paling gampang (gratis) — Vercel

1. Push folder ini ke repo GitHub baru.
2. Buka https://vercel.com, sign in pakai GitHub.
3. "Add New Project" → pilih repo ini → Deploy.
4. Selesai, dapat link seperti `https://nama-project.vercel.app` yang bisa
   dibagikan ke semua teman.

Vercel gratis untuk pemakaian seperti ini dan tidak perlu setting apa-apa,
Next.js langsung dikenali otomatis.

## Menambah / mengedit surat

Semua isi surat ada di satu file: `data/letters.js`. Setiap orang adalah satu
object dengan:

- `slug` — dipakai di URL, huruf kecil, tanpa spasi (pakai tanda `-`)
- `name` — nama yang ditampilkan
- `nickname` — nama panggilan untuk sapaan "Dear ..."
- `paragraphs` — array isi surat, tiap item jadi satu paragraf
- `ps` — catatan PS di bawah surat (boleh `null` kalau tidak ada)
- `hashtag` — opsional, misalnya `"#HUHA"`
- `lang` — `"en"` untuk surat berbahasa Inggris, `"hokkien"` untuk yang
  sengaja dibiarkan dalam bahasa Hokkien (akan muncul label kecil di suratnya)

Tinggal copy salah satu object yang sudah ada, ubah isinya, taruh nama
barunya otomatis muncul di grid halaman utama.

## Struktur project

```
app/
  layout.js          -> font & metadata global
  globals.css         -> semua styling (tema "boarding pass" musim semi)
  page.js              -> halaman pilih nama (hero senja + grid boarding pass)
  surat/[slug]/page.js -> halaman surat per orang (ticket letter)
  not-found.js         -> halaman kalau nama tidak ketemu
components/
  BlossomBranch.js      -> ilustrasi SVG ranting bunga plum
lib/
  ticketCode.js          -> generator kode 3-huruf ala boarding pass
data/
  letters.js            -> semua isi surat, edit di sini
```

## Tentang desainnya

Temanya "boarding pass perpisahan": langit senja musim semi dengan ranting
bunga plum & kelopak yang berguguran di bagian hero, lalu tiap surat
ditampilkan seperti tiket keberangkatan menuju babak baru — lengkap dengan
sobekan tiket dan stempel merah ala cap tradisional Cina (缘 = ikatan/jodoh).
