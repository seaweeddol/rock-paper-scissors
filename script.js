const playerOptions = document.querySelectorAll('.optionButton');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundOutcomeDisplay = document.querySelector('#roundOutcome')
const roundDisplay = document.querySelector('#roundDisplay')
const gameResultDisplay = document.querySelector('#gameResult')
const resetButton = document.querySelector('#reset');
let playerChoice = '';
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
let roundOutcome;

reset();

playerOptions.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerChoice = button.id;
    roundOutcomeDisplay.textContent = playRound(playerChoice, computerPlay());
    game();
  })
})

resetButton.addEventListener('click', (e) => {
  reset();
})

function reset(){
  playerChoice = '';
  roundNum = 0;
  playerScore = 0;
  computerScore = 0;
  gameResultDisplay.textContent = '';
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundDisplay.textContent = roundNum;
  playerOptions.forEach((button) => {
    button.disabled = false;
  })
}

// selects random choice for computer
function computerPlay(){
  // selects random number between 0 and 2
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
      roundOutcome = "lose";
    } else if (computerSelection == "scissors") {
      roundOutcome = "win";
    } else {
      roundOutcome = "tie";
    }
  }
  // If player chooses paper, determine outcome based on computer choice
  if(playerSelection == "paper"){
    if(computerSelection == "scissors"){
      roundOutcome = "lose";
    } else if (computerSelection == "rock") {
      roundOutcome = "win";
    } else {
      roundOutcome = "tie";
    }
  }
  // If player chooses scissors, determine outcome based on computer choice
  if(playerSelection == "scissors"){
    if(computerSelection == "rock"){
      roundOutcome =  "lose";
    } else if (computerSelection == "paper") {
      roundOutcome = "win";
    } else {
      roundOutcome = "tie";
    }
  }
}

// determine the game outcome
function gameResult(){
  if(playerScore > computerScore) {
    gameOutcome = "You won!";
  } else if(computerScore > playerScore) {
    gameOutcome = "The computer beat you.";
  } else {
    gameOutcome = "It was a tie.";
  }

  gameResultDisplay.textContent = gameOutcome;
}

// run the game
function game(){
  ++roundNum;
  if (roundNum < 5) {
    roundDisplay.textContent = roundNum;

    if (roundOutcome == "win") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (roundOutcome == "lose") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  } else {
    roundDisplay.textContent = roundNum;
    gameResult();
    playerOptions.forEach((button) => {
      button.disabled = true;
    })
  }
}
