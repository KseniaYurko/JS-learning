'use strict'

//Напишите код, который выводит все простые числа из интервала от 2 до n.

let n = prompt('Enter N');

nextPrime: for (let number = 1; number <= n; number++){
    
    for (let devider = 2; devider < number; devider++){
        if (number % devider == 0) continue nextPrime;
    }
    alert(number);
}