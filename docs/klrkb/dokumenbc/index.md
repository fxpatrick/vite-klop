# Dokumen BC
# Transaksi Pemasukan
Dokumen pemasukan terbagi menjadi beberapa jenis yaitu sebagai berikut:
## BC 2.7 Masuk
Dokumen BC 2.7 Masuk adalah dokumen BC 2.7 Keluar dari vendor yang nantinya setelah dokumen BC 2.7 Keluar dari vendor sudah disetujui dan sudah mendapatkan nomor & tanggal daftar, maka secara otomatis akan muncul pada BC 2.7 Masuk 

## BC 4.0

## BC 2.3


# Transaksi Pengeluaran
Dokumen pengeluaran terbagi menjadi beberapa jenis yaitu sebagai berikut:

## BC 2.7 Keluar
Pengisian dokumen BC 2.7 Keluar  terbagi menjadi 5 bagian, yaitu sebagai berikut:
### Input Header
Untuk melakukan input header adalah sebagai berikut:
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah melengkapi data, user dapat menekan tombol **Simpan**
4.	Status dokumen akan berubah menjadi draft, dan akan muncul tab **Detil, Purchase Order, Invoice Penerimaan, Dokumen, Kemasan, dan Kontainer**

### Input Detil Barang
Untuk melakukan input detil barang terbagi menjadi beberapa cara yaitu:
### a. Via Template
1.	Klik Tombol **Template**
2.	Lengkapi data **TemplateBc27Detail.csv**
3.	Setelah melengkapi data **TemplateBc27Detail.csv** bisa diimport menggunakan tombol **Import**
4.	Apabila pengisian sudah benar, maka detil barang akan terbentuk sesuai dengan data yang diisikan di **TemplateBc27Detail**
5.	Jika ingin mengubah data detail tersebut dapat menekan tombol **Pensil** yang ada di sebelah kanan row per detil barang tersebut
6.	Jika ingin menghapus detil yang diinginkan bisa menggunakan tombol **Tong Sampah** yang ada di sebelah kanan row per detil barang tersebut, namun apabila ingin menghapus seluruh detil barang yang ada, bisa menggunakan tombol **Hapus Semua**

### b. Manual
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data sudah lengkap bisa menekan tombol **Simpan**

### c. Purchase Order
1.	Menuju tab **Purchase Order**
2.	Klik tombol **Pilih Purchase Order**
3.	Untuk melakukan add detail melalui Purchase Order terbagi menjadi 2 cara yaitu:
    1. 	**Per Satuan**
        - Per Satuan digunakan apabila user tidak bisa melengkapi Purchase Order tersebut secara langsung, atau hanya ingin mengirimkan barang tertentu saja
    1. 	**Per Nomor PO**
        - Per Nomor PO digunakan apabila user ingin menyelesaikan per Purchase Order tersebut, maka user bisa menggunakan menu per Nomor PO
4.	Setelah user menggunakan Per Satuan atau Per Nomor PO, maka untuk barang Purchase Order tersebut akan muncul di tab detail, dan apabila menekan tombol Pensil per detil barang, kita bisa meilhat nomor Purchase Order nya, apabila detil barang tersebut bersal dari Purchase Order

### Input Bahan Baku
1.	Klik tombol **Tambah Baru**
2.	Pilih **Detil Barang**
3.	Pilih **Jenis Bahan Baku**
4.	Lengkapi data, data yang wajib diisi memiliki tanda *
5.	Setelah melengkapi data, user dapat menekan tombol **Simpan**

### Input Dokumen
Untuk melakukan input dokumen terbagi menjadi dua cara yaitu:
### a. Via Template
1.	Klik tombol **Template**
2.	Mengisikan **TemplateDocument.csv**
3.	Untuk pengisian pada **TemplateDocument** ada beberapa point penting yaitu:
-	**JenisDokumen** diisikan dengan angka type Dokumen ( Ex: **380** untuk Invoice)
-	**Tanggal** diisikan dengan format tanggal **dd/mm/yyyy** atau **yyyy-mm-dd**
-	**KantorKPBC** diisikan dengan kode KPBC ( Ex: **040100** untuk KPBC Tanjung Priok 1)
4.	Setelah **TemplateDocument** sudah lengkap, user dapat menggunakan tombol **Import** untuk mengimport data tersebut.
5.	Apabila pengisian **TemplateDocument** sudah benar, maka data template tersrbut akan muncul pada tab dokumen

### b. Manual
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

### Input Kemasan
Untuk melakukan input kemasan adalah sebagai berikut:
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

### Input Kontainer
Untuk melakukan input kontainer adalah sebagai berikut:
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**
