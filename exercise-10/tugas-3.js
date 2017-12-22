//Tugas 3
/*SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR*/

var bintang = '';
for(var index1=1; index1<=10; index1++){
    for( var index2=0; index2<=index1; index2++){
        bintang += '*';
    }
    console.log(bintang);
    bintang = '';
}