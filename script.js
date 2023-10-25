'use strict';

const diceRoll = Math.floor(Math.random() * 6) + 1;
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.new-game');
const btnRoll = document.querySelector('.roll-dice');
const btnHold = document.querySelector('.hold');
const player0 = document.querySelector('.section-left');
const player1 = document.querySelector('.section-right');
const curScore0 = document.getElementById('display-current-0');
const curScore1 = document.getElementById('display-current-1');
const displayScore0 = document.getElementById('display-score-0');
const displayScore1 = document.getElementById('display-score-1');

const switchPlayer = function () {
  player0.classList.toggle('active-player');
  player1.classList.toggle('active-player');
};

const resetdisplayScore = function () {
  displayScore0.textContent = 0;
  displayScore1.textContent = 0;
};
const resetCurScore = function () {
  curScore0.textContent = 0;
  curScore1.textContent = 0;
};
btnRoll.addEventListener('click', function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${diceRoll}.png`;
  if (diceRoll === 1) {
    switchPlayer();
    resetCurScore();
  } else if (player0.classList.contains('active-player')) {
    curScore0.textContent = Number(curScore0.textContent) + diceRoll;
  } else if (player1.classList.contains('active-player')) {
    curScore1.textContent = Number(curScore1.textContent) + diceRoll;
  }
});

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('active-player')) {
    displayScore0.textContent =
      Number(displayScore0.textContent) + Number(curScore0.textContent);
    switchPlayer();
    curScore0.textContent = 0;
    if (displayScore0.textContent >= 100) {
      player0.classList.add('player-winner');
      diceImg.classList.add('hidden');
      btnRoll.disabled = true;
      btnHold.disabled = true;
      switchPlayer();
    }
  } else if (player1.classList.contains('active-player')) {
    displayScore1.textContent =
      Number(displayScore1.textContent) + Number(curScore1.textContent);
    switchPlayer();
    curScore1.textContent = 0;
  }
  if (displayScore1.textContent >= 100) {
    player1.classList.add('player-winner');
    diceImg.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');
  diceImg.classList.remove('hidden');
  player0.classList.add('active-player');
  player1.classList.remove('active-player');
  resetCurScore();
  resetdisplayScore();
  btnRoll.disabled = false;
  btnHold.disabled = false;
});
