let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');
const body = document.querySelector('body');
const container = document.querySelector('#container');

// Randomly return either 'Rock', 'Paper' or 'Scissors' string with getComputerChoice function
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return (choices[Math.floor(Math.random() * choices.length)]);
}

//IF user wins, display string: "You win! <Smth> beats <smth>
//ELSE, display string: "You lose! <Smth> beats <smth>"
function playRound(playerSelection, computerSelection) {
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'paper' && computerSelection == 'rock') ||
       (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1;
        result = "You win! " + playerSelection + " beats " + computerSelection + "."
            + "<br><br>Player score: " + playerScore
            + "<br>Computer score: " + computerScore;

        if (playerScore == 5){
            result = "<br><br>You won the game! Refresh the page to start again.";
            body.removeChild(container);
        }
    } else if (playerSelection == computerSelection) {
        result = "It's a draw! You both chose " + playerSelection + "."
            + "<br><br>Player score: " + playerScore
            + "<br>Computer score: " + computerScore;
    } else {
        computerScore += 1;
        result = "You lose! " + computerSelection + " beats " + playerSelection + "."
        + "<br><br>Player score: " + playerScore 
        + "<br>Computer score: " + computerScore;

        if (computerScore == 5) {
            result = "<br><br>Computer won the game! Refresh the page to start again.";
            body.removeChild(container);
        }
    }

    //Shows the result on page, in div#result
    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value, getComputerChoice());
    });
});




