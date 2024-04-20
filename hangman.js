const words = ['javascript', 'hangman', 'programming', 'computer', 'code', 'algorithm'];
const word = words[Math.floor(Math.random() * words.length)];
let remainingLetters = word.length;
let chancesLeft = 6;
const wordDiv = document.getElementById('word');
const lettersDiv = document.getElementById('letters');
const chancesDiv = document.getElementById('chances-left');
const resultDiv = document.getElementById('result');

// Display underscores for each letter in the word
for (let i = 0; i < word.length; i++) {
  const span = document.createElement('span');
  span.textContent = '_ ';
  wordDiv.appendChild(span);
}

document.addEventListener('keypress', (event) => {
  const letter = event.key.toLowerCase();
  if (word.includes(letter)) {
    const spans = wordDiv.querySelectorAll('span');
    word.split('').forEach((char, index) => {
      if (char === letter && spans[index].textContent === '_ ') {
        spans[index].textContent = char;
        remainingLetters--;
      }
    });
    if (remainingLetters === 0) {
      resultDiv.textContent = 'You win!';
    }
  } else {
    if (!lettersDiv.textContent.includes(letter) && chancesLeft > 0) {
      lettersDiv.textContent += letter + ' ';
      chancesLeft--;
      chancesDiv.textContent = chancesLeft;
    }
    if (chancesLeft === 0) {
      resultDiv.textContent = 'Game over! The word was: ' + word;
    }
  }
});
