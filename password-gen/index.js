// Requires use of CLI
// Program name: Password Generator
// Author: Colin Yetman
// Description: A CLI app that generates at minimum an 8 character randomized password
// Date Started: 2025-02-16

// import node modules here
const process = require("process");
const arguments = process.argv.slice(2);


// hot fix 1.4.1: add no input catch
// 1.5.2 fix for 1.4.1
// 1.5.5 edits the help message a bit, makes commands clearer
if (arguments.length === 0) { // cli MUST include some flag
    console.log("Please use the command as follows:\n");
    console.log("node index.js <--length [number]> [--caps] [--special] [--numbers]> ");
    console.log("Flags:");
    console.log("--length, --len, --l                             : Specify the length of the password (defaults to 8).");
    console.log("--caps, --capital, --capitals, --c               : Include uppercase letters.");
    console.log("--special, --specials, --spec, --s               : Include special characters.");
    console.log("--numbers, --number, --numb, --num, --n          : Includes number characters.");
    process.exit(1)
}

// set up character pool for password

// version 1.1.1 update: Add upper case to character pool
// version 1.1.2 update: Add integers and special characters to pool

let characterPool = "abcdefghijklmnopqrstuvwyxz"
// set up default length if nothing is set
const passwordDefaultLength = 8;
let passwordLength = passwordDefaultLength


// version 1.2.0: added length checker
// check for --length flag
// version 1.5.4: changed length to support multi inputs like other functions
const lengthFlags = ["--l", "--len", "--length"]
const lengthIndex = arguments.findIndex(flag => lengthFlags.includes(flag))

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
// version 1.3.0 update: removed upper case from pool, add "--caps" flag for upper case
// version 1.5.3: added other keywords to be captured by app
// changed to create an array of valid flags for this function and then checks if any of the flags are in the user input
if (["--c", "--caps", "--capital", "--capitals"].some(flag => arguments.includes(flag))) {
    let characterPoolUpper = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
    characterPool += characterPoolUpper;
    console.log("Upper Case Incldued for Password Generation.");
}

// version 1.5.0: add integer values to character pool as my dumbass forgot them before
if (["--n", "--number", "--numbers", "--num", "--numb"].some(flag => arguments.includes(flag))) {
    let numberPool = "0123456789"
    characterPool += numberPool;
    console.log("Numbers Included for Password Generation");
}

// version 1.4.0 update: add special flag capture and append special to pool for generation
if (["--s", "--spec", "--special", "--specials"].some(flag => arguments.includes(flag))) {
    let characterPoolSpecial = "!@#$%^&*()_+[]{}|;:,.<>?";
    characterPool += characterPoolSpecial;
    console.log("Special Characters Included for Password Generation.");
}


// use a loop to go over your pool
let password = ""; // make the password a string, this will be changed later
for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    const randomCharacter = characterPool[randomIndex];
    
    password += randomCharacter; // refactored "characterPool[randomIndex] to variable randomCharacter"
}

console.log(`\nGenerated password: ${password}`);