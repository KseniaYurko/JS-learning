'use strict'

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Are you agree?", 
    function() {alert("You agree.")}, 
    function() {alert("You disagree.")}
);
