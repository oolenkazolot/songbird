const { birdsData } = require('./birds');

class Game {
  constructor() {
    this.level = 0;
    //список птиц по уровню
    this.birds = birdsData[0];
    //птица загадка
    this.activeBird = this.getRandomBird();
    this.valueStartGame = false;
    //нажатый вопрос id
    this.idActiveAnswer = null;
    this.isWin = false;
    this.setCountAnswers = new Set();
    this.score = 0;
    this.playerWin = new Audio();
    this.playerWin.src = 'audio/win.mp3';
    this.playerError = new Audio();
    this.playerError.src = 'audio/error.mp3';
  }

  getRandomBird() {
    const min = 0;
    const max = this.birds.length - 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.birds[randomNum];
  }
  //возвращает список птиц по уровню
  getCurrentBirds() {
    return this.birds;
  }

  setActiveAnswer(id) {
    this.idActiveAnswer = id;
    this.playerWin.pause();
    this.playerWin.currentTime = 0;
    this.playerError.pause();
    this.playerError.currentTime = 0;

    if (!this.isWin && id == this.activeBird.id) {
      this.isWin = true;
      this.playerWin.play();
      this.scoring();
    }

    if (id !== this.activeBird.id && !this.isWin) {
      this.setCountAnswers.add(id);
      this.playerError.play();
    }
  }
  // нажатый вопрос
  getActiveAnswer() {
    const activeAnswer = this.birds.find((element) => {
      return element.id === this.idActiveAnswer;
    });
    return activeAnswer;
  }

  checkingAnswer() {
    // проверяем совпадает ли id птицы на которую нажали и id правильной птицы (правильный ответ или нет)
    return this.idActiveAnswer === this.activeBird.id;
  }

  changeLevel() {
    this.level += 1;
    this.birds = birdsData[this.level];
    if (this.level < 6) {
      this.activeBird = this.getRandomBird();
    }
    this.valueStartGame = false;
    this.idActiveAnswer = null;
    this.isWin = false;
    this.setCountAnswers.clear();
  }

  restart() {
    this.level = 0;
    this.birds = birdsData[0];
    this.activeBird = this.getRandomBird();
    this.valueStartGame = false;
    this.idActiveAnswer = null;
    this.isWin = false;
    this.setCountAnswers.clear();
    this.score = 0;
  }

  scoring() {
    this.score += 5 - this.setCountAnswers.size;
  }
}

module.exports = {
  Game: Game,
};
