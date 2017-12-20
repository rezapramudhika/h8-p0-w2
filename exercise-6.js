
console.log('Ganjil Genap')
for (var i=1; i<=100; i++){
    if (i%2 == 0){
        console.log(i+' - GENAP');
    }else if (i%2 != 0){
        console.log(i+' - GANJIL');
    }
}

console.log('Pertambahan counter 2')
for (var i=1; i<100; i+=2){
    if (i%3 == 0){
        console.log(i+' KELIPATAN 3');
    }else{
        console.log(i+' bukan kelipatan 3');
    }
}

console.log('Pertambahan counter 5')
for (var i=1; i<100; i+=5){
    if (i%6 == 0){
        if(i<=100)
        console.log(i+' KELIPATAN 6');
    }else{
        console.log(i+' bukan kelipatan 6');
    }
}

console.log('Pertambahan counter 9')
for (var i=1; i<100; i+=9){
    if (i%10 == 0){
        console.log(i+' KELIPATAN 10');
    }else{
        console.log(i+' bukan kelipatan 10');
    }
}