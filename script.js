const body = document.querySelector('body');
const playerOptions = document.querySelectorAll('.optionButton');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundOutcomeDisplay = document.querySelector('#roundOutcome')
const roundNumberDisplay = document.querySelector('#roundDisplay')
const gameResultDisplay = document.querySelector('#gameResult')
const resetButton = document.querySelector('#reset');
let playerChoice = '';
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
let roundOutcome;

// initialize game with reset
reset();

// event listener for player option buttons
playerOptions.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerChoice = button.id;
    playRound(playerChoice, computerPlay());
    updateScore();
  })
})

// event listener for reset button
resetButton.addEventListener('click', (e) => {
  reset();
})

// reset all variables and text
function reset(){
  playerChoice = '';
  roundNum = 0;
  playerScore = 0;
  computerScore = 0;
  roundOutcomeDisplay.textContent = 'Make a decision.';
  gameResultDisplay.textContent = 'ROCK, PAPER, SCISSORS';
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundNumberDisplay.textContent = roundNum;

  // re-enable buttons
  playerOptions.forEach((button) => {
    button.disabled = false;
  })

  body.className = '';
}

// selects random choice for computer
function computerPlay(){
  let randomNum = (Math.floor(Math.random() * 3));
  let computerChoice;

  if(randomNum == 0) {
    computerChoice = "rock";
  } else if (randomNum == 1){
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// determines who won the round
function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock"){
    if(computerSelection == "paper"){
      roundOutcome = "Paper beats rock. You lost this round.";
    } else if (computerSelection == "scissors") {
      roundOutcome = "Rock beats Scissors. You won this round!";
    } else {
      roundOutcome = "This round was a tie.";
    }
  }

  if(playerSelection == "paper"){
    if(computerSelection == "scissors"){
      roundOutcome = "Scissors beats Paper. You lost this round.";
    } else if (computerSelection == "rock") {
      roundOutcome = "Paper beats Rock. You won this round!";
    } else {
      roundOutcome = "This round was a tie.";
    }
  }

  if(playerSelection == "scissors"){
    if(computerSelection == "rock"){
      roundOutcome =  "Rock beats Scissors. You lost this round.";
    } else if (computerSelection == "paper") {
      roundOutcome = "Scissors beats Paper. You won this round!";
    } else {
      roundOutcome = "This round was a tie.";
    }
  }

  roundOutcomeDisplay.textContent = roundOutcome;
}

// determine the game outcome
function gameResult(){
  if(playerScore > computerScore) {
    gameOutcome = "You won the game!";
    body.className += "winner";
  } else if(computerScore > playerScore) {
    gameOutcome = "The computer beat you.";
    body.className += "loser";
  } else {
    gameOutcome = "It was a tie.";
  }

  gameResultDisplay.textContent = gameOutcome;
}

// update score
function updateScore(){
  ++roundNum; // add to round counter each time updateScore() function is called

  if (roundNum < 5) { // if number of rounds is less than 5, update score based on who won the round
    roundNumberDisplay.textContent = roundNum;

    if (roundOutcome.includes("won") == true) {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (roundOutcome.includes("lost") == true) {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  } else { // else, determine winner and disable player option buttons
    roundNumberDisplay.textContent = roundNum;
    gameResult();
    playerOptions.forEach((button) => {
      button.disabled = true;
    })
  }
}
