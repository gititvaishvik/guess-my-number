'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!!!!';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 17;
*/
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let n = Math.trunc(Math.random() * 20) + 1;
let s = Number(document.querySelector('.score').textContent);
let hs = 0;
document.querySelector('.check').addEventListener('click', function () {
  const v = Number(document.querySelector('.guess').value);
  if (v) {
    if (n === v) {
      displaymessage('Correct answer (^-^) ');
      document.querySelector('.number').textContent = n;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      s++;
      if (s > hs) {
        document.querySelector('.highscore').textContent = s;
        hs = s;
      }
    } else {
      if (s > 1) {
        displaymessage(n > v ? 'too low (-_-)' : 'too high! (-_-)');

        s--;
      } else {
        displaymessage("You Lost the game('_')");
        document.querySelector('body').style.backgroundColor = '#FF0000';
      }
    }
  } else displaymessage('No number (/)');
  document.querySelector('.score').textContent = s;
});
document.querySelector('.again').addEventListener('click', function () {
  displaymessage('Start guessing... ');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  s = 10;
  document.querySelector('.score').textContent = s;
  n = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.score').textContent = 5;
});
