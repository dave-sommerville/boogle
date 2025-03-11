'use strict';
function select(selector, scope = document) {
  return scope.querySelector(selector);
}
//Boogle regular 
let Dice1 = ['A', 'A', 'C', 'I', 'O', 'T'];
let Dice2 = ['A', 'H', 'M', 'O', 'R', 'S'];
let Dice3 = ['E', 'G', 'K', 'L', 'U', 'Y'];
let Dice4 = ['A', 'B', 'I', 'L', 'T', 'Y'];
let Dice5 = ['A', 'C', 'D', 'E', 'M', 'P'];
let Dice6 = ['E', 'G', 'I', 'N', 'T', 'V'];
let Dice7 = ['G', 'I', 'L', 'R', 'U', 'W'];
let Dice8 = ['E', 'L', 'P', 'S', 'T', 'U'];
let Dice9 = ['D', 'E', 'N', 'O', 'S', 'W'];
let Dice10 = ['A', 'C', 'E', 'L', 'R', 'S'];
let Dice11 = ['A', 'B', 'J', 'M', 'O', 'Q'];
let Dice12 = ['E', 'E', 'F', 'H', 'I', 'Y'];
let Dice13 = ['E', 'H', 'I', 'N', 'P', 'S'];
let Dice14 = ['D', 'K', 'N', 'O', 'T', 'U'];
let Dice15 = ['A', 'D', 'E', 'N', 'V', 'Z'];
let Dice16 = ['B', 'I', 'F', 'O', 'R', 'X'];

//The Big Boog 
let BigDice1 = ['A', 'A', 'A', 'F', 'R', 'S'];
let BigDice2 = ['A', 'A', 'E', 'E', 'E', 'E'];
let BigDice3 = ['A', 'A', 'F', 'I', 'R', 'S'];
let BigDice4 = ['A', 'D', 'E', 'N', 'N', 'N'];
let BigDice5 = ['A', 'E', 'E', 'E', 'E', 'M'];
let BigDice6 = ['A', 'E', 'E', 'G', 'M', 'U'];
let BigDice7 = ['A', 'E', 'G', 'M', 'N', 'N'];
let BigDice8 = ['A', 'F', 'I', 'R', 'S', 'Y'];
let BigDice9 = ['B', 'J', 'K', 'Q', 'X', 'Z'];
let BigDice10 = ['C', 'C', 'E', 'N', 'S', 'T'];
let BigDice11 = ['C', 'E', 'I', 'I', 'L', 'T'];
let BigDice12 = ['C', 'E', 'I', 'L', 'P', 'T'];
let BigDice13 = ['C', 'E', 'I', 'P', 'S', 'T'];
let BigDice14 = ['D', 'D', 'H', 'N', 'O', 'T'];
let BigDice15 = ['D', 'H', 'H', 'L', 'O', 'R'];
let BigDice16 = ['D', 'H', 'L', 'N', 'O', 'R'];
let BigDice17 = ['E', 'I', 'I', 'I', 'T', 'T'];
let BigDice18 = ['E', 'M', 'O', 'T', 'T', 'T'];
let BigDice19 = ['E', 'N', 'S', 'S', 'S', 'U'];
let BigDice20 = ['F', 'I', 'P', 'R', 'S', 'Y'];
let BigDice21 = ['G', 'O', 'R', 'R', 'V', 'W'];
let BigDice22 = ['I', 'P', 'R', 'S', 'T', 'T'];
let BigDice23 = ['N', 'O', 'O', 'T', 'U', 'W'];
let BigDice24 = ['O', 'O', 'O', 'T', 'T', 'U'];
let BigDice25 = ['C', 'E', 'I', 'I', 'T', 'T'];

const REGULAR_BOOG = [
  Dice1, Dice2, 
  Dice3, Dice4, 
  Dice5, Dice6, 
  Dice7, Dice8, 
  Dice9, Dice10, 
  Dice11, Dice12, 
  Dice13, Dice14, 
  Dice15, Dice16
];
const BIG_BOOG = [
  BigDice1, BigDice2,
  BigDice3, BigDice3,
  BigDice4, BigDice5, 
  BigDice5, BigDice6,
  BigDice7, BigDice8,
  BigDice9, BigDice10,
  BigDice11, BigDice12,
  BigDice13, BigDice14,
  BigDice15, BigDice16,
  BigDice17, BigDice18,
  BigDice19, BigDice20,
  BigDice21, BigDice22,
  BigDice23, BigDice24,
  BigDice25
];
const GameBoard = select(".letter-display");
const StartGame = select(".start");
const Toggle = select(".toggle");
const GameName = select(".name");
const GameRunning = REGULAR_BOOG;

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function create(element) {
  const newElement = document.createElement(element); 
  return newElement;
}
function shuffle(diceArr) {
  const shuffledArr = [...diceArr]; 
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; 
  }
  return shuffledArr;
}

function shuffleTheBoard(diceArr) {
  let shuffledBoard = shuffle(diceArr);
  shuffledBoard.forEach(cell => {
    const p = create("p");
    p.textContent = getRandomItem(cell);
    p.classList.add("grid-item");
    GameBoard.appendChild(p);
});
}

function GameSize() {
  if (GameRunning = REGULAR_BOOG) {
    GameRunning = BIG_BOOG;
    GameName.innerText = "Big Boogle";
  } else {
    GameRunning = REGULAR_BOOG;
    GameName.innerText = "Regular Boogle"
  }
}

// listen("change", Toggle, () =>{
//   GameSize();
// });

listen("click", StartGame, () =>{
  shuffleTheBoard(REGULAR_BOOG);
});
