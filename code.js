function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return `Rock`;
        case 1:
            return `Paper`;
        default:
            return `Scissors`;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLowerCase = playerSelection.toLowerCase();
    switch (playerSelectionLowerCase) {
        case `rock`:
            switch (computerSelection) {
                case `Rock`:
                    return `It's a tie!`;
                case `Paper`:
                    return `You lose, Paper beats Rock!`;
                default:
                    return `You win, Rock beats Scissors!`;
            }
        case `paper`:
            switch (computerSelection) {
                case `Rock`:
                    return `You win, Paper beats Rock!`;
                case `Paper`:
                    return `It's a tie!`;
                default:
                    return `You lose, Scissors beats Paper!`;
            }
        case `scissors`:
            switch (computerSelection) {
                case `Rock`:
                    return `You lose, Rock beats Scissors!`;
                case `Paper`:
                    return `You win, Scissors beats Paper!`;
                default:
                    return `It's a tie!`;
            }
        default:
            return ``;
            alert(`Invalid entry, try again!`);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let retry;
    
    for (let gameNumber = 1; gameNumber <= 5; gameNumber++) {
        retry = false;
        let playerChoice = prompt(`Enter Rock, Paper, or Scissors`);
        let str = playRound(playerChoice, getComputerChoice());
        if (str.includes(`win`)) {
            playerScore++;
        }
        else if (str.includes(`lose`)) {
            computerScore++;
        }
        else if (str.includes(`tie`)) {
            playerScore += .5;
            computerScore += .5;
        }
        else {
            gameNumber--;
            retry = true;
        }
        if (!retry) {
            console.log(`Round: ${gameNumber}`);
            console.log(str);
            console.log(`\n`);
        }
    }
    console.log(`Final score:`);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`You won!`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lost!`);
    }
    else {
        console.log (`It was a tie!`);
    }
}

window.onload = () => {
    let btns = document.querySelectorAll(`button`);
    btns.forEach(btn => {
        btn.addEventListener(`click`, () => {
            let message;
            let str = playRound(btn.textContent, getComputerChoice());
            if (str.includes(`win`)) {
                playerScore++;
                message = `You won this game!`;
            }
            else if (str.includes(`lose`)) {
                computerScore++;
                message = `You lost this game!`;
            }
            else if (str.includes(`tie`)) {
                // playerScore += .5;
                // computerScore += .5;
                message = `It was a tie!`;
            }
            // if (playerScore > computerScore) {
            // }
            // else if (playerScore < computerScore) {
            // }
            // else {
            // }
            console.log(playerScore);
            console.log(computerScore);
            updateMessage(message);
            updateScores();
            checkIfOver();
        });
    })
}

function updateMessage(message) {
    document.querySelector(`.message`).textContent = message;
}

function updateScores() {
    document.querySelector(`.playerScore`).textContent = `Player Score: ${playerScore}`;
    document.querySelector(`.computerScore`).textContent = `Computer Score: ${computerScore}`;
}

function checkIfOver() {
    if (playerScore >= 5 || computerScore >= 5) {
        let finalResult;
        playerScore >= 5 ? finalResult = `You won the match!` : finalResult = `You lost the match!`;
        document.querySelector(`.message`).textContent = `Game over, ${finalResult}`;
        let btns = document.querySelectorAll(`button`);
        btns.forEach(btn => btn.disabled = true);
    }
}
let playerScore = 0;
let computerScore = 0;
let retry;

// console.log(window);


// game();

// const playerSelection = 'scissorS';
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));