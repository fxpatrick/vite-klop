# API

## API Key
Untuk mendapatkan **API Key**, Anda dapat mengikuti langkah di bawah ini
::: info
Silahkan pastikan Anda sudah memiliki Akun dan Perusahaan yang terdaftar pada Klearance
:::

1.	Klik **Username** Anda pada bagian pojok kanan atas
2.	Klik **Profil**
1.  Klik **Profil** pada bagian kiri
4.	Klik tombol **Buat API Key**

::: warning
jika tombol **Buat API Key** diklik untuk kedua kalinya, maka API Key sebelumnya tidak akan bisa dipakai kembali
:::

## Header Paramater
1.	Kunjungi [Klearance API Technical Documentation](https://dev.api.klearance.online/redoc)
2.  Pada bagian **Authorizations** klik tombol panah
3.	Copy nama parameter pada **Header Paramater Name**

## Account
### Url
|Method	|Url                                                         |
|:-------|:------------------------------------------------------------|
|POST	|https://dev.api.klearance.online/{tenantcode}/Account/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik **Username** anda
2.	Pilih **Profile**
3.	Pilih **Perusahaan**
4.	Ambil nama perusahaan

|Paramaters|Description|
|:-------|:----------------------------------------------------------------|
|<code>{tenantcode}</code>|	Diisikan dengan nama perusahaan, Ex: https://app.klearance.online/Sentosa maka Sentosa adalah nama perusahaan yang akan diisikan pada {tenantcode} HTTP Method tersebut|

### Body
```json
{
    "data": [
      {
        "code": "B001",
        "name": "PT. SENTOSA RAYA",
        "address": "JL. Pertamburan Raya Cakung Barat no 12",
        "zipcode": "12731",
        "phone": "0219720412",
        "fax": " ",
        "bondedtype": "BZ",
        "countrycode": "ID",
        "npwp": "012454930431000",
        "niper": " ",
        "tpbno": " ",
        "tpbdate": "2019-08-24T14:15:22Z",
        "kpbccode": "040300",
        "currencycode": "USD",
        "importerstatus": "1",
        "apitype": " ",
        "apinumber": " ",
        "nik": " ",
        "accountstatus": "90",
        "parentaccount": " ",
        "deletion": false
      }
    ]
  }
```

|Paramaters    |Condition|Description                             |
|:-------------|:--------|:---------------------------------------|
|<code>code</code>	       |Required |Kode perusahaan (Ex: B001)|
|<code>name</code>	       |Required |Nama perusahaan|
|<code>address</code>       |		 |Alamat perusahaan|
|<code>zipcode</code>     |		 |Zipcode perusahaan|
|<code>phone</code>       |		 |Nomor telepon perusahaan|
|<code>fax</code>        |		 |Nomor fax perusahaan|
|<code>bondedtype</code>    |Required |Jenis fasilitas perusahaan diisikan dengan kode ( Ex: BZ)<br>BW – Gudang Berikat<br>BZ – Kawasan Berikat<br>FTZ – Kawasan Perdagangan Bebas<br>LOC – Lokal<br>OVR – Luar Negeri<br>PLB – Logistik Berikat|
|<code>countrycode</code>  |		 |Diisikan dengan kode negara ( Ex :ID untuk Indonesia)|
|<code>npwp</code>       |Required |Nomor npwp perusahaan|
|<code>niper</code>       |		 |Nomor niper perusahaan|
|<code>tpbno</code>        |		 |Nomor tpb perusahaan|
|<code>tpbdate</code>     |		 |Tanggal tpb perusahaan|
|<code>kpbccode</code>      |		 |Kode kantor kpbc pengawas ( Ex: 040300 untuk KPU Tanjung Priok)|
|<code>currencycode</code>  |		 |Kode mata uang ( Ex: USD untuk United State Dollar)|
|<code>importerstatus</code>|		 |Diisikan dengan kode importer status ( Ex: 1)<br>1 – Importer Umum<br>2 – Importer Produsen<br>12 – Importer Umum & Importir Produsen<br>A – AEO<br>M – Mitra Utama<br>L – Lainnya<br>AM – AEO & Mitra Utama<br>AL – AEO & Lainnya<br>ML – Mitra Utama & Lainnya|
|<code>apitype</code>      |		 |Diisikan dengan tipe api ( Ex: 1)<br>1 – APIU<br>2 – APIP|
|<code>apinumber</code>    |		 |nomor api|
|<code>nik</code>          |		 |Nik perusahaan|
|<code>accountstatus</code>|		 |Diisikan dengan kode status akun ( Ex: 90 untuk Lainnya)<br>10 – Koperasi<br>20 – PMDN(Migas)<br>21 – PMDN(Non-Migas)<br>30 – PMA(Migas)<br>31 – PMA(Non-Migas)<br>40 – BUMN<br>41 – BUMD<br>60 – Perorangan<br>70 – Usaha Mikro, Kecil dan Menengah ( UMKM )<br>90 – Lainnya|
|<code>parentaccount</code> |		 |Diisikan dengan kode akun induk jika ada|
|<code>deletion</code>	| |	Indikator yang berguna untuk mengetahui apakah akun tersebut sudah dihapus pada ERP. <br> Jika <code>true</code>, maka akun tersebut tidak akan dapat digunakan, dan status akun tersebut akan menjadi Tidak Aktif <br> Jika <code>false</code>, maka akun tersebut dapat digunakan, dan status akun tersebut akan menjadi Aktif

## Product

|Method	|Url                                                         |
|:------|:----------------------------------------------------------|
|POST	|https://dev.api.klearance.online/{tenantcode}/Product/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik **Username** anda
2.	Pilih **Profile**
3.	Pilih **Perusahaan**
4.	Ambil nama perusahaan

|Paramaters|	Description|
|:------|:----------------------------------------------------------|
|<code>{tenantcode}</code>|	Diisikan dengan nama perusahaan, Ex: https://app.klearance.online/Sentosa maka Sentosa adalah nama perusahaan yang akan diisikan pada {tenantcode} HTTP Method tersebut|

### Body
```json
{
    "data": [
      {
        "code": "BS-001",
        "description": "Tiang Besi",
        "uomcode": "PCE",
        "hscode": "01012100",
        "countryorigin": "ID",
        "district": " ",
        "netweight": 0,
        "grossweight": 0,
        "volume": 0,
        "type": " ",
        "spf": " ",
        "model": " ",
        "extra1": " ",
        "extra2": " ",
        "extra3": " ",
        "extra4": " ",
        "mapping": [
          {
            "accountcode": "B001",
            "accountname": "PT. SENTOSA RAYA",
            "description": "Tiang Besi",
            "code": "BS-001"
          }
        ]
      }
    ]
  }
```
Apabila ingin menambahkan mapping menjadi dua atau lebih, user dapat menyalin isi table didalam { } dan ditambahkan koma setelah tutup kurung sebelum memulai buka kurung yang baru Contoh:

```json
"mapping": [
          {
            "accountcode": "B001",
            "accountname": "PT. SENTOSA RAYA",
            "description": "Tiang Besi",
            "code": "BS-001"
          },
          {
            "accountcode": "B002",
            "accountname": "PT. INDONESIA RAYA",
            "description": "Tiang Besi",
            "code": "BS-001"
          }
]
```

|Paramaters	|Condition	|Description|
|:---------|:-----------|:-----------|
|<code>code</code>	|Required|	Kode barang ( Ex: BS-001)
|<code>description</code>	|Required|	Deskirpsi barang
|<code>uomcode</code>	|Required|	Satuan barang, diisikan dengan kode satuan ( Ex: PCE untuk Piece)
|<code>hscode</code>|		|Nomor hscode
|<code>countryorigin</code>|		|Negara asal ( Ex : ID untuk Indonesia)
|<code>district</code>	||	Daerah asal
|<code>netweight</code>	||	Nilai berat bersih
|<code>grossweight</code>	||	Nilai berat kotor
|<code>volume</code>	||	Nilai volume
|<code>type</code> ||		Tipe barang
|<code>spf</code>	||	spesifikasi
|<code>model</code>	||	model
|<code>extra1</code>	||	Informasi tambahan
|<code>extra2</code>	||	Informasi tambahan
|<code>extra3</code>	||	Informasi tambahan
|<code>extra4</code>	||	Informasi tambahan
|<code>accountcode</code>	|Required|	Kode perusahaan ( Ex: B001)
|<code>accountname</code>	|Required|	Nama perusahaan ( Ex: PT. SENTOSA RAYA)
|<code>description</code>	|Required|	Deskirpsi barang
|<code>code</code>	|Required|	Kode barang ( Ex: BS-001)

## Purchase Order

|Method	|Url|
|:------|:----|
|POST	|https://dev.api.klearance.online/{tenantcode}/PurchaseOrder/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik **Username** anda
2.	Pilih **Profile**
3.	Pilih **Perusahaan**
4.	Ambil nama perusahaan

|Paramaters	|Description|
|:----------|:----------|
|<code>{tenantcode}</code>|Diisikan dengan nama perusahaan, Ex: https://dev.klearance.online/Sentosa maka Sentosa adalah nama perusahaan yang akan diisikan pada {tenantcode} HTTP Method tersebut

```json
{
    "data": [
      {
        "organizationcode": " ",
        "pono": "PO-001",
        "podate": "2022-06-16T14:15:22Z",
        "suppliercode": "B001",
        "suppliername": "PT. SENTOSA RAYA",
        "currencycode": "USD",
        "transporttype": "1",
        "referenceno": " ",
        "loadingportcode": "IDTPP",
        "unloadingportcode": "IDTPP",
        "details": [
          {
            "lineno": "1",
            "productcode": "KO01",
            "productname": "KO001",
            "uomcode": "PCE",
            "quantity": 200,
            "price": 5,
            "totalprice": 1000,
            "quantityreceipt": 100,
            "deletion": false,
            "externalmodifiedon": "2022-08-17",
            "completed": false
          }
        ]
      }
    ]
  }
```
Apabila ingin menambahkan detail menjadi dua atau lebih, user dapat menyalin isi table didalam { } dan ditambahkan koma setelah tutup kurung sebelum memulai buka kurung yang baru Contoh: 

```json
"details": [
          {
            "lineno": "1",
            "productcode": "KO01",
            "productname": "KO001",
            "uomcode": "PCE",
            "quantity": 100,
            "price": 1,
            "totalprice": 100,
            "quantityreceipt": 10,
            "deletion": false,
            "externalmodifiedon": "2022-08-17",
            "completed": false
          },
          {
            "lineno": "2",
            "productcode": "LIP001",
            "productname": "LIP",
            "uomcode": "PCE",
            "quantity": 100,
            "price": 2,
            "totalprice": 200,
            "quantityreceipt": 20,
            "deletion": false,
            "externalmodifiedon": "2022-08-17",
            "completed": false
          }
        ]
```
|Paramaters	|Condition|	Description|
|:----------|:-------|:----------|
|<code>organizationcode</code>| |	Kode organisasi
|<code>pono</code>|	Required|	Nomor po ( Ex: PO-001)|
|<code>podate</code>	|Required|	Tanggal po, format tanggal: yyyy-mm-dd
|<code>suppliercode</code>	|Required|	Kode supplier ( Ex: B001)
|<code>suppliername</code>	|Required|	Nama supplier
|<code>currencycode</code>|		|Kode mata uang ( Ex: USD untuk United State Dollar)
|<code>transporttype</code>|		|Diisikan dengan nomor jenis transport ( Ex: 1)<br>1 - Lainnya<br>2 - Instalasi/Pipa<br>3 - Perairan<br>4 - Multimoda<br>5 - Pos<br>6 - Udara<br>7 - Darat<br>8 - Kerata Api<br>9 - Laut
|<code>referenceno</code>|		|Nomor referensi supplier
|<code>loadingportcode</code>|		|Kode pelabuhan muat ( Ex: IDTPP untuk Tanjung Priok)
|<code>unloadingportcode</code>|		|Kode pelabuhan bongkar ( Ex: JPTYO untuk Tokyo)
|<code>lineno</code>| | seri barang
|<code>productcode</code>	|Required|	Kode barang PO ( Ex: KO01)
|<code>productname</code>	|Required|	Nama barang PO 
|<code>uomcode</code>	|Required|	Kode satuan barang ( Ex: PCE untuk Piece)
|<code>quantity</code>	|Required|	Jumlah barang
|<code>price</code>	| |	Harga satuan barang
|<code>totalprice</code>	|Required|	Harga total barang
|<code>quantityreceipt</code>	| |	Jumlah barang yang sudah diterima
|<code>deletion</code>	| |	Indikator yang berguna untuk mengetahui apakah detail barang tersebut sudah dihapus pada ERP. <br> Jika <code>true</code>, maka detail barang tersebut akan diabaikan <br> Jika <code>false</code>, maka detail barang tersebut akan tetap dapat digunakan
|<code>externalmodifiedon</code>	| |	Tanggal terakhir data di-modifikiasi
|<code>completed</code>	| |	Indikator yang berguna untuk mengetahui apakah detail barang tersebut sudah diterima secara utuh pada ERP. <br> Jika <code>true</code>, maka PO tersebut sudah tidak lagi dapat digunakan saat pembuatan dokumen PIB <br> Jika <code>false</code>, maka PO tersebut dapat digunakan saat pembuatan dokumen PIB 
