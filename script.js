let playerScore = 0;
let compScore = 0;
game();

function game() {
    let userInput = prompt("rock, paper, or scissors" , " ");
    let computerInput = computerPlay();
    let roundResult = playRound(userInput, computerInput);
    console.log(roundResult);
    roundResult = playRound(prompt("rock, paper, or scissors" , " "), computerPlay());
    console.log(roundResult)
    roundResult = playRound(prompt("rock, paper, or scissors" , " "), computerPlay());
    console.log(roundResult)
    roundResult = playRound(prompt("rock, paper, or scissors" , " "), computerPlay());
    console.log(roundResult)
    roundResult = playRound(prompt("rock, paper, or scissors" , " "), computerPlay());
    console.log(roundResult)
    
    function computerPlay() {
        let x = Math.floor(Math.random() * 3);

        if (x === 0) {
            result = "rock";
        } else if (x === 1) {
            result = "paper";
        } else if (x === 2) {
            result = "scissors";
        }
        return result;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
    } else if (playerSelection === "Paper" && computerSelection === "scissors") {
        return "You lose! scissor beats paper"
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lose! rock beats scissor"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissor"
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie"
    }
}