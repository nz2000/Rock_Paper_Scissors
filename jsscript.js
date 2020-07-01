playerScore = 0;
computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const selections = document.getElementById('buttons');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

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

const computerPlay = () => {
  let playOptions = ['rock', 'paper', 'scissors'];
  return computerselects = playOptions[Math.floor(Math.random() * playOptions.length)];           
}

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

const keepScore = () => {
  document.getElementById('playerscore').textContent = playerScore;
  document.getElementById('computerscore').textContent = computerScore;
}