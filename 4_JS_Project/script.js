// Guess the correct number

// storing the random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// selectors
const userGuess = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const validationMessage = document.getElementById('validationMessage');

// 
const para = document.createElement('p');

// 
let prevGuess = [];
let guessCounter = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        const guess = parseInt(userGuess.value)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        validationMessage.style.display = 'block' // To provide space for the error message
        validationMessage.textContent = `${guess} is invalid. Please enter correct number between 1 and 100.`
    } else {
        validationMessage.style.display = 'none'
        prevGuess.push(guess)
        if (guessCounter === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. The correct number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Yay! ${guess} is the correct number`)
        endGame()
    } else if (guess > randomNumber) {
        displayMessage(`Wrong guess, You entered a bigger number`)
    } else {
        displayMessage(`Wrong guess, You entered a smaller number`)
    }
};

function displayGuess(guess) {
    userGuess.value = ``
    guessSlot.innerHTML += `${guess}, `
    guessCounter++;
    remaining.innerHTML = `${11 - guessCounter}`
};

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = `<h3 id="newGame">Start new game</h3>`
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (event) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        guessCounter = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - guessCounter}`;
        userGuess.removeAttribute('disabled');
        startOver.removeChild(para);
        lowOrHi.innerHTML = ''
        playGame = true;

    })
}