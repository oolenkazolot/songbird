const { translates } = require('../utils/translates');

function createBtnLevel(game, changeMainGame, changeMainGameResults) {
  const currentLang = localStorage.getItem('language');
  const btnLevel = document.createElement('button');
  btnLevel.classList.add('btn-level');
  btnLevel.textContent = translates[currentLang].btnLevel;

  btnLevel.addEventListener('click', () => {
    if (game.isWin) {
      btnLevel.classList.remove('active');
      game.changeLevel();

      if (game.level === 6) {
        changeMainGameResults(game.score);
      } else {
        changeMainGame();
      }
    }
  });
  return btnLevel;
}

module.exports = {
  createBtnLevel: createBtnLevel,
};
