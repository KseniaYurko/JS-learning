'use strict'

function pow(a, n){
    let result = a;
    for (let i = 1; i < n; i++){
        result *= a;
    }
    return result;
}

let a = +prompt("Enter number", '');
let n = +prompt("Enter degree", '');

alert(pow(a, n));