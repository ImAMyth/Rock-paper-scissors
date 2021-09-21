//  Declared both players scores to be a Number.
let pScore = 0;
let cScore = 0;

// Selects container attribute
let container = document.querySelector('#container')

// Creates all elements in a score board
let scoreBoard = document.createElement('div');
let winner = document.createElement('p');
let results = document.createElement('p');
let playerScore = document.createElement('p');
let playerScoreDisplay = document.createElement('p');
let computerScore = document.createElement('p');
let computerScoreDisplay = document.createElement('p');

// Adds class value to each element or text content
scoreBoard.classList.add('scoreboard');
winner.classList.add('winner');
results.classList.add('roundResult');
playerScore.textContent = 'Player Score:';
playerScoreDisplay.classList.add('playerScore');
computerScore.textContent = 'Computer Score:';
computerScoreDisplay.classList.add('computerScore');

// Appends all nodes to scoreboard and then appends scoreboard to container
scoreBoard.appendChild(winner);
scoreBoard.appendChild(results);
scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(playerScoreDisplay);
scoreBoard.appendChild(computerScore);
scoreBoard.appendChild(computerScoreDisplay);
container.appendChild(scoreBoard);

// Displays elements of the scoreboard
let gameOver = document.querySelector('.winner');
let resultOfRound = document.querySelector('.roundResult');
let DisplayScoreOfPlayer = document.querySelector('.playerScore');
let DisplayScoreOfComputer = document.querySelector('.computerScore');

// Selects buttons attribute 
let buttonContainer = document.querySelector('#buttons');

// Creates all button choices
let rock = document.createElement('button');
let paper = document.createElement('button');
let scissors = document.createElement('button');

// Adds class, id, and text content to each element
rock.setAttribute('id','rock');
rock.classList.add('button');
rock.textContent = 'Rock';
paper.setAttribute('id','paper');
paper.classList.add('button');
paper.textContent = 'Paper';
scissors.setAttribute('id','scissors');
scissors.classList.add('button');
scissors.textContent = 'Scissors';

// Appends all buttons to the button container
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

// Iterates each button, stores a choice, calls back the game() and then compares user to computer choice
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', game));
window.addEventListener('click', playRound);

/* 
    Function used to calculate the winner of either a round and or the first to 5 wins and remain empty until then
    Player and Computer score defined within function
*/

function game(e) {
    let userChoice = e.target.id;
    let computerChoice = computerPlay();
    let roundResult = playRound(userChoice, computerChoice);
    resultOfRound.innerText = roundResult;
    playerScoreDisplay.innerText = pScore;
    computerScoreDisplay.innerText = cScore;
    if (pScore === 5) {
        gameOver.innerText = 'You Win!';
        pScore = 0;
        cScore = 0;
    } else if (cScore === 5) {
        gameOver.innerText = 'You lose!';
        pScore = 0;
        cScore = 0;

    } else {
        gameOver.innerText = '';
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
        cScore++;
        return "You lose! paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        cScore++;
        return "You lose! scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        cScore++;
        return "You lose! rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        pScore++;
        return "You win! scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        pScore++;
        return "You win! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        pScore++;
        return "You win! rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }
}
