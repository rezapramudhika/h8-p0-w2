//Tugas 2
/*SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR*/

var pagar = '';
for(var index1=1; index1<=10; index1++){
    for( var index2=0; index2<=10; index2++){
        pagar += '#';
    }
    console.log(pagar);
    pagar = '';
}