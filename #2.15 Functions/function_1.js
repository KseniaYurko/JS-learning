'use strict'

function checkAge1(age){
   return (age > 18) ? true : confirm('did your parents allow it?');
}

function checkAge2(age){
    return (age > 18) || confirm('did your parents allow it?')
}
let age = +prompt('How old are you?', '');

checkAge2(age);


