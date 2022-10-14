#	PEB
Pengisian dokumen PEB terbagai menjadi 6 bagian, yaitu sebagai berikut:

##	Input Header
Untuk melakukan input Header adalah sebagai berikut:
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah melengkapi data, user dapat menekan tombol **Simpan**
4.	Status dokumen akan berubah menjadi **Draft**, dan akan muncul **Tab Detil, Invoice, Dokumen, Kemasan, Kontainer, dan Bank**

::: warning
Untuk Kategori Ekspor pada Header ada yang memerlukan dokumen khusus yaitu:
1.	Jenis Kategori Ekspor yaitu **yg pd saat imp mndpt fas pembebasan BM(NIPER dgn pembebasan)** atau **yg pd saat imp mndpt fas pembebasan BM(NIPER dgn pengembalian)** memerlukan dokumen 998 - Skep KITE
2.	Jenis Kategori Ekspor yaitu **BKC yang belum dilunasi utang nya** memerlukan dokumen 813 – Dokumen Cukai ( CK-5)
:::

## Input Detil Barang
Untuk melakukan input detil barang terbagi menjadi beberapa cara yaitu:
### Via Template
1.	Klik Tombol **Template**
2.	Lengkapi data **TemplatePebDetail.csv**
3.	Setelah melengkapi data **TemplatePebDetail.csv** bisa diimpor menggunakan tombol **Import**
4.	Apabila pengisian sudah benar, maka detil barang akan terbentuk sesuai dengan data yang diisikan di **TemplatePebDetail**
5.	Jika ingin mengubah data detail tersebut dapat menekan tombol **Pensil** yang ada di sebelah kanan row per detil barang tersebut
6.	Jika ingin menghapus detil yang diinginkan bisa menggunakan tombol **Tong Sampah** yang ada di sebelah kanan row per detil barang tersebut, namun apabila ingin menghapus seluruh detil barang yang ada, bisa menggunakan tombol **Hapus Semua**

### Manual
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data sudah lengkap bisa menekan tombol **Simpan**

## Input Dokumen
Untuk melakukan input dokumen terbagi menjadi dua cara yaitu:
### Via Template
1.	Klik tombol **Template**
2.	Mengisikan **TemplatePebDocument.csv**
3.	Untuk pengisian pada **TemplatePebDocument** ada beberapa point penting yaitu:
    1. **JenisDokumen** diisikan dengan angka type Dokumen ( Ex: **380** untuk **Invoice**)
    2. **Tanggal** diisikan dengan format tanggal **dd/mm/yyyy** atau **yyyy-mm-dd**
    3. **KantorKPBC** diisikan dengan kode KPBC ( Ex: **040100** untuk **KPBC Tanjung Priok 1**)
4.	Setelah **TemplatePebDocument** sudah lengkap, user dapat menggunakan tombol **Import** untuk mengimpor data tersebut.
5.	Apabila pengisian **TemplatePebDocument** sudah benar, maka data template tersrbut akan muncul pada **tab Dokumen**

### Manual
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

## Input Kemasan
Untuk melakukan input kemasan adalah sebagai berikut:
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

## Input Kontainer
Untuk melakukan input kontainer adalah sebagai berikut:
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

## Input Bank
Untuk melakukan input bank adalah sebagai berikut:
1.	Klik tombol **Tambah**
2.	Mengisikan data – data yang diperlukan, data yang wajib diisi memiliki tanda *
3.	Setelah seluruh data terisi, user dapat klik tombol **Simpan**

## Invoice
1.	Klik tombol **Pilih Invoice**
2.	Maka data barang yang ada pada Invoice akan muncul pada **tab Detail**