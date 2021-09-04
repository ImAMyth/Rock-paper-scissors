//  Declared both players scores to be a Number.
let playerScore = 0;
let compScore = 0;

//  Stored players scores within a p element.
let playerScorePara =document.querySelector('#playerscore');
let computerScorePara = document.querySelector('#computerscore');

//  Stores who wins the round and the first player to 5 wins.
let results = document.querySelector('#roundresult');
let winner = document.querySelector('#winner');

//  Stores a value from the click of each button for each round and plays game().
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',game));
window.addEventListener('click', playRound);

/* 
    Function used to calculate the winner of either a round and or the first to 5 wins and remain empty until then
    Player and Computer score defined within function
*/
function game(e) {
    let userChoice = e.target.dataset.choice;
    let computerChoice = computerPlay();
    let roundResult = playRound(userChoice, computerChoice);
    results.innerText = roundResult;
    playerScorePara.innerText = playerScore;
    computerScorePara.innerText = compScore;
    if (playerScore === 5) {
        winner.innerText = 'You Win!';
        playerScore = 0;
        compScore = 0;
    }else if (compScore === 5) {
        winner.innerText = 'You lose!';
        playerScore = 0;
        compScore = 0;
        
    }else {
        winner.innerText = '';
    }

    } 

    // Function used to generate a random computer choice between 3 possible values
    function computerPlay() {
        
        let x = Math.floor(Math.random() * 3);
        let result = '';
        if (x === 0) {
            result = "rock";
        } else if (x === 1) {
            result = "paper";
        } else if (x === 2) {
            result = "scissors";
        }
        return result;
    }

    //  Function used to compare both players choices and display a text of the winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        compScore ++;
        return "You lose! paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore ++;
        return "You lose! scissor beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore ++;
        return "You lose! rock beats scissor";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        return "You win! scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        return "You win! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        return "You win! rock beats scissor";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }
}
