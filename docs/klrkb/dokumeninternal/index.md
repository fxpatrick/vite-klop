# Dokumen Internal
## Dokumen Purchase Order
### Manual
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah melengkapi data, user dapat menekan tombol **Simpan**
4.	Mengisikan Item yang ingin dipesan bisa menggunakan dua cara yaitu:
#### a.	Template
- User dapat menekan tombol **Template**
- Melengkapi data **TemplatePurchaseOrderDetail.csv**
- Setelah itu bisa diimport menggunakan tombol **Import**
#### b.	Manual
- User dapat menekan tombol **Tambah**
5.	Pada **Supplier Code** diisikan dengan kode vendor yang dituju
6.	Setelah mengisikan item, user dapat menekan tombol **Submit**
7.	Setelah dokumen sudah selesai maka status dokumen **Purchase Order** tersebut akan menjadi **Disetujui**, dan **Purchase Order** tersebut secara otomatis akan muncul pada menu **Purchase Order** vendor dengan status **New**
8.	Berikutnya user tinggal menunggu hingga **Purchase Order** tersebut sudah dipenuhi oleh vendor dengan melakukan pengecekan pada menu **Shipment**

### Import File
1.	Klik **Administrasi**
2.	Klik **Impor Data**
3.	Klik **Tambah Baru**
4.	Pilih **Purchase Order**
5.	Pilih file yang ingin diunggah, apabila ingin menggunakan template Klearance One Portal, user dapat menekan tombol **Unduh Template**, namun apabila ingin menggunakan template sendiri, maka user tidak perlu unduh template
6.	Lampirkan file yang ingin diunggah
7.	Apabila file yang diunggah menggunakan template Klearance One Portal, maka pada Default Index user dapat memilih **Ya**, namun apabila user menggunakan template sendiri, maka user perlu memilih **Tidak**, dan melakukan mapping index terlebih dahulu dengan cara sebagai berikut:
1.	Klik **Administrasi**
2.	Klik **Mapping Import Dokumen**
3.	Cari pada bagian index **Purchase Order**
4.	Mengisikan **Baris Mulai**, baris mulai diisikan dengan baris dari data PO tersebut ( Ex: baris 1 adalah baris untuk kolom dan data nya berada di baris setelah kolom tersebut, maka Baris Mulai bisa diisikan dengan 2)
5.	Pada **Index No** diisikan dengan Index kolom dari template yang akan diunggah oleh user
6.	Pada bagian **Key** dapat diceklist apabila kolom tersebut adalah unik, dan seluruh datanya tidak akan sama
8.	Apabila user ingin mengunggah data dengan tujuan adalah melakukan update data, maka pada bagian Update Data dapat memilih **Ya**, namun apabila bertujuan untuk menambhakan data baru, maka user bisa memilih **Tidak**
9.	Apabila kode barang belum ada di data master, maka secara otomatis akan dibuat pada **Master Barang**

### Upload KB CDMS
User dapat melakukan import data **Purchase Order** yang sudah dibuat pada KB CDMS, sehingga pada Klearance One Portal, user tidak perlu lagi membuat Purchase Order yang sama dengan cara menyambungkan koneksi antara CDMS KB dengan Klearance One Portal, untuk menyambungkan koneksi tersebut, user dapat menuju [CDMS KB](/klrkb/cdmskb/)


## Dokumen Shipment
Apabila Vendor telah memenuhi **Purchase Order** yang telah anda minta, dan sudah membuat dokumen Shipment, maka nomor dokumen tersebut akan muncul di menu **Shipment**
1.	Setelah Vendor menyelesaikan pembuatan dokumen **Shipment**, maka Status dokumen tersebut akan berubah menjadi **Ready**
2.	Setelah status sudah **Ready**, apabila vendor nya adalah vendor luar negeri, maka tombol yang muncul adalah **Convert Into BC 2.3**, namun apabila vendor nya adalah vendor dalam negeri maka tombol yang muncul adalah **Convert Into BC 4.0**, tekan tombol **Convert Into BC** untuk secara otomatis membuatkan dokumen BC nya
3.	Setelah itu user dapat melengkapi dokumen BC nya
