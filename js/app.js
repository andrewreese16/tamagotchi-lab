// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic.

// 6) Handle each instance of a player clicking a button with the use of a
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};
/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;
/*------------------------ Cached Element References ------------------------*/
const boredomStateEl = document.querySelector("#boredom-stat");
const hungerStateEl = document.querySelector("#hunger-stat");
const sleepinessStateEl = document.querySelector("#sleepiness-stat");

const playBtnEl = document.querySelector("#play");
const feedBtnEl = document.querySelector("#feed");
const sleepBtnEl = document.querySelector("#sleep");

const gameMessageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#restart");
/*-------------------------------- Functions --------------------------------*/
function init() {
  resetBtnEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");

  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;

  gameOver = false;
  timer = setInterval(runGame, 2000);
  render();
}

function render() {
  boredomStateEl.textContent = state.boredom;
  hungerStateEl.textContent = state.hunger;
  sleepinessStateEl.textContent = state.sleepiness;

  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.classList.remove("hidden");
    resetBtnEl.classList.remove("hidden");
  }
}

function updateStates() {
  state.boredom += getRandomNumber();
  state.hunger += getRandomNumber();
  state.sleepiness += getRandomNumber();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
    gameOver = true;
  }
}

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function playBtnClick() {
  state.boredom = 0;
  render();
}

function feedBtnClick() {
  state.hunger = 0;
  render();
}

function sleepBtnClick() {
  state.sleepiness = 0;
  render();
}

init();
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener("click", playBtnClick);
feedBtnEl.addEventListener("click", feedBtnClick);
sleepBtnEl.addEventListener("click", sleepBtnClick);
resetBtnEl.addEventListener("click", init);
