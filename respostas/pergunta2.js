

function isFibo(x) {
    let termo1 = 0;
    let termo2 = 1;
    let termo3 = termo1 + termo2;
    if (x == 0) { return true};
    if(x == 1) {return true}

    while(termo3<= x) {
    if(termo3 == x) {return true}
    termo1 = termo2;
    termo2 = termo3;
    termo3 = termo1 + termo2;
    }
    return false;
}

console.log(isFibo(0));
console.log(isFibo(1));
console.log(isFibo(2));
console.log(isFibo(3));
console.log(isFibo(4));
