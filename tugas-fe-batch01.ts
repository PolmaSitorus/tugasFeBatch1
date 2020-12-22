/* 
IDE
- saya sering belanja online
- pernah ngobrol sama kurir ekspedisi, bahwa si kurir tidak bisa melaporkan secara online paket yg dia bawa apakah sudah terkirim apa belum secara real-time, oleh karena itu dia selalu di curigai mencuri waktu kerja.

program terdiri dari 3 fungsi
isi paket kiriman yg mau di kirim
1. tambahPaket()
menerima 3 parameter
- barkode
- nama penerima
- array penampung
RULES
- nomor barkode tidak boleh sama,
- barcode di baca/di input dengan App QR&Barcode Reader yg ada di smartphone

berikan paket kiriman kepada si penerima
2. paketTerkirim()
- barcode di baca/di input dengan App QR&Barcode Reader yg ada di smartphone
- set status terkirim = true
3. laporan()
- melaporakan jumlah paket
- melaporakan jumlah paket sukses terkirim
- melaporakan jumlah paket gagal terkirim


YANG DIPELAJARI..
menerapkan type data TUPLES ARRAY 

PENGEMBANGAN SISTEM
1. kalo terkirim siapa penerima selain penerima sebenarnya dan mencatat hubungan dengan penerima (orang serumah, keluarga, pak.rt, satpam komplek dll)
2. alasan gagal terkirim
*/

//var paket: [barcod: number, nama: string, terkirim: boolean] = [12568, 'adi', false];
var paket: [barcod: number, nama: string, terkirim: boolean] = [0, '', false];

tambahPaket(12568, 'adi', paket)
tambahPaket(22568, 'idi', paket)
tambahPaket(32568, 'udi', paket)
tambahPaket(42568, 'edi', paket)
tambahPaket(52568, 'odi', paket)

//console.log(paket)
paketTerkirim(12568, paket)
paketTerkirim(32568, paket)
paketTerkirim(52568, paket)

laporan(paket);

function laporan(arrPaket) {
    console.log('Laporan Pengiriman Paket, Tanggal : ')
    console.log('-------------------------------------')
    console.log('No Barcode Penerima  Status')
    console.log('-------------------------------------')
    var j = 0
    var n = 1
    var s = 0
    var g = 0
    for (var i = 0; i < (arrPaket.length / 3); i++) {
        console.log(' ' + n + ' ' + arrPaket[j] + '   ' + arrPaket[j + 1] + '       ' + arrPaket[j + 2])
        if (arrPaket[j + 2] == true) {
            s++
        } else {
            g++
        }
        j = j + 3
        n++
    }
    console.log('-------------------------------------')
    console.log('Jumlah Paket ' + i)
    console.log('Jumlah Sukses ' + s)
    console.log('Jumlah Gagal ' + g)
}


function tambahPaket(barcod, nama, arrPaket) {
    //mengisi paket pertama
    if (arrPaket.length == 3 && arrPaket[0] == 0) {
        arrPaket[0] = barcod
        arrPaket[1] = nama
        arrPaket[2] = false
    } else {   //mengisi paket berikutnya
        arrPaket.push(barcod, nama, false)
    }
    return arrPaket
}

function paketTerkirim(barcod, arrPaket) {
    for (var i = 0; i < paket.length; i++) {
        //console.log('isi paket ke ' + i + ' ' + paket[i])
        if (paket[i] == barcod) {
            paket[i + 2] = true
        }
    }
    return arrPaket
}