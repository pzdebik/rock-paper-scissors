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
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} and ${computerSelection}.`)
        return "Draw";
    }else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
        return "Lose";
    }else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return "Win";
    }else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return "Win";
    }else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
        return "Lose";
    }else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
        return "Lose";
    }else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return "Win";
    }else {
        console.log("Invalid weapon");
    }
}



