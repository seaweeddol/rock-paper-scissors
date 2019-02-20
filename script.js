const buttons = document.querySelectorAll('button');
// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(button.id);
    playRound(button.id, computerPlay());
  })
})

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
  if(playerSelection.toLowerCase() == "rock"){
    if(computerSelection.toLowerCase() == "paper"){
      return "lose";
    } else if (computerSelection.toLowerCase() == "scissors") {
      return "win";
    } else {
      return "tie";
    }
  }
  // set player choice to lowercase. If player chooses paper, determine outcome based on computer choice
  if(playerSelection.toLowerCase() == "paper"){
    if(computerSelection.toLowerCase() == "scissors"){
      return "lose";
    } else if (computerSelection.toLowerCase() == "rock") {
      return "win";
    } else {
      return "tie";
    }
  }
  // set player choice to lowercase. If player chooses scissors, determine outcome based on computer choice
  if(playerSelection.toLowerCase() == "scissors"){
    if(computerSelection.toLowerCase() == "rock"){
      return "lose";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "win";
    } else {
      return "tie";
    }
  }
}

// run the game
function game(){
  let userScore = 0;
  let computerScore = 0;
  let gameOutcome;

  // while number of games is less than 6, continue to play rounds
  // for(let i = 1; i < 6; i++){
  //   let userChoice = prompt("Select rock, paper, or scissors.");
  //   let roundResult = playRound(userChoice, computerPlay());
  //
  //   // if user won round, add 1 to userScore
  //   if (roundResult.includes("win") == true ){
  //     userScore++;
  //   // if computer won round, add 1 to computerScore
  //   } else if (roundResult.includes("lose") == true) {
  //     computerScore++;
  //   }
  //
  //   console.log("Game " + i + ". Player score: " + userScore + " Computer score: " + computerScore);
  // }

  // determine the game outcome
  if(userScore > computerScore) {
    gameOutcome = "You won!";
  } else if(computerScore > userScore) {
    gameOutcome = "The computer beat you.";
  } else {
    gameOutcome = "It was a tie.";
  }

  console.log(gameOutcome);
  return gameOutcome;
}

game();
