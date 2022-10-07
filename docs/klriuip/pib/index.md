# PIB
Pengisian dokumen PIB terbagi menjadi 6 bagian, yaitu sebagai berikut:

## Input Header
Untuk melakukan input header adalah sebagai berikut:
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Setelah melengkapi data, user dapat menekan tombol **Simpan**
4.	Status dokumen akan berubah menjadi **Draft**, dan akan muncul **tab Detil, Purchase Order, Invoice Penerimaan, Dokumen, Kemasan, dan Kontainer**

## Input Detil Barang
Untuk melakukan input detil barang terbagi menjadi beberapa cara yaitu:
### Via Template
1.	Klik Tombol **Template**
2.	Lengkapi data **TemplatePibDetail.csv**
3.	Untuk pengisian pada **TemplatePibDetail** ada beberapa point penting yaitu:
    1. **Negara** harus diisikan dengan kode negara ( Ex: **ID** untuk **Indonesia**)
    2. **KondisiBarang** diisikan dengan angka **1** untuk **Barang Baru** dan **2** untuk **Barang Bukan Baru**
    3. **NilaiVD & TanggalJatuhTempo** hanya diisikan apabila jenis transaksinya adalah **PRO** dan **ROY**
4.	Setelah melengkapi data **TemplatePibDetail.csv** bisa diimport menggunakan tombol **Import**
5.	Apabila pengisian sudah benar, maka detil barang akan terbentuk sesuai dengan data yang diisikan di **TemplatePibDetail**
6.	Jika ingin mengubah data detail tersebut dapat menekan tombol **Pensil** yang ada di sebelah kanan row per detil barang tersebut
7.	Jika ingin menghapus detil yang diinginkan bisa menggunakan tombol **Tong Sampah** yang ada di sebelah kanan row per detil barang tersebut, namun apabila ingin menghapus seluruh detil barang yang ada, bisa menggunakan tomol **Hapus Semua**
8.	Apabila ingin mengisikan bea tambahan seperti **BM Anti Dumping, BM Tindak Pengaman, BM Imbalan, dan BM Pembalasan**, bisa dengan menekan tombol **Pensil** pada detil barang yang diinginkan, lalu menekan tombol **Isi Bea Masuk Tambahan**

