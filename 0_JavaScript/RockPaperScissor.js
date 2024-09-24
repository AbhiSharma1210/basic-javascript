// A simple Rock, paper, Scissor game.
// Code is not optimized.
const choices = ["Rock", "Paper", "Scissor"];
const randomIndex = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomIndex];

// Getting input from user
let userChoice = prompt("Enter 'r' for rock, 'p' for paper or 's' for scissor:");
if (userChoice == 'S' || userChoice == 's') {
    if (computerChoice == 'Rock') {
        alert(`Computer picked ${computerChoice}. YOU LOSE!!`);
    } else if (computerChoice == 'Paper') {
        alert(`Computer picked ${computerChoice}.YOU WON!!`);
    } else {
        alert(`Computer picked ${computerChoice}. IT'S A DRAW!!`);
    }
} else if (userChoice == 'R' || userChoice == 'r') {
    if (computerChoice == 'Rock') {
        alert(`Computer picked ${computerChoice}. IT'S A DRAW!!`);
    } else if (computerChoice == 'Paper') {
        alert(`Computer picked ${computerChoice}.YOU LOSE!!`);
    } else {
        alert(`Computer picked ${computerChoice}. YOU WON!!`);
    }
} else if (userChoice == 'P' || userChoice == 'p') {
    if (computerChoice == 'Rock') {
        alert(`Computer picked ${computerChoice}. YOU WON!!`);
    } else if (computerChoice == 'Paper') {
        alert(`Computer picked ${computerChoice}.IT'S A DRAW!!`);
    } else {
        alert(`Computer picked ${computerChoice}. YOU LOSE!!`);
    }
} else {
    console.error("Invalid choice. Please type again.")
}