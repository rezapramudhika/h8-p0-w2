var nama = 'Mikael';
var peran = 'Ksatria';
var tahunLahir = 1995;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

console.log('Selamat datang di Dunia Proxytia, '+nama);

if(nama === ''){
    peran = 'kacung';
}else if (peran === 'Ksatria'){
    console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu!');
}else if(peran === 'Tabib'){
    console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka.');
}else if(peran === 'Penyihir'){
    console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}else if(peran === ''){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
}

console.log('Player Health = '+playerHealth);
console.log('Monster Health = '+monsterHealth);

for (var i=0; i<=tahunLahir; i++){
    if(i%umur === 0){
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth = monsterHealth-umur;
    }else if(i%kodeMonster === 0){
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth = playerHealth-kodeMonster;
    }else if(i%umur === 0 && i%kodeMonster === 0){
        console.log('Health keduanya bertambah');
        playerHealth = playerHealth+kodeMonster;
        monsterHealth = monsterHealth+umur;
    }
}

console.log('Player Health = '+playerHealth);
console.log('Monster Health = '+monsterHealth);

if(playerHealth>monsterHealth){
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}else if(monsterHealth>playerHealth){
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}