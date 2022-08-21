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


//Ask user for an input: Rock, Paper or Scissors
//IF user wins, display string: "You win! <Smth> beats <smth>
//ELSE, display string: "You lose! <Smth> beats <smth>"
//Pass random data, and user input to function playRound, which evaluates which data wins
//Loop for 5 rounds and display each win