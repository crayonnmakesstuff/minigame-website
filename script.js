const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  
  if (playerSelection === computerSelection) {
    resultDiv.textContent = 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
