// Loops in JS.
// for (let i = 0; i <= 5; i++) {
//     console.log("apna collage");
// }

// Q.1 Print all even number from 0 to 100.
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
// console.log(num);
//     }

// }
// Q.2 Create a game where start with any random game number. Ask the user o keep guessing the game number until the user enters correct value.
// let gameNumber = 25;

// let userNum = prompt('guess the game number: ')

// while (userNum != gameNumber) {
// userNum = prompt("You entered wrong number. Guess again: ")
// }
// console.log("Congratulations, you entered the right number.")

// Stings
// let str = "atik"
// console.log(str.length);


//Q.1 Prompt the user to enter their full name. Generate a username for them based of the input. Start username with @, followed by their full name and ending with the fullname length.

// eg: user name = "atik", username should be "@atik13"

let fullName = prompt("enter your fullname without space")

let userName = "@" + fullName + fullName.length

console.log(userName);
