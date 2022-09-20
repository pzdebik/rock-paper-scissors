let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

// Randomly return either 'Rock', 'Paper' or 'Scissors' string with getComputerChoice function
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

//IF user wins, display string: "You win! <Smth> beats <smth>
//ELSE, display string: "You lose! <Smth> beats <smth>"
function playRound(playerSelection, computerSelection) {
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'paper' && computerSelection == 'rock') ||
       (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1;
        result = ("You win!" + playerSelection + " beats " + computerSelection + ".\n\n"
            + "Player score: " + playerScore + "\n"
            + "Computer score: " + computerScore);

        if (playerScore == 5){
            result += "\n\nYou won the game! Refresh the page to start again.";
            //disable buttons
        }
    } else if (playerSelection == computerSelection) {
        result = ("It's a draw! You both chose " + playerSelection + ".\n\n"
            + "Player score: " + playerScore + "\n"
            + "Computer score: " + computerScore);
    } else {
        computerScore += 1;
        result = ("You lose!" + computerSelection + " beats " + playerSelection + ".\n\n"
        + "Player score: " + playerScore + "\n"
        + "Computer score: " + computerScore);

        if (computerScore == 5) {
            result += "\n\nComputer won the game! Refresh the page to start again.";
            //disable buttons
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}



