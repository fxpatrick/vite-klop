# 2 Factor Authentication
Seiring dengan berkembangnya perkembangan industri teknologi ada banyak sekali bentuk serangan digital yang dapat dilakukan oleh para peretas, salah satu - satunya adalah melakukan aksi *brute force* dengan cara menebak kombinasi user dan password agar dapat masuk ke dalam sistem yang ingin diretas.

Atas dasar hal tersebut dibuat suatu metode pengamanan tambahan yang dinamakan 2FA atau 2 faktor autentikasi. 2FA merupakan salah satu metode pengamanan sistem untuk memvalidasi bahwa orang yang ingin mengakses sistem merupakan orang yang tepat.
Di mulai dari tahun 2022 sudah semakin banyak korporasi besar yang mewajibkan 2FA sebagai standar pengamanan yang harus diterapkan dalam setiap sistem perusahaan yang dapat diakses melalui internet publik.

Secara umum 2FA mewajibkan orang yang ingin masuk ke dalam sistem menggunakan dua metode validasi atau lebih. Dalam penerapan 2FA pada CDMS, CDMS mewajibkan dua metode validasi, yaitu:
1. Kombinasi username dan password
2. Kombinasi nomor dalam bentuk OTP (One Time Password) melalui aplikasi google authenticator

## Pengaturan Awal 2FA  
1. Download Google Authenticator (gauth) melalui link di bawah melalui ponsel <br>
[Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=id&gl=US) <br>
[Apple](https://apps.apple.com/us/app/google-authenticator/id388497605)
2. Konfirmasi username dan password yang digunakan untuk masuk ke dalam gauth kepada pihak perusahan pengguna fasilitas
3. Masuk ke dalam gauth menggunakan kombinasi username dan password yang sudah diberikan pihak perusahan pengguna fasilitas pada ponsel
4. Buka 