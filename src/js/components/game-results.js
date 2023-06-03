const { translates } = require('../utils/translates');

function renderGameResults(score, game, changeMainGame) {
  const gameResults = document.createElement('section');
  gameResults.classList.add('game-results');
  const resultsContent = renderResultsContents(score);
  if (score != 30) {
    const btnStartGame = createBtnStartGame(game, changeMainGame);
    gameResults.append(resultsContent, btnStartGame);
  } else {
    const contentWin = createContentWin();
    gameResults.append(resultsContent, contentWin);
  }

  return gameResults;
}

function renderResultsContents(score) {
  const resultsContent = document.createElement('div');
  resultsContent.classList.add('game-results__content');
  const contentTitle = document.createElement('h1');
  const currentLang = localStorage.getItem('language');
  contentTitle.textContent = translates[currentLang].gameResults.content;
  contentTitle.classList.add('game-results__title');
  const contentSubtitle = document.createElement('p');

  contentSubtitle.textContent = `${translates[currentLang].gameResults.result} ${score} ${translates[currentLang].gameResults.resultScore}`;
  contentSubtitle.classList.add('game-results__subtitle');
  resultsContent.append(contentTitle, contentSubtitle);
  return resultsContent;
}

function createBtnStartGame(game, changeMainGame) {
  const btnStartGame = document.createElement('button');
  btnStartGame.classList.add('game-results__btn');
  const currentLang = localStorage.getItem('language');
  btnStartGame.textContent = translates[currentLang].gameResults.btnRestart;
  btnStartGame.addEventListener('click', () => {
    game.restart();
    changeMainGame();
  });
  return btnStartGame;
}

function createContentWin() {
  const contentWin = document.createElement('p');
  contentWin.classList.add('game-results__content-win');
  const currentLang = localStorage.getItem('language');
  contentWin.textContent = translates[currentLang].gameResults.contentWin;
  return contentWin;
}

module.exports = {
  renderGameResults: renderGameResults,
};
