# API
## Header Paramater
1.	Kunjungi [Klearance API](https://dev.api.klearance.online/redoc)
2.  Pada bagian **Authorizations** klik tombol panah
3.	Copy value **Header Paramater Name**
5.	Untuk mendapatkan **Value Key API**, user dapat menuju Klearance One Portal
6.	Klik **Username** anda
7.	Pilih **Profile**
8.	Klik tombol **Buat API Key**
9.	Lalu pada kolom **API Key** akan muncul valuenya, lalu di copy saja value tersebut

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
        "parentaccount": " "
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
|<code>bondedtype</code>    |Required |Jenis fasilitas perusahaan diisikan dengan kode ( Ex: BZ)<br>BW – Gudang Berikat<br>BZ – Kawasan Berikat<br>FTZ – Kawasan Perdagangan Bebas<br>LOC – Lokal<br>OVR – Luar Negri<br>PLB – Logistik Berikat|
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
Apabila ingin menambahkan detail menjadi dua atau lebih, user dapat menyalin isi table didalam { } dan ditambahkan koma setelah tutup kurung sebelum memulai buka kurung yang baru Contoh: 

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
|<code>productcode</code>	|Required|	Kode barang PO ( Ex: KO01)
|<code>productname</code>	|Required|	Nama barang PO 
|<code>uomcode</code>	|Required|	Kode satuan barang ( Ex: PCE untuk Piece)
|<code>quantity</code>	|Required|	Jumlah barang
|<code>price</code>	|Required|	harga satuan barang
