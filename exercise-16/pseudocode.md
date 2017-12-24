# PSEUDOCODE untuk Quiz Javascript


### Assign Variable

```
TENTUKAN 'questionList' sama dengan array 2D yang berisi 10 soal beserta kunci jawabannya
TENTUKAN 'score' sama dengan 0
SIMPAN karakter kosong pada 'inputName'
TENTUKAN 'numberOfQuestion' sama dengan 0
TENTUKAN 'correctAnswer' sama dengan 0
TENTUKAN 'wrongAnswer' sama dengan 0
```

### Input Username

```
READ 'inputName' dengan menggunakan prompt
IF 'inputName' sama dengan karakter kosong THEN:
    TAMPILKAN alert yang berisi 'Nama harus diisi!'
    WHILE 'inputName' sama dengan karakter kosong 
        DO: TAMPILKAN prompt dengan pesan untuk meminta pengguna memasukan nama
    ENDWHILE
ELSE 
    CALL 'askForQuizLevel' dan isi parameternya dengan 'inputName'
ENDIF
```

### Ask for Quiz Level

```
function askForQuizLevel(userName) {
    READ 'level' dengan menggunakan prompt
    CASE 'level' OF
        condition 1 :   TENTUKAN 'numberOfQuestion' sama dengan 5, 
                        TENTUKAN 'correctAnswer' sama dengan 20, 
                        TENTUKAN 'wrongAnswer' sama dengan 10
        condition 2 :   TENTUKAN 'numberOfQuestion' sama dengan 10, 
                        TENTUKAN 'correctAnswer' sama dengan 10, 
                        TENTUKAN 'wrongAnswer' sama dengan 10
        condition 3 :   TENTUKAN 'numberOfQuestion' sama dengan 10, 
                        TENTUKAN 'correctAnswer' sama dengan 10, 
                        TENTUKAN 'wrongAnswer' sama dengan 20
        OTHERS: 
        default: TENTUKAN 'numberOfQuestion' sama dengan 5, 
                 TENTUKAN 'correctAnswer' sama dengan 20, 
                 TENTUKAN 'wrongAnswer' sama dengan 10
    ENDCASE
    
    TAMPILKAN alert yang berisi 
        ('Halo '+userName+', selamat datang di quiz javascript!'+'\n\n'+
        'Petunjuk quiz: '+'\n'+
        '1. Quiz ini berisi '+numberOfQuestion+' soal'+'\n'+
        '2. Setiap jawaban benar bernilai '+correctAnswer+' poin.'+'\n'+
        '3. Setiap jawaban salah nilai dikurangi '+wrongAnswer+'.'+'\n'+
        '4. Jawab soal pada kolom yang disediakan dengan mengetik pilihan jawaban yang menurut anda benar.'+'\n\n'+
        'Good luck!');

    CALL fungsi 'quiz' dan isi parameternya dengan 'numberOfQuestion', 'correctAnswer', 'wrongAnswer'
}
```

### Prompt Question and Correct Answer

```
function quiz(numberOfQuestion, correctAnswer, wrongAnswer){
    TULISKAN di console 'score' pengguna saat ini 
    Lakukan sort pada 'questionList' untuk mengacak urutan indexnya
    
    Buat FOR dengan pertambahan 1
    FOR setiap pertanyaan pada 'questionList' 
        READ 'userAnswer' dengan menggunakan prompt yang menampilkan pertanyaan pada 'questionList'
        IF 'userAnswer' sama dengan kunci jawaban dari pertanyaan tersebut THEN:
            TULISKAN di console 'Jawaban anda benar!'
            Tambah nilai 'score' dengan 'correctAnswer';
        ELSE
            TULISKAN di console nilai 'Jawaban anda salah!'
            Kurangi nilai 'score' dengan nilai 'wrongAnswer';
        ENDIF
        TULISKAN di console 'score' pengguna saat ini 
    END FOR

    CALL fungsi 'result' dan isi parameternya dengan 'score'
}
```

### Show Quiz Result

```
function result(score){
    IF 'score' kurang dari sama dengan 25 THEN:
        TENTUKAN 'predicate' sama dengan 'Sangat Buruk'
    ELSE IF 'score' lebih dari 25 dan 'score' kurang dari sama dengan 60 THEN:
        TENTUKAN 'predicate' sama dengan 'Buruk'
    ELSE IF 'score' lebih dari 60 dan 'score' kurang dari sama dengan 75 THEN:
        TENTUKAN 'predicate' sama dengan 'Baik'
    ELSE IF 'score' lebih dari 75 dan 'score' kurang dari sama dengan 99 THEN:
        TENTUKAN 'predicate' sama dengan 'Sangat Baik'
    ELSE IF 'score' sama dengan 100 THEN:
        TENTUKAN 'predicate' sama dengan 'Nilai Sempurna'
    ENDIF 

    TAMPILKAN alert yang berisi 'predicate' dan 'score'
}
```