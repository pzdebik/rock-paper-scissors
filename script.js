// Randomly return either 'Rock', 'Paper' or 'Scissors' string with getComputerChoice function
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 4);

    if (rand == 1) {
        return "Rock";
    }else if (rand == 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    //IF user wins, display string: "You win! <Smth> beats <smth>
    //ELSE, display string: "You lose! <Smth> beats <smth>"
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

//Ask user for an input: Rock, Paper or Scissors and pass it to function
//Make playerSelection parameter case insensitive
function getPlayerChoice() {
    let askPlayer = prompt("Choose your weapon:", "");
    let toLower = askPlayer.toLowerCase();
    let toUpper = askPlayer.toUpperCase();
    let firstLetter = toUpper.charAt(0);
    let part = toLower.substring(1);
    return firstLetter + part;
}

//Pass getComputerChoice(), and user input to function playRound, which evaluates who wins
//playRound(getPlayerChoice(), getComputerChoice());

//Play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === "Lose"){
            computerPoints += 1;
        }else if (result === "Win") {
            playerPoints += 1;
        }else if (result === "Draw") {
            playerPoints += 0;
            computerPoints += 0;
        }
    }

    console.log("You: " + playerPoints);
    console.log("Computer: " + computerPoints);

    if (playerPoints > computerPoints) {
        console.log("You Win!");
    }else if (computerPoints > playerPoints) {
        console.log("You Lose!");
    }else {
        console.log("Draw!");
    }
}

const body = document.querySelector('body');

//const container = document.querySelector('#container');
const container = document.createElement('div');
container.setAttribute('id','container');

body.appendChild(container);

const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.textContent = 'Scissors';
const rockButton = document.createElement('button');
rockButton.classList.add('rock');
rockButton.textContent = 'Rock';

container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(rockButton);




