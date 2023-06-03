//принимает список птиц по выбранному уровню
function renderAnswers(game, changeBirdsDetails, changeQuestionImg, changeQuestionAnswerWrap, changeCounterGame, player) {
  const listBirdsLevel = game.getCurrentBirds();
  const answers = document.createElement('section');
  answers.classList.add('answers');
  const answersList = document.createElement('ul');
  answersList.classList.add('answers__list');
  listBirdsLevel.forEach((element) => {
    const answersListItem = document.createElement('li');
    answersListItem.classList.add('answers__item');
    const answersPoint = document.createElement('span');
    answersPoint.classList.add('answers__point');
    const currentLang = localStorage.getItem('language');
    answersListItem.append(answersPoint, element.name[currentLang]);
    answersListItem.addEventListener('click', () => {
      game.setActiveAnswer(element.id);
      // меняет цвет точек при правильном или неправильном ответе
      if (game.checkingAnswer()) {
        answersPoint.classList.add('success');
        player.stop();
        // при правильном победе подсвечивается кнопка next level
        const btnLevel = document.querySelector('.btn-level');
        btnLevel.classList.add('active');
        changeQuestionImg();
        changeQuestionAnswerWrap();
        changeCounterGame();
      }
      if (!game.checkingAnswer() && !game.isWin) {
        answersPoint.classList.add('error');
      }
      changeBirdsDetails();
    });
    if (game.setCountAnswers.has(element.id)) {
      answersPoint.classList.add('error');
    }

    if (game.isWin && element.id === game.activeBird.id) {
      answersPoint.classList.add('success');
    }
    answersList.append(answersListItem);
  });
  answers.append(answersList);
  return answers;
}

module.exports = {
  renderAnswers: renderAnswers,
};
