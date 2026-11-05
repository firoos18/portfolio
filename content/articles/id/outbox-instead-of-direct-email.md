---
title: "Kenapa Tempo mengirim email lewat outbox"
description: "Pendaftaran tidak boleh gagal karena SMTP lambat. Cara Tempo menulis email ke tabel outbox dalam transaksi yang sama dan membiarkan job latar belakang mengirimnya."
date: 2026-11-05
tags: [dotnet, postgresql, reliability, tempo]
---

Tempo adalah alat pencatat waktu dan invoice yang saya bangun dengan API .NET 10 dan PostgreSQL. Tempo mengirim beberapa jenis email: verifikasi akun, undangan workspace, dan pemberitahuan invoice. Memanggil pengirim email di dalam request berjalan baik sampai server email lambat, mati, atau membatasi laju pengiriman, dan saat itu pendaftaran pengguna gagal karena alasan yang tidak ada hubungannya dengan mereka.

## Aturannya

Perubahan bisnis dan email yang ditimbulkannya ditulis bersama, atau tidak sama sekali. Request tidak pernah berbicara dengan SMTP.

Saat handler membuat undangan, ia menambahkan baris `OutboxMessage` berisi tipe dan payload JSON ke `DbContext` yang sama, lalu `SaveChanges` meng-commit keduanya dalam satu transaksi. Jika transaksi dibatalkan, tidak ada email yatim. Jika transaksi berhasil, email itu pasti akan diambil nanti.

## Dispatcher-nya

Sebuah `BackgroundService` yang melakukan pengiriman:

- Setiap 15 detik ia membaca baris yang tertunda: belum terkirim, kurang dari lima percobaan, yang paling lama lebih dulu, 25 sekaligus.
- Ia menguras antrean dalam satu loop sampai sebuah batch kembali tidak penuh. Satu batch per tick tertinggal setelah lonjakan pendaftaran, dan email verifikasi datang terlambat beberapa menit.
- Setiap baris dirender menjadi email lalu dikirim. Jika berhasil, baris mendapat timestamp `DispatchedAt`. Jika gagal, jumlah percobaan bertambah dan 500 karakter pertama pesan error disimpan, sehingga pesan yang macet bisa menjelaskan dirinya sendiri.
- Jika host SMTP tidak dikonfigurasi, baris hanya ditandai terkirim. Pengembangan lokal dan test tidak pernah membutuhkan server email.

## Harganya

Satu tabel tambahan, satu worker latar belakang yang harus dijaga, dan email yang terlambat beberapa detik alih-alih instan. Sebagai gantinya, keberhasilan request hanya bergantung pada database, percobaan ulang terjadi tanpa ada yang menyadari, dan setiap pesan yang gagal lima kali tetap ada di tabel tempat saya bisa membaca penyebabnya.

## Yang akan saya tambahkan

Tampilan dead-letter di area admin untuk baris yang mencapai batas percobaan, dan metrik umur pesan tertunda yang paling lama. Angka itulah yang memberi tahu bahwa dispatcher sudah berhenti.
