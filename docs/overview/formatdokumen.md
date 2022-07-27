# Format Dokumen
Untuk mempermudah user dalam melakukan pembuatan otomatis nomor aju dokumen BC, saat ini Klerance One Portal sudah menyediakan Format Dokumen, user dapat menggunakan nya dengan cara sebagai berikut:
1. Pilih menu Administrasi
2. Pilih Format Dokumen
3. Klik tombol Tambah Baru
4. Mengisikan kolom yang  wajib diisi, kolom yang wajib terisi memiliki lambang *
5. Untuk Tipe Dokumen, adalah tipe dokumen mana yang ingin menggunakan format dokumen
6. Format diisikan dengan format aju yang diinginkan, untuk komposisi bisa menggunakan Lagenda
7. Untuk Periode Pengulangan adalah periode yang menentukan counter number aju tersebut kembali lagi dari 0

contoh format dengan Nomor Aju: 050920 - 003673 - 26072022 - 000001
- 050920 adalah Nomor KPPBC
- 003673 adalah Nomor Module
- 26072022 adalah tanggal pembuatan aju tersebut
- 000001 adalah 6 digit counter number (bertambah 1 terus menerus setiap kali request aju baru)
maka ketika user mengisikan format nanti user dapat menggunakan format seperti ini <code>050920003673{1:yyyyMMdd}{0:000000}</code>

## Lagenda

|Format   |Deskirpsi   |
|:--------|:-----------|
|<code>{0}</code>|Menetapkan nomor lokasi|
|<code>{0:00000}</code>|Setel angka nol di depan untuk angka hingga 5 digit (contoh: 01234 , 00123 , 00012 , 12345)
|<code>{0:BC:000000}</code>|Setel nomor untuk menggunakan format Bea Cukai dengan 6 digit
|<code>{1}</code>|Menetapkan bahwa ini akan menggunakan tanggal
|<code>{1:dd}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian hari saja (contoh: 12, 13, dll)
|<code>{1:MM}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian Bulan saja (contoh. 01, 02, dll)
|<code>{1:R:MM}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian bulan dan menggunakan nomor Romawi (contoh: II, IV, XII, dll)
|<code>{1:MMM}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian bulan saja (contoh. Jan, Feb, dll)
|<code>{1:MMMM}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian bulan saja (contoh: Januari, Februari, dll)
|<code>{1:yy}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian tahun saja (contoh:. 15, 16, dll)
|<code>{1:R:yy}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian tahun saja dan menggunakan nomor Romawi (contoh: XV, XVI, dll)
|<code>{1:yyyy}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian tahun saja (contoh: 2015, 2016, dll)
|<code>{1:R:yyyy}</code>|Menetapkan bahwa ini akan menggunakan tanggal untuk bagian tahun saja dan menggunakan nomor Romawi (contoh: MMXV, MMXVI, dll)