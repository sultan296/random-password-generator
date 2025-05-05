let input = document.getElementById("input");

let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let symbol = "!@#$%^&*()_=/-+.<>:;{}[]?|";

function createPass(){
    let pass = ""
    let allChar = upperCase + lowerCase + num + symbol;

    while (pass.length < length) {
        pass += allChar.charAt(Math.floor(Math.random() * allChar.length)); 
    }
    input.value = pass;
}

function copyPass() {
    input.select();
    document.execCommand("copy");
}