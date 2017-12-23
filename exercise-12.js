function balikString(input){
    var output = '';
    for(var index=input.length-1; index>=0; index--){
        output += input[index];
    }
    return output;
}

console.log(balikString('Hello World!'));