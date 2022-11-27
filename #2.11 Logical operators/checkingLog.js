'use strict'

let login = prompt("Enter your login", "login");

if (login == "admin"){

    let pass = prompt("Enter your password");
    let message = (pass === "qwerty") ? "hello" : 
        (pass == "" || pass == null) ? "cancel":
        "Wrong answer! goodbye!";

    alert(message);
}

else if (login == "" || login == null) {
    alert ("Cancel");
}

else {
    alert("I don't know you!");
}