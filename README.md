# Password Generator

## Overview

The Password Generator is a Command-Line Interface (CLI) application that generates randomized passwords with customizable features. It allows users to specify the length of the password and includes options for uppercase letters, special characters, and numbers.

## Features

- Generate passwords with a minimum length of 8 characters (customizable).
- Include options for:
  - Uppercase letters
  - Special characters
  - Numbers
- User-friendly error messages and help instructions.
- Randomized character selection to ensure unique passwords.

***

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/007snoop/js-password-gen.git
   cd js-password-gen
   cd password-gen 
2. Ensure you have [NodeJs](https://nodejs.org) installed on your machine.

## Usage

To run the application, use the following command format: 
> node index.js <--length [number]> [--caps] [--spec] [--numbers]

## Flags

+ `--length`, `--len`, `--l`: Specify the length of the password (Defaults to 8).
+ `--caps`, `--capital`, `--capitals`, `--c`: Includes uppercase letters.
+ `--special`, `--speicals`, `--spec`, `--s`: Includes special characters.
+ `--numbers`, `--number`, `--numb`, `--num`, `--n`: Includes number characters.


### Example: 
`node index.js --len 12 --caps --n`

This will provide a password randomized at 12 characters in length with capitals and numbers included, excluding special characters.

## Error Handling 

If no flags are present when the application is executed, a helpful message will display indicating the correct usage.

## Author
+ Colin Yetman
+ Date started: 2025-01-16
