
function reverseString(str) {
    let stringReversa = "";
    //casos de exceção
    if(str == "") {return str}; // caso de exceção para string vazia
    if (typeof str !== 'string') {return console.error("Não é uma string");}

    for(let i = str.length - 1 ; i >= 0 ; i--) {
        stringReversa += str[i];
    }
    return stringReversa;
}

console.log(reverseString("Target Sistemas"))