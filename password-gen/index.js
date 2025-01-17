// Requires use of CLI
// Program name: Password Generator
// Author: Colin Yetman
// Description: A CLI app that generates at minimum an 8 character randomized password
// Date Started: 2025-02-16

// import node modules here
const process = require("process");
const arguments = process.argv.slice(2);

// set up character pool for password

// version 1.1.1 update: Add upper case to character pool
// version 1.1.2 update: Add integers and special characters to pool

const characterPool = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@#$%^&*()_+{}[];':"
// set up default length if nothing is set
const passwordDefaultLength = 8;
let passwordLength = passwordDefaultLength


// version 1.2.0: added length checker
// check for --length flag
const lengthIndex = arguments.indexOf("--length")

// if "--length" is found retrieve value above -1

if (lengthIndex !== -1 && arguments[lengthIndex + 1]) {
    let userLength = parseInt(arguments[lengthIndex + 1], 10)

    if (!isNaN(userLength) && userLength >= passwordDefaultLength) {
        passwordLength = userLength
    } else {

        console.log("Invalid entry: please enter a value above default (8)");
        process.exit(1)
    }

}
// moved random values into for loop for cleaner code.

// use a loop to go over your pool
let password = ""; // make the password a string, this will be changed later
for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    const randomCharacter = characterPool[randomIndex];
    
    password += randomCharacter; // refactored "characterPool[randomIndex] to variable randomCharacter"
}

console.log(arguments);
console.log("Generated password: " + password);