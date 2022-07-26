# API
## Header Paramater
1.	Pada bagian **Authorizations** klik tombol panah
2.	Copy **Header Paramater Name**
3.	Masukkan pada bagian Headers Key
4.	Untuk mendapatkan Value Key API, user dapat menuju Klearance One Portal
5.	Klik Username anda
6.	Pilih Profile
7.	Klik tombol Buat API Key
8.	Lalu pada kolom API Key akan muncul valuenya, lalu di copy saja value tersebut
9.	Setelah di salin user dapat meletakkan nya pada Value Key API

## Account
### Url
|Method	|Url                                                         |
|:-------|:------------------------------------------------------------|
|POST	|https://dev.api.klearance.online/{tenantcode}/Account/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik Username anda
2.	Pilih Profile
3.	Pilih Perusahaan
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
        "parentaccount": " "
      }
    ]
  }
```

|Paramaters    |Condition|Description                             |
|:-------------|:--------|:---------------------------------------|
|code	       |Required |Kode perusahaan (Ex: B001)|
|name	       |Required |Nama perusahaan|
|address       |		 |Alamat perusahaan|
|zipcode       |		 |Zipcode perusahaan|
|phone         |		 |Nomor telepon perusahaan|
|fax           |		 |Nomor fax perusahaan|
|bondedtype    |Required |Jenis fasilitas perusahaan diisikan dengan kode ( Ex: BZ)<br>BW – Gudang Berikat<br>BZ – Kawasan Berikat<br>FTZ – Kawasan Perdagangan Bebas<br>LOC – Lokal<br>OVER – Luar Negri<br>PLB – Logistik Berikat|
|countrycode   |		 |Diisikan dengan kode negara ( Ex :ID untuk Indonesia)|
|npwp          |Required |Nomor npwp perusahaan|
|niper         |		 |Nomor niper perusahaan|
|tpbno         |		 |Nomor tpb perusahaan|
|tpbdate       |		 |Tanggal tpb perusahaan|
|kpbccode      |		 |Kode kantor kpbc pengawas ( Ex: 040300 untuk KPU Tanjung Priok)|
|currencycode  |		 |Kode mata uang ( Ex: USD untuk United State Dollar)|
|importerstatus|		 |Diisikan dengan kode importer status ( Ex: 1)<br>1 – Importer Umum<br>2 – Importer Produsen<br>12 – Importer Umum & Importir Produsen<br>A – AEO<br>M – Mitra Utama<br>L – Lainnya<br>AM – AEO & Mitra Utama<br>AL – AEO & Lainnya<br>ML – Mitra Utama & Lainnya|
|apitype       |		 |Diisikan dengan tipe api ( Ex: 1)<br>1 – APIU<br>2 – APIP|
|apinumber     |		 |nomor api|
|nik           |		 |Nik perusahaan|
|accountstatus |		 |Diisikan dengan kode status akun ( Ex: 90 untuk Lainnya)<br>10 – Koperasi<br>20 – PMDN(Migas)<br>21 – PMDN(Non-Migas)<br>30 – PMA(Migas)<br>31 – PMA(Non-Migas)<br>40 – BUMN<br>41 – BUMD<br>60 – Perorangan<br>70 – Usaha Mikro, Kecil dan Menengah ( UMKM )<br>90 – Lainnya|
|parentaccount |		 |Diisikan dengan kode akun induk jika ada|

## Product

|Method	|Url                                                         |
|:------|:----------------------------------------------------------|
|POST	|https://dev.api.klearance.online/{tenantcode}/Product/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik Username anda
2.	Pilih Profile
3.	Pilih Perusahaan
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
Apabila ingin menambahkan mapping menjadi dua atau lebih, user dapat menyalain isi table didalam { } dan ditambahkan koma setelah tutup kurung sebelum memulai buka kurung yang baru Contoh:

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
|code	|Required|	Kode barang ( Ex: BS-001)
|description	|Required|	Deskirpsi barang
|uomcode	|Required|	Satuan barang, diisikan dengan kode satuan ( Ex: PCE untuk Piece)
|hscode|		|Nomor hscode
|countryorigin|		|Negara asal ( Ex : ID untuk Indonesia)
|district	||	Daerah asal
|netweight	||	Nilai berat bersih
|grossweight	||	Nilai berat kotor
|volume	||	Nilai volume
|type ||		Tipe barang
|spf	||	spesifikasi
|model	||	model
|extra1	||	Informasi tambahan
|extra2	||	Informasi tambahan
|extra3	||	Informasi tambahan
|extra4	||	Informasi tambahan
|accountcode	|Required|	Kode perusahaan ( Ex: B001)
|accountname	|Required|	Nama perusahaan ( Ex: PT. SENTOSA RAYA)
|description	|Required|	Deskirpsi barang
|code	|Required|	Kode barang ( Ex: BS-001)

## Purchase Order

|Method	|Url|
|:------|:----|
|POST	|https://dev.api.klearance.online/{tenantcode}/PurchaseOrder/upload|

Metode yang digunakan adalah POST, untuk {tenantcode} sendiri diisikan dengan nama perusahaan, untuk mendapatkan nama perusahan, user dapat melakukan:
1.	Klik Username anda
2.	Pilih Profile
3.	Pilih Perusahaan
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
            "productcode": "KO01",
            "productname": "KO001",
            "uomcode": "PCE",
            "quantity": 100,
            "price": 1
          }
        ]
      }
    ]
  }
```
Apabila ingin menambahkan detail menjadi dua atau lebih, user dapat menyalain isi table didalam { } dan ditambahkan koma setelah tutup kurung sebelum memulai buka kurung yang baru Contoh: 

```json
"details": [
          {
            "productcode": "KO01",
            "productname": "KO001",
            "uomcode": "PCE",
            "quantity": 100,
            "price": 1
          },
          {
            "productcode": "LIP001",
            "productname": "LIP",
            "uomcode": "PCE",
            "quantity": 100,
            "price": 2
          }
        ]
```
|Paramaters	|Condition|	Description|
|:----------|:-------|:----------|
|organizationcode| |	Kode organisasi
|pono|	Required|	Nomor po ( Ex: PO-001)|
|podate	|Required|	Tanggal po, format tanggal: yyyy-mm-dd
|suppliercode	|Required|	Kode supplier ( Ex: B001)
|suppliername	|Required|	Nama supplier
|currencycode|		|Kode mata uang ( Ex: USD untuk United State Dollar)
|transporttype|		|Diisikan dengan nomor jenis transport ( Ex: 1)<br>1 - Lainnya<br>2 - Instalasi/Pipa<br>3 - Perairan<br>4 - Multimoda<br>5 - Pos<br>6 - Udara<br>7 - Darat<br>8 - Kerata Api<br>9 - Laut
|referenceno|		|Nomor referensi supplier
|loadingportcode|		|Kode pelabuhan muat ( Ex: IDTPP untuk Tanjung Priok)
|unloadingportcode|		|Kode pelabuhan bongkar ( Ex: JPTYO untuk Tokyo)
|productcode	|Required|	Kode barang PO ( Ex: KO01)
|productname	|Required|	Nama barang PO 
|uomcode	|Required|	Kode satuan barang ( Ex: PCE untuk Piece)
|quantity	|Required|	Jumlah barang
|price	|Required|	harga satuan barang
