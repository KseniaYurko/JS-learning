'use strict'

function ask(question, yes, no){
    confirm(question) ? yes() : no();
}

ask(
    "Did you agree?", 
    () => alert("You agree"), 
    () => alert("You disagree")
);