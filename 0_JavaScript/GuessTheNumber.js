// Exercise - 1
// Use math.random to get a number between 1 and 99
// ask user to guess the number
// If the guess is smaller or greater, inform the user about this
// subtract the number of failed attempts from 100
// show the number of guess made and final score

const randomNum = Math.floor(Math.random() * 100);
let Score = 99
do{
    let userGuess = Number(prompt("Enter the number between 1 - 99: "))
    if(userGuess > randomNum) {
        console.log(`Wrong guess! The number is smaller than ${userGuess}`);
        Score--;
        continue;
    }
    else if(userGuess < randomNum) {
        console.log(`Wrong guess! The number is greater than ${userGuess}`);
        Score--;
        continue;
    }
    else {
        console.log(`Correct guess!\nYour score is: ${Score}`);
        break;
    }
    
} while(Score > 0)