
/*
QUIZ - Javascript week 2
1. Terdiri dari 10 soal seputar materi javascript phase-0 week-2 dengan dua pilihan jawaban yaitu a dan b.
2. User dapat memilih level soal, terdiri dari:
    level 1 = Terdiri dari 5 soal, jawaban benar +20, jawaban salah -10
    level 2 = Terdiri dari 10 soal, jawaban benar +10, jawaban salah -10
    level 3 = Terdiri dari 10 soal, jawaban benar +10, jawaban salah -20
3. Setiap sesi urutan soal akan diacak
4. Diakhir quiz sistem akan memberikan predikat berdasarkan skor akhir yang didapat, dimana:
    - skor akhir <25 akan mendapat predikat 'Sangat Buruk'
    - skor akhir 26-60 akan mendapat predikat 'Buruk'
    - skor akhir 61-75 akan mendapat predikat 'Baik'
    - skor akhir 76-99 akan mendapat predikat 'Sangat Baik'
    - skor akhir 100 akan mendapat predikat 'Nilai Sempurna'
*/

var questionList = [
    ['a', 'Manakah yang merupakan tipe data dengan nilai berupa angka? \n a) Integer \n b) String'],
    ['a', 'Manakah fungsi array di bawah ini yang digunakan untuk menghapus 1 nilai dari array index paling belakang? \n a) pop() \n b) push()'],
    ['b', 'Manakah fungsi array di bawah ini yang digunakan untuk menambah 1 nilai ke array index paling depan (index 0)? \n a) shift() \n b) unshift()'],
    ['a', 'Manakah method string di bawah ini yang digunakan untuk mengembalikan karakter pada indeks yang diinginkan? \n a) .charAt([indeks]) \n b) .concat([string])'],
    ['b', 'Manakah fungsi array di bawah ini yang digunakan untuk mengembalikan array dari potongan-potongan string yang dipisah dengan karakter separator yang diinginkan? \n a) slice() \n b) split()'],
    ['a', 'Manakah method string di bawah ini yang digunakan untuk mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string tersebut? \n a) .trim() \n b) .slice()'],
    ['b', 'Manakah method string di bawah ini yang digunakan untuk mengonversi tipe data lain menjadi string? \n a) .string() \n b) .toString()'],
    ['b', 'Manakah fungsi array di bawah ini yang digunakan untuk mengurutkan nilai dari array? \n a) order() \n b) sort()'],
    ['a', 'Manakah fungsi array di bawah ini yang digunakan untuk menghapus dan/atau menambah nilai ke dalam array? \n a) splice() \n b) slice()'],
    ['b', 'Manakah di bawah ini contoh penggunaan array 2 dimensi yang tepat? \n a) var array = [ {1,2}, {3,4}, {5,6} ] \n b) var array = [ [1,2], [3,4], [5,6] ]'],
];

var score = 0;
var inputName = '';
var numberOfQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;


inputName = prompt('Masukan nama anda: ');
    
if (inputName.trim() === ''){
    alert('Nama harus diisi!');
    while(inputName.trim() === ''){
        inputName = prompt('Masukan nama anda: ');
    }
}else{
    askForQuizLevel(inputName);
}

function askForQuizLevel(userName){

    var level = prompt('Pilih level quiz: \n 1. Mudah \n 2. Sedang \n 3. Sulit');

    switch(parseInt(level)){
        case 1:
            numberOfQuestion = 5;
            correctAnswer = 20;
            wrongAnswer = 10;
            break;
        case 2:
            numberOfQuestion = 10;
            correctAnswer = 10;
            wrongAnswer = 10;
            break;
        case 3:
            numberOfQuestion = 10;
            correctAnswer = 10;
            wrongAnswer = 20;
            break;
        default:
            numberOfQuestion = 5;
            correctAnswer = 20;
            wrongAnswer = 10;
    }

    alert('Halo '+userName+', selamat datang di quiz javascript!'+'\n\n'+
    'Petunjuk quiz: '+'\n'+
    '1. Quiz ini berisi '+numberOfQuestion+' soal'+'\n'+
    '2. Setiap jawaban benar bernilai '+correctAnswer+' poin.'+'\n'+
    '3. Setiap jawaban salah nilai dikurangi '+wrongAnswer+'.'+'\n'+
    '4. Jawab soal pada kolom yang disediakan dengan mengetik pilihan jawaban yang menurut anda benar.'+'\n\n'+
    'Good luck!');

    quiz(numberOfQuestion, correctAnswer, wrongAnswer);
}

function quiz(numberOfQuestion, correctAnswer, wrongAnswer){

    console.log('Skor anda: '+score+'\n\n');

    //Shuffle question list
    questionList.sort(function(a, b){return 0.5 - Math.random()});

    
    for(var i=0; i<=numberOfQuestion-1; i++){
        var userAnswer = prompt(questionList[i][1]);
        
        if(userAnswer.toUpperCase() === questionList[i][0].toUpperCase()){
            console.log('Jawaban anda benar!');
            score += correctAnswer;
        }else{
            console.log('Jawaban anda salah!');
            score -= wrongAnswer;
        }
        console.log('Skor anda: '+score);
    }
    
    result(score);
}

function result(score){
    var predicate;
    if (score<=25){
        predicate = 'Sangat Buruk';
    }else if (score>25 && score<=60){
        predicate = 'Buruk';
    }else if (score>60 && score<=75){
        predicate = 'Baik';
    }else if (score>75 && score<=99){
        predicate = 'Sangat Baik';
    }else if (score === 100){
        predicate = 'Nilai Sempurna';
    }

    alert(predicate+'\nSkor akhir anda: '+score);
}