### Manual
1.	Klik tombol **Tambah Baru**
2.	Melengkapi data – data yang harus diisi, data yang wajib diisi memiliki tanda *
3.	Apabila ingin mengisikan bea tambahan seperti **BM Anti Dumping, BM Tindak Pengaman, BM Imbalan, dan BM Pembalasan**, bisa dengan menekan tombol **Isi Bea Masuk Tambahan**
4.	Setelah seluruh data sudah lengkap bisa menekan tombol **Simpan**
5.	Setelah itu akan muncul 3 tab baru untuk mengisikan **tab Jenis Transaksi, Fasilitas, dan Lartas**
6.	Untuk mengisikan jenis transaksi, user bisa menekan tombol **Tambah Jenis Transaksi**, untuk jenis transaksi **PRO** dan **ROY**, wajib mengisikan **Jumlah dan Tanggal Pengajuan**.
7.	Untuk mengisikan fasilitas, user bisa menekan tombol **Menghubungkan Dokumen Fasilitas**, jenis dokumen yang dapat dihubungkan dengan fasilitas memiliki beberapa jenis yang nantinya akan di jelaskan pada bagian [Jenis Dokumen Fasilitas](/klriuip/dokumeninternal/#dokumen-pelengkap-detail-barang)
8.	Untuk mengisikan lartas, user bisa menekan tombol **Menghubungkan Dokumen Lartas**, jenis dokumen yang dapat dihubungkan dengan lartas memiliki beberapa jenis yang nantinya akan di jelaskan pada bagian [Jenis Dokumen Lartas](/klriuip/dokumeninternal/#dokumen-pelengkap-detail-barang)
::: warning
Jenis dokumen fasilitas & lartas harus di tambahkan terlebih dahulu pada **tab Dokumen** sebelum bisa ditambahkan pada detail barang
:::


### Purchase Order
1.	Klik tombol **Pilih Purchase Order**
2.	Untuk melakukan add detail melalui **Purchase Order** terbagi menjadi 2 cara yaitu:
    1. **Per Satuan**
    - Per Satuan digunakan apabila user tidak bisa melengkapi **Purchase Order** tersebut secara langsung, atau hanya ingin mengirimkan barang tertentu saja
    2. **Per Nomor PO**
    - Per Nomor PO digunakan apabila user ingin menyelesaikan per **Purchase Order** tersebut, maka user bisa menggunakan menu **Per Nomor PO**.
3.	Setelah user menggunakan **Per Satuan atau Per Nomor PO**, maka untuk barang **Purchase Order** tersebut akan muncul di **tab Detail**, dan apabila menekan tombol **Pensil** per detil barang, kita bisa meilhat nomor **Purchase Order** nya, apabila detil barang tersebut bersal dari **Purchase Order**

## Invoice Penerimaan
1.	Klik tombol **Pilih Invoice**
2.	Barang yang ada **Purchase Order** tersebut akan muncul pada **tab Detil**, dan apabila menekan tombol **Pensil** per detil barang, kita bisa melihat nomor **Invoice** nya, apabila detil barang tersebut berasal dari **Invoice Penerimaan**



## Input Dokumen
Untuk melakukan input dokumen terbagi menjadi dua cara yaitu:
### Via Template
1.	Klik tombol **Template**
2.	Mengisikan **TemplatePibDocument.csv**
3.	Untuk pengisian pada **TemplatePibDocument** ada beberapa point penting yaitu:
    1. **JenisDokumen** diisikan dengan angka type Dokumen ( Ex: **380** untuk **Invoice**)
    2. **Tanggal** diisikan dengan format tanggal **dd/mm/yyyy** atau **yyyy-mm-dd**
    3. **KantorKPBC** diisikan dengan kode KPBC ( Ex: **040100** untuk **KPBC Tanjung Priok 1**)
4.	Setelah **TemplatePibDocument** sudah lengkap, user dapat menggunakan tombol **Import** untuk mengimport data tersebut.
5.	Apabila pengisian **TemplatePibDocument** sudah benar, maka data template tersrbut akan muncul pada **tab Dokumen**

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

### Dokumen Pelengkap Detail Barang
::: details Jenis Dokumen Fasilitas
### Jenis Dokumen Fasilitas
|Tipe|	Nama Dokumen							   |
| ---|:-------------------------------------------:|
|456|	Surat Keterangan Bebas (SKB) PPN/PPnBM	   |
|457|	Surat Keterangan Bebas (SKB) PPh		   |
|458|	Surat Keterangan Tidak Dipungut (SKTD) PPN |
|459|	Non SKB/SKTD							   |
|860|	E-Certificate Of Origin (E-CO)			   |
|861|	Certificate of Origin					   |
|862|	Skep USDFS								   |
|863|	Sertifikat TRQ							   |
|911|	Surat Keputusan						       |
|912|	Skep Fasilitas BKPM					       |
|913|	Skep Fasilitas Pertambangan			       |
|915|	Skep Fasilitas Impor Sementara			   |
|918|	Srt.Keterangan Label Bahasa Indonesia	   |
|919|	Surat Keputusan Kendaraan Bermotor		   |
|998|	Skep Fasilitas Kemudahan Ekspor		       |
|999|	Dokumen lainnya						       |
::: 

::: details Jenis Dokumen Lartas
### Jenis Dokumen Lartas
|Tipe     |Nama Dokumen							   |
| --------|:--------------------------------------:|
|800	  |Sertifikat alat perangkat telekom/Postel|
|803	  |SATS LN / Dephut						   |
|805	  |Registrasi B3 / KLH					   |
|808	  |Ijin Impor / Polri					   |
|810	  |SM/SPM								   |
|811	  |SIE									   |
|813	  |Dok. Cukai (CK)						   |
|814	  |Skep/Ijin Ekspor Berkala				   |
|815	  |Skep/Ijin Barang Tata Niaga Ekspor	   |
|834	  |SNI Gula Kristal Mentah / Deptan		   |
|835	  |Izin dan/atau Pendaft Pestisida / Deptan|
|836	  |izin impor / Deptan					   |
|842	  |SNI / ESDM							   |
|843	  |Nomor Pelumas Terdaftar / ESDM		   |
|844	  |Ijin Usaha Niaga/IU Niaga Terbatas/ESDM |
|845	  |Rekomendasi Impor Pelumas / ESDM		   |
|846	  |SKEM									   |
|851	  |Surat Ijin Karantina Tanaman			   |
|853	  |Surat Ijin Karantina Hewan / Ikan	   |
|854	  |Surat Persetujuan Impor BPOM			   |
|856	  |Lap. Pemeriksaan Surveyor (LPS-E)	   |
|857	  |Fumigation Certificate				   |
|858	  |Cites Certificate					   |
|871	  |Nomor Pendaftaran Alat Kesehatan/Depkes |
|872	  |Laporan Surveyor / Depkes			   |
|873	  |IP (Narktk, Prekursor & Psikotr)/Depkes |
|874	  |IT (Prekursor & Psikotropika) / Depkes  |
|875	  |SPI (Narktk, Prekursor & Psikotr)/Depkes|
|888	  |Pengecualian Perijinan Tanpa Surat	   |
|902	  |Persetujuan Impor / Bapeten			   |
|942	  |Izin Impor Karantina Tumbuhan		   |
|943	  |KH-5/Izin Impor Karantina Hewan		   |
|944	  |KH-7/Izin Impor Karantina Hewan		   |
|945	  |KH-12/Izin Impor Karantina Hewan		   |
|946	  |KID-3/Izin Impor Karantina Ikan		   |
|947	  |KID-15/Izin Impor Karantina Ikan		   |
|948	  |NPIK									   |
|949	  |Pengakuan Sbg Imp. Produsen			   |
|956	  |Pengakuan Sbg Imp. Terdaftar			   |
|957	  |SNI/SPB / Depdag						   |
|958	  |Laporan Surveyor / Depdag			   |
|959	  |Srt Persetj Impor Dep. Dag.			   |
|993	  |Surat Ijin Menteri Pertanian			   |
:::

## Pembuatan PIB Melalui Shipment
1.	Pada menu **Shipment** dokumen yang sudah melengkapi **Purchase Order** nya, akan berstatus **Ready**
2.	User dapat memilih dokumen tersebut dengan mengklik nomor **Shipment** tersebut dan klik tombol **Convert to PIB**
3.	Maka akan secara otomatis membuatkan dokumen **PIB** dan memiliki detail berdasarkan data **Shipment** tersebut