# Sync Client

## Melewati Settings
Sebelum dapat melakukan download Sync Client, user diminta mengisikan beberapa setting yang nantinya akan digunakan oleh Sync Client, akan tetapi apabila user merasa tidak perlu melakukan setting tersebut atau ingin melakukan nya nanti, user dapat menekan tombol **Lewati** hingga sampai ke tahap melakukan download Sync Client

## PIB
Sebelum melakukan setting koneksi Sync Client, user bisa menuju
1. Pilih menu Administrasi
2. Pilih Klearance Client
3. Mengisi Path Database PIB dengan lokasi file path dbPIB.mdb (Ex: C:\Users\Andy\Documents\Test\dbPIB.mdb)
4. Network User diisi dengan username apabila path dari dbPIB.mdb berada pada folder sharing yang harus menggunakan akses
5. Network Password  diisi dengan password apabila path dari dbPIB.mdb berada pada folder sharing yang harus menggunakan akses
6. Periode Penarikan Data diisikan dengan range waktu penarik (Ex: 60 Menit, maka setiap 1jam sekali Klearance One Portal akan menarik data terbaru atau update status dari moduke PIB tersebut)
7. Setelah melengkapi data, user dapat menekan tombol Selanjutnya

## PEB
Sebelum melakukan setting koneksi Sync Client, user bisa menuju
1. Pilih menu Administrasi
2. Pilih Klearance Client
3. Mengisi Path Database PEB dengan lokasi file path dbPEB.mdb (Ex: C:\Users\Andy\Documents\Test\dbPEB.mdb)
4. Network User diisi dengan username apabila path dari dbPEB.mdb berada pada folder sharing yang harus menggunakan akses
5. Network Password  diisi dengan password apabila path dari dbPIB.mdb berada pada folder sharing yang harus menggunakan akses
6. Periode Penarikan Data diisikan dengan range waktu penarik (Ex: 60 Menit, maka setiap 1jam sekali Klearance One Portal akan menarik data terbaru atau update status dari moduke PEB tersebut)
7. Setelah melengkapi data, user dapat menekan tombol Selanjutnya

## Instalasi Sync Client
Setelah user mengisikan seluruh data, maka langkah berikutnya adalah melakukan instalasi Sync Client, dengan cara sebagai berikut:
1. Klik tombol **Download**
2. Install Klearance Client Control Panel-8.1.0.9.exe
3. Setelah berhasil melakukan install Sync Client, user dapat membuka aplikasi Klearance Klient One Portal
4. Berikutnya user akan diminta untuk mengisikan url dengan nama perusahaan anda
5. Mengisikan Email dengan email untuk login user pada Klearance One Portal
6. Mengisikan Password dengan passowrd untuk login user pada Klearance One Portal
7. Apabila user sudah benar dalam mengisikan url, email, dan passowrd, maka Sync Client akan berstatus menyala, maka user sudah berhasil terhubung dengan Klerance One Portal

## Megubah Path Sync Client
Apabila user melakukan perubahan path untuk database module, maka user bisa melakukan setting ulang untuk Sync Client nya dengan cara sebagai berikut:
1. Pilih menu Administrasi
2. Pilih Klerance Client
3. Data yang sebelumnya sudah tersetting pada Klearance One Portal, akan dimunculkan pada menu ini
4. User dapat melakukan edit Lokasi File, username, dan passowrd, apabila ingin melakukan perubahan
5. Setelah melakukan perubahan user dapat menekan tombol **Simpan**
6. Klik tombol **Ekspor Data Pengaturan**

::: warning
Apabila setelah simpan tetapi muncul warning '**Tidak ada Klearance Client yang terkoneksi**' , maka user dapat melakukan pengecekan kembali pada aplikasi Klerance Klient One Portal
:::