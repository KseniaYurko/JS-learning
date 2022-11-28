'use strict'

const number = +prompt("Enter number between 0 and 3", '');

switch(number){
    case 0: 
        alert("You enter number 0");
        break;

    case 1: 
        alert("You enter number 1");
        break;

    case 2:
    case 3: 
        alert("You enter number 2 or number 3 :)");
        break;
}