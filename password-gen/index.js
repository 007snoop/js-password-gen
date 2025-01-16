// Requires use of CLI
// Program name: Password Generator
// Author: Colin Yetman
// Description: A CLI app that generates at minimum an 8 character randomized password
// Date Started: 2025-02-16

// import node modules here
const arguments = process.argv.slice(2);
const readline = require("readline");
const proc = require("process");

// making readline interface
const readInput = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function userCheckMessage() {
    readInput.question("Is this Correct? Y/N: ", 
        function (response) {
            const userReponse = response.toUpperCase();

            if (userReponse === "Y") {
                console.log("Confirmed! Password length is set to: " + length);
                readInput.close();
            } else if (userReponse === "N") {
                console.log("Let's try again.");
                askPasswordLength();
            } else {
                console.log("Invalid response. Please enter either Y or N.");
                userCheckMessage();
            };
        });
    
}

// get user input for password length and feed back input
function askPasswordLength() {
	readInput.question(
		"How long would you like this password to be? (Defaults to 8):  ",
		function (length) {
			const parLength = parseInt(length, 10);

			//
			if (isNaN(parLength)) {
				console.log("not a Number.");
				askPasswordLength();
			} else if (
                userCheckMessage()
            );
	readInput.close();
		}
	);
}

askPasswordLength();
