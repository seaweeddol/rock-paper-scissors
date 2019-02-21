const playerOptions = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundOutcomeDisplay = document.querySelector('#roundOutcome')
const roundDisplay = document.querySelector('#roundDisplay')
const gameResultDisplay = document.querySelector('#gameResult')
let playerChoice = '';
let roundNum = 1;
let playerScore = 0;
let computerScore = 0;
let roundOutcome;

reset();
playerSelection();

function reset(){
  playerChoice = '';
  roundNum = 1;
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundDisplay.textContent = roundNum;
}

function playerSelection(){
  playerOptions.forEach((button) => {
    button.addEventListener('click', (e) => {
      playerChoice = button.id;
      roundOutcomeDisplay.textContent = playRound(playerChoice, computerPlay());

      game();
      // return playRound(playerChoice, computerPlay());
    })
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
  if (roundNum < 6) {
    if (roundOutcome == "win") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (roundOutcome == "lose") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    roundDisplay.textContent = roundNum++;
  } else {
    gameResult();
    reset();
  }
}
