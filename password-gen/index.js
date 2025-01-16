// Requires use of CLI
// Program name: Password Generator
// Author: Colin Yetman
// Description: A CLI app that generates at minimum an 8 character randomized password
// Date Started: 2025-02-16

// import node modules here
const process = require("process");
const arguments = process.argv.slice(2);

// set up character pool for password
const characterPool = "abcdefghijklmnopqrstuvwyxz"
// set up default length if nothing is set
const passwordDefaultLength = 8;


// random section using the Math.random module
const randomIndex = Math.floor(Math.random() * characterPool.length);
const randomCharacter = characterPool[randomIndex];

let password = ""; // make the password a string, this will be changed later


// use a loop to go over your pool

for (let i = 0; i < passwordDefaultLength; i++) {

    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
}


console.log(password);