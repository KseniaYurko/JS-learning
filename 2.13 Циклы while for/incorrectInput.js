'use strict'

let value = prompt('Enter number bigger then 100')
while (true){
    let value = prompt('Enter number bigger then 100');

    if (Number(value) == NaN){
        
        alert('Incorrect type! Please try again :(');
        break;
    }

    if (value > 100 || value == null || value == '') break;
}