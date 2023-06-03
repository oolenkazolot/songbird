const menuItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
const { translates } = require('../utils/translates');

function renderTopPanel(level, score) {
  const section = document.createElement('section');
  section.classList.add('top-panel');
  const counterGame = createCounterGame(score);
  section.append(counterGame);
  const gameMenu = document.createElement('ul');
  gameMenu.classList.add('game-menu');
  menuItems.forEach((element, index) => {
    const item = createMenuItem(element, index, level);
    gameMenu.append(item);
  });
  section.append(gameMenu);
  return section;
}

function createMenuItem(element, index, level) {
  const item = document.createElement('li');
  item.classList.add('game-menu__item');

  if (index === level) {
    item.classList.add('game-menu__item--active');
  }
  const currentLang = localStorage.getItem('language');
  item.textContent = translates[currentLang].gameMenu[index];
  return item;
}

function createCounterGame(score) {
  const currentLang = localStorage.getItem('language');
  const counterGame = document.createElement('div');
  counterGame.classList.add('counter-game');
  const counterContent = document.createElement('span');
  counterContent.classList.add('counter-game__content');
  counterContent.textContent = `${translates[currentLang].score}:`;
  const scoreGame = document.createElement('span');
  scoreGame.textContent = score;
  scoreGame.classList.add('counter-game__score');
  counterGame.append(counterContent, scoreGame);
  return counterGame;
}

module.exports = {
  renderTopPanel: renderTopPanel,
  createCounterGame: createCounterGame,
};
