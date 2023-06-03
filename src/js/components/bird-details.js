const { renderControls } = require('./player.js');
const { Player } = require('../utils/audio-player.js');
const player = new Player();
const { translates } = require('../utils/translates');

function renderBirdDetails(game) {
  const activeAnswer = game.getActiveAnswer();
  const birdDetails = document.createElement('section');
  birdDetails.classList.add('bird-details');
  if (game.idActiveAnswer) {
    player.setSound(activeAnswer.audio);
    const card = renderCard(activeAnswer, player);
    const description = renderDescription(activeAnswer);
    birdDetails.append(card, description);
  } else {
    const currentLang = localStorage.getItem('language');
    const instruction = document.createElement('p');
    instruction.classList.add('bird-details__instruction');
    translates[currentLang].gameInstruction.forEach((element) => {
      const span = document.createElement('span');
      span.classList.add('bird-details__instruction-content');
      span.textContent = element;
      instruction.append(span);
    });
    birdDetails.append(instruction);
  }
  return birdDetails;
}

function renderCard(activeAnswer, player) {
  const card = document.createElement('div');
  card.classList.add('bird-details__card');
  const birdImg = document.createElement('img');
  birdImg.classList.add('bird-details__img');
  birdImg.src = activeAnswer.image;
  birdImg.alt = 'bird';
  const wrap = renderWrap(activeAnswer, player);
  card.append(birdImg, wrap);
  return card;
}

function renderWrap(activeAnswer, player) {
  const wrap = document.createElement('div');
  wrap.classList.add('bird-details__wrap');
  const title = document.createElement('h2');
  title.classList.add('bird-details__title');
  const subtitle = document.createElement('span');
  subtitle.classList.add('bird-details__subtitle');
  const currentLang = localStorage.getItem('language');
  title.textContent = activeAnswer.name[currentLang];
  subtitle.textContent = activeAnswer.species[currentLang];
  const htmlPlayer = renderPlayer(player);
  wrap.append(title, subtitle, htmlPlayer);
  return wrap;
}

function renderPlayer(player) {
  const htmlPlayer = document.createElement('div');
  htmlPlayer.classList.add('bird-details__player');
  const controls = renderControls(player);
  htmlPlayer.append(controls);
  return htmlPlayer;
}

function renderDescription(activeAnswer) {
  const description = document.createElement('span');
  description.classList.add('bird-details__description');
  const currentLang = localStorage.getItem('language');
  description.textContent = activeAnswer.description[currentLang];
  return description;
}

module.exports = {
  renderBirdDetails: renderBirdDetails,
};
