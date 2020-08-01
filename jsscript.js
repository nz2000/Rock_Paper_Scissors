// Initialize the variables and counters

playerScore = 0;
computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const selections = document.getElementById('buttons');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');

//Function initializing set-up:
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//Code checking the clicks of the item:
rock.onclick = () => {
  playerselects = 'rock';
  computerPlay();
  playRound(playerselects, computerselects);
  return 'rock';
}

paper.onclick = () => {
  playerselects = 'paper';
  computerPlay();
  playRound(playerselects, computerselects);
  return 'paper';
}

scissors.onclick = () => {
  playerselects = 'scissors';
  computerPlay();
  playRound(playerselects, computerselects);
  return 'scissors';
}
//Computers choice:
const computerPlay = () => {
  let playOptions = ['rock', 'paper', 'scissors'];
  return computerselects = playOptions[Math.floor(Math.random() * playOptions.length)];           
}
//checks the score and choice:
const playRound = (playerselects, computerselects) => {

  if ((playerselects === 'rock' && computerselects === 'scissors') ||
      (playerselects === 'paper' && computerselects === 'rock') ||
      (playerselects === 'scissors' && computerselects === 'paper')) {
        playerScore++;
  } else if ((playerselects === 'scissors' && computerselects === 'rock') ||
            (playerselects === 'rock' && computerselects === 'paper') ||
            (playerselects === 'paper' && computerselects === 'scissors')) {
              computerScore++;
  } 
  keepScore();
}
//maintains the score:
const keepScore = () => {
  document.getElementById('playerscore').textContent = playerScore;
  document.getElementById('computerscore').textContent = computerScore;
}