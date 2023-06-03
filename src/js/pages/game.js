const { renderTopPanel } = require('../components/top-panel.js');
const { createCounterGame } = require('../components/top-panel.js');
const { renderQuestion } = require('../components/question.js');
const { createAnswerWrap } = require('../components/question.js');
const { createBirdImage } = require('../components/question.js');
const { renderAnswers } = require('../components/answers.js');
const { renderBirdDetails } = require('../components/bird-details.js');
const { createBtnLevel } = require('../components/btn-level.js');
const { renderGameResults } = require('../components/game-results.js');

const { Game } = require('../utils/game-logic.js');
const { Player } = require('../utils/audio-player.js');
let game;
let player;

function newGame() {
  game = new Game();
  player = new Player();
  player.setSound(game.activeBird.audio);
  return renderMainGame();
}

function renderMainGame() {
  const main = document.createElement('main');
  main.classList.add('main');
  const gameMenu = renderTopPanel(game.level, game.score);
  if (game.level > 5) {
    const gameResults = renderGameResults(game.score, game, changeMainGame);
    main.append(gameMenu, gameResults);
    return main;
  }
  const question = renderQuestion(game.activeBird, game.isWin, player);
  const sectionWrap = document.createElement('div');
  sectionWrap.classList.add('section-wrap');
  const answers = renderAnswers(game, changeBirdsDetails, changeQuestionImg, changeQuestionAnswerWrap, changeCounterGame, player);
  sectionWrap.append(answers);
  const birdDetails = renderBirdDetails(game);
  sectionWrap.append(birdDetails);
  const btnLevel = createBtnLevel(game, changeMainGame, changeMainGameResults);
  main.append(gameMenu, question, sectionWrap, btnLevel);
  return main;
}
//при нажатии на клик перерисовывает BirdsDetails
function changeBirdsDetails() {
  const birdDetails = document.querySelector('.bird-details');
  if (birdDetails) {
    birdDetails.remove();
  }
  const sectionWrap = document.querySelector('.section-wrap');
  const birdDetailsNew = renderBirdDetails(game);
  sectionWrap.append(birdDetailsNew);
}

function changeQuestionImg() {
  const birdImg = document.querySelector('.question__img');
  if (birdImg) {
    birdImg.remove();
  }
  const birdImgNew = createBirdImage(game.activeBird.image, game.isWin);
  const question = document.querySelector('.question');
  question.prepend(birdImgNew);
}

function changeQuestionAnswerWrap() {
  const answerWrap = document.querySelector('.question__answer-wrap');
  if (answerWrap) {
    answerWrap.remove();
  }
  const currentLang = localStorage.getItem('language');
  const answerWrapNew = createAnswerWrap(game.isWin, game.activeBird.name[currentLang], player);
  const question = document.querySelector('.question');
  question.append(answerWrapNew);
}

function changeMainGame() {
  const main = document.querySelector('.main');
  if (main) {
    main.remove();
  }
  player.setSound(game.activeBird.audio);
  const mainNew = renderMainGame();
  const header = document.querySelector('.header');
  header.after(mainNew);
}

function changeCounterGame() {
  const counterGame = document.querySelector('.counter-game');
  if (counterGame) {
    counterGame.remove();
  }
  const counterGameNew = createCounterGame(game.score);
  const topPanel = document.querySelector('.top-panel');
  topPanel.prepend(counterGameNew);
}

function changeMainGameResults(score) {
  const question = document.querySelector('.question');
  const sectionWrap = document.querySelector('.section-wrap');
  const btnLevel = document.querySelector('.btn-level');
  if (question && sectionWrap && btnLevel) {
    question.remove();
    sectionWrap.remove();
    btnLevel.remove();
  }
  const topPanel = document.querySelector('.top-panel');
  const gameResults = renderGameResults(score, game, changeMainGame);
  topPanel.after(gameResults);
}

module.exports = {
  renderMainGame: renderMainGame,
  newGame: newGame,
};
