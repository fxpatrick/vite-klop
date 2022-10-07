# Master Barang
**Master Barang** akan menyimpan seluruh infomrasi dari setiap barang

## Pembuatan Data
untuk melakukan pembuatan **Master Data Barang** dapat dilakukan melalui beberapa cara yaitu:

### Pembuatan Manual
1. Klik tombol **Create New**
2. Mengisikan informasi data yang wajib diisi, data yang wajib diisi memiliki lambang *
3. Klik tombol **Save**
4. Klik tombol **Activate**, agar barang tersebut dapat diggunakan pada dokumen pabean nantinya
5. Apabila barang tersebut tidak akan digunakan kembali, maka user dapat menekan tombol **Deactivate**

### Menggunakan Import
1. Klik menu **Integrasi Data**
2. Pilih **Import Data**
3. Klik tombol **Create New**
4. Pada **Jenis Impor** pilih **Barang**
5. Klik tombol **Unduh Template**
:::info
Apabila user memiliki template barang sendiri, maka user tidak perlu megunduh template, user dapat langsung menuju ke point 6
:::
|Kolom    |Wajib Terisi |Deskripsi                             |
|:-------------|:--------|:---------------------------------------|
|Kode|Ya|Dapat diisi dengan kode barang yang diinginkan|
|Deskripsi|Ya|diisi dengan deskripsi barang|
|Model||diisi dengan model barang|
|Tipe||diisi dengan tipe barang|
|Spesifikasi||diisi dengan spesifikasi barang|
|Satuan|Ya|diisi dengan jenis satuan barang ( Ex: **PC** untuk **PCE**)|
|NO HS||disii dengan HSCode barang ( Ex: **01012900** )|
|Negara Asal||diisi dengan negara asal barang ( Ex: **ID** untuk **Indonesia** )|
|Daerah||diisi dengan daerah asal barang|
|Netto||diisi dengan berat bersih barang|
|Brutto||diisi dengan berat kotor barang|
|Volume||diisi dengan volume ukuran barang|
6. Lampirkan file template yang sudah dilengkapi, apabila user menggunakan template mapping sendiri, maka untuk **Default Index** harus memilih **Tidak**
:::warning
Apabila user menggunakan template sendiri, maka user harus terlebih dahulu melakukan [Setting Import Mapping](/overview/importmapping) untuk **Barang**
:::
7. Klik **Save**

### CDMS KB
Apabila user adalah pengusaha **KB** dan menggunakan **CDMS SMART**, maka user dapat mengirimkan seluruh data **Master Barang** pada **CDMS KB** ke **Master Barang Klerance One Portal**

[Integrasi CDMS KB](/klrkb/cdmskb/)

## Bill Of Material ( BOM )
Apabila barang tersebut tergolong sebagai **Barang Jadi**, maka user dapat menambahkan informasi bahan penyusunnya pada tab **Bill of Material**
:::info Contoh:
**Barang Jadi**
|Kode Barang  |Deskripsi|
|:-------------|:--------|
|KURSI-001     | KURSI KAYU XRC V |

**Bahan Penyusun KURSI-001**
|Kode Barang  |Deskripsi | Quantity |
|:-------------|:--------|:---------|
|KAYU-001     | KAYU     | 5        |
|RODA-001     | RODA     | 3        |
|PAKU-001     | PAKU 5mm | 20       |

Maka untuk barang **Kayu, Rode, & Paku** perlu ditambahkan pada tab **Bill Of Material** dengan quantity untuk setiap pembuatan satu kursi
:::

## Konversi UOM
Konversi UOM berguna untuk mendata nilai konversi dari satuan yang dituju
:::info Contoh:
**Barang KURSI-001**
|Kode Barang  |Deskripsi| Satuan |
|:-------------|:--------|:-------|
|KURSI-001     | KURSI KAYU XRC V | TNE |

Memiliki beberapa konversi uom
|Satuan Barang | Satuan Tujuan |Jumlah Konversi Satuan|
|:-------------|:--------|:----------------------|
|TNE           | KG      | 1000  |
|TNE           | ONS     | 1000000 |

Contoh
|Kode Barang  |Deskripsi| Satuan Tujaun | Quantity Tujuan
|:-------------|:--------|:-------|:-------|
|KURSI-001     | KURSI KAYU XRC V | KG | 1000|

Maka dari data ini nanti, system akan melakukan konversi **1000 KG** menjadi **1 TNE**

Maka dengan data konveri ini, ketika nati barang tersebut digunakan, dan untuk **Satuan Barang** nya adalah **KG**, maka secara otomatis system akan menghitungkan konverinya dengan otomatis sesuai tanggal berlaku nya
:::warning
Apabila tanggal dokumen BC sebelum tanggal berlaku, maka konversi uom ini tidak akan digunakan
:::

## Mapping Barang
Mapping Barang bertujuan untuk mendata nama barang tersebut pada vendor yang dituju
:::info Contoh:
**Barang Internal**
|Kode Barang  |Deskripsi|
|:-------------|:--------|
|KURSI-001     | KURSI KAYU XRC V |

Pada vendor **PT. Solusi Manufaktur**, untuk **KURSI-001** adalah **K001**, maka perlu diisi pada mapping barang sebagai berikut:
|Kode Barang Vendor |Deskripsi Barang Vendor|
|:-------------|:--------|
|K001    | KURSI KAYU XRC V |

Sehingga ketika pihak internal melakukan pemesanan atau pengiriman barang dengan kode barang **KURSI-001**, pihak vendor atau shipment akan menerima barang dokumen BC dengan kode barang **K001**
:::