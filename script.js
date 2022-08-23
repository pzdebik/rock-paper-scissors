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
    }else if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
    }else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
    }else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
    }else {
        console.log("Invalid weapon");
    }
}

//Ask user for an input: Rock, Paper or Scissors
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
playRound(getPlayerChoice(), getComputerChoice());

//Loop for 5 rounds and display current status

