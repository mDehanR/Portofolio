# 📋 PANDUAN MENGUBAH KONFIGURASI PORTOFOLIO

Sekarang Anda dapat mengubah konten portofolio HANYA dengan mengubah file konfigurasi di folder ini.
Anda TIDAK perlu memahami React atau kode apapun!

---

📝 1️⃣ MENGUBAH DATA PROJECT
File: projects.js

Struktur:
{
id: 1, // Nomor unik
Title: "Nama Project", // Ubah judul project
Description: "Deskripsi...", // Ubah deskripsi
Img: "/images/project-1.png", // Nama gambar project
Link: "https://...", // Link ke project live
Github: "https://github.com/...", // Link GitHub repo
TechStack: ["React", "Node"], // Teknologi yang digunakan
Features: ["Fitur 1", "Fitur 2"], // Daftar fitur
}

⚠️ PENTING: Letakkan gambar di folder: public/images/
Misal: public/images/project-ecommerce.png

---

🎖️ 2️⃣ MENGUBAH SERTIFIKAT
File: certificates.js

Contoh:
{
id: 1,
title: "Nama Sertifikat",
description: "Deskripsi sertifikat",
image: "/images/certificate-name.jpg",
}

Tambah sertifikat baru:

1. Copy template di certificates.js
2. Ubah id, title, description, image
3. Letakkan gambar di folder: public/images/

---

🔗 3️⃣ MENGUBAH SOCIAL MEDIA LINKS
File: socialConfig.js

Struktur:
{
linkedin: "https://www.linkedin.com/in/yourprofile", // Ubah jadi LinkedIn Anda
instagram: "https://www.instagram.com/yourhandle", // Ubah jadi Instagram Anda
youtube: "https://www.youtube.com/@yourchannel", // Ubah jadi YouTube Anda
github: "https://github.com/yourprofile", // Ubah jadi GitHub Anda
}

Cara isi:

- Buka LinkedIn Anda → Copy URL profil → Paste di linkedin
- Buka Instagram Anda → Copy URL profil → Paste di instagram
- Begitu juga untuk YouTube & GitHub

---

📄 4️⃣ MENGUBAH LINK DOWNLOAD CV
File: cvConfig.js

Struktur:
{
cvFileName: "CV-Muhamad-Dehan.pdf", // Nama file CV Anda
cvPath: "/CV-Muhamad-Dehan.pdf", // Path ke file (jangan diubah)
}

Langkah:

1. Buat file PDF CV Anda (nama bisa apa saja, misal: CV-Nama-Anda.pdf)
2. Letakkan di folder: public/
   Misal: public/CV-Nama-Anda.pdf
3. Di file cvConfig.js, ubah:
   cvFileName: "CV-Nama-Anda.pdf"
   cvPath: "/CV-Nama-Anda.pdf"

---

🎨 RINGKAS FOLDER YANG PERLU:

📁 public/
📄 CV-Nama-Anda.pdf ← Letakkan CV Anda di sini
📁 images/
🖼️ project-1.png ← Gambar project
🖼️ project-2.png
🖼️ certificate-1.jpg ← Gambar sertifikat
🖼️ certificate-2.jpg

📁 src/data/
📝 projects.js ← Edit data project
📝 certificates.js ← Edit data sertifikat
📝 socialConfig.js ← Edit social media
📝 cvConfig.js ← Edit CV path

---

✨ SELESAI!

Setiap kali Anda mengubah file konfigurasi, cukup SAVE file dan lihat perubahan
langsung di browser pada http://localhost:5173/

Mudah, kan? 😊
