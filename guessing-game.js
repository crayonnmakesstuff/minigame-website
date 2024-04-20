const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultDiv = document.getElementById('result');

let secretNumber;
let attempts = 0;
const maxAttempts = 5;

initializeGame();

guessButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  if (!isNaN(guess)) {
    attempts++;
    if (guess === secretNumber) {
      showResult(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
      initializeGame();
    } else if (guess < secretNumber) {
      showResult('Too low. Try again.');
    } else {
      showResult('Too high. Try again.');
    }
    if (attempts === maxAttempts) {
      showResult(`Sorry, you've reached the maximum number of attempts. The number was ${secretNumber}.`);
      initializeGame();
    }
  } else {
    showResult('Please enter a valid number.');
  }
});

function initializeGame() {
  secretNumber = generateRandomNumber(1, 100);
  attempts = 0;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showResult(message) {
  resultDiv.textContent = message;
}
