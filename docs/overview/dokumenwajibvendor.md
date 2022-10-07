# Dokumen Wajib Vendor
Pada menu ini Anda dapat mendefinisikan dokumen apa yang wajib disediakan oleh vendor dengan menggunakan bantuan template dalam format excel file.

## Pembuatan Dokumen Wajib Vendor
1. Klik **Master**
2. Klik **Dokumen Vendor**
3. Klik **Download**
4. Isi template dengan penjelasan sebagai berikut

|Paramaters    |Condition|Description                             |
|:-------------|:--------|:---------------------------------------|
|Tipe Shipment|Required|Dapat diisi dengan tipe shipment yang diinginkan|
|Nama|Required|Nama dokumen, jika merupakan dokumen yang tersimpan pada modul PIB, maka berikan namanya.<br>Contoh: Packing List|
|Kode Dokumen|Required|Kode dokumen, jima merupakan dokumen yang tersimpan pada modul PIB, maka berikan kodenya.<br>Contoh: 217|
|Mandatory|Required|Disikan <code>FALSE</code> jika tidak wajib disediakan, dan sebaliknya diisikan <code>TRUE</code> jika wajib disediakan|
:::info
Untuk **Kode Dokumen** yang tidak terisi, maka system akan secara otomatis menandakan bahwa dokumen tersebut tidak akan terkonversi ke PIB
:::
5. Klik **Upload**
:::warning
Setiap kali template diupload ulang, maka data sebelumnya akan ditimpa dengan data yang baru saja diupload
:::