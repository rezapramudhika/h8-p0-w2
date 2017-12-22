//Tugas 1
/*TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"*/

var total = 0;
for(var index=1; index<=100; index++){
    if (index%2 === 0){
        total = total+index;
    }else if(index%2 !== 0){
        total = total-index;
    }
}
console.log('TOTAL: '+total);