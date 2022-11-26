'use strict'

function min(a, b){
    return (a < b) ? a : b;
}

let a = +prompt("Enter first number", '');
let b = +prompt("Enter second number", '');

alert(min(a, b));
