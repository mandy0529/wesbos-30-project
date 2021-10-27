const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btn = document.querySelector('button');

let index;
let start = false;
let score = 0;
let timeout = 10000;

const getRandomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * holes.length);
  if (index === randomNumber) {
    getRandomNumber();
  }
  index = randomNumber;
  return holes[randomNumber];
};

const movingMole = () => {
  const time = getRandomTime(300, 1000);
  const number = getRandomNumber();
  number.classList.add('up');
  setTimeout(() => {
    number.classList.remove('up');
    if (start) movingMole();
  }, time);
};

const startGame = () => {
  start = true;
  score = 0;
  movingMole();
  setTimeout(() => {
    start = false;
  }, timeout);
};

const catchMole = (e) => {
  score++;
  e.target.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
};

btn.addEventListener('click', startGame);
moles.forEach((mole) => mole.addEventListener('click', catchMole));
