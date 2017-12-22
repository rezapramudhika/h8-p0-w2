//Tugas 3
/*MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF*/

var tahun = 1995;
if(tahun % 4 === 0){
    if(tahun % 100 !== 0){
        console.log(tahun+' adalah tahun kabisat');
    }else{
        if(tahun % 400 === 0){
            console.log(tahun+' adalah tahun kabisat');
        }else{
            console.log(tahun+' adalah bukan tahun kabisat');
        }        
    }
    
}else{
    console.log(tahun+' adalah bukan tahun kabisat');
}
