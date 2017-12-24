
function dataHandling2 (input){

    //splice
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(input);

    //split and switch case
    var date = input[3]
    var dateSplit = date.split('/')
    var month = dateSplit[1]
    switch (month){
        case '01': 
            month = 'Januari';
            break;
        case '02': 
            month = 'Februari';
            break;
        case '03': 
            month = 'Maret';
            break;
        case '04': 
            month = 'April';
            break;
        case '05': 
            month = 'Mei';
            break;
        case '06': 
            month = 'Juni';
            break;
        case '07': 
            month = 'Juli';
            break;
        case '08': 
            month = 'Agustus';
            break;
        case '09': 
            month = 'September';
            break;
        case '10': 
            month = 'Oktober';
            break;
        case '11': 
            month = 'November';
            break;
        case '12': 
            month = 'Desember';
    }
    console.log(month);


    // //sort
    console.log(dateSplit.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2)}));

    //join
    var dateJoin = [dateSplit[1], dateSplit[2], dateSplit[0]];
    console.log(dateJoin.join('-'));

    //slice
    var nameSlice = input[1].slice(0,15);
    console.log(nameSlice);
}

//test case
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
