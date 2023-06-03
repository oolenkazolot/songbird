const { renderPlayer } = require('./player');

function renderQuestion(activeBird, isWin, player) {
  const question = document.createElement('section');
  question.classList.add('question');
  const birdImg = createBirdImage(activeBird.image, isWin);
  const currentLang = localStorage.getItem('language');
  const answerWrap = createAnswerWrap(isWin, activeBird.name[currentLang], player);
  question.append(birdImg, answerWrap);
  return question;
}

function createBirdImage(src, isWin) {
  const birdImg = document.createElement('img');
  birdImg.classList.add('question__img');
  birdImg.src = isWin ? src : '/images/bird.jpg';
  birdImg.alt = 'bird';
  return birdImg;
}

function createAnswerWrap(isWin, name, player) {
  const answerWrap = document.createElement('div');
  answerWrap.classList.add('question__answer-wrap');
  const answer = document.createElement('span');
  answer.classList.add('question__answer');
  answer.textContent = isWin ? name : '******';
  const htmlPlayer = renderPlayer(player);
  answerWrap.append(answer, htmlPlayer);
  return answerWrap;
}

module.exports = {
  renderQuestion: renderQuestion,
  createBirdImage: createBirdImage,
  createAnswerWrap: createAnswerWrap,
};
