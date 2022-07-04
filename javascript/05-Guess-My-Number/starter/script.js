'use strict';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start game...';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

let secreteNumber = Math.trunc(Math.random() * 20);
console.log(secreteNumber);

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    console.log((document.querySelector('.message').textContent = 'no number'));
  } else if (guess == secreteNumber) {
    console.log(
      (document.querySelector('.message').textContent = 'correct number')
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = secreteNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secreteNumber) {
    if (score >= 1) {
      console.log(
        (document.querySelector('.message').textContent = 'number is too high')
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'you lost the game')
      );
    }
  } else if (guess < secreteNumber) {
    if (score >= 1) {
      console.log(
        (document.querySelector('.message').textContent = 'number is too low')
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'you lost the game')
      );
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  secreteNumber = Math.trunc(Math.random() * 20);
  console.log(secreteNumber);
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start game...';
});
