class Player {
  constructor() {
    this.player = new Audio();
    this.player.volume = 0.5;
    this.isPlay = false;
    this.volumeState = 0.5;
    this.updateCurrentTime = null;
    this.interval = null;
    this.progress = null;
  }

  setSound(sound) {
    this.isPlay = false;
    this.player.src = sound;
  }

  setUpdateTime(cb) {
    this.updateCurrentTime = cb;
  }
  setEndedCb(cb) {
    this.player.addEventListener('ended', () => {
      this.isPlay = false;
      clearInterval(this.interval);
      cb();
      this.updateCurrentTimeView();
      this.progress.value = this.progress.max;
    });
  }

  setDuration(cb) {
    if (this.player.duration) {
      this.updateDuration(cb);
    } else {
      this.player.addEventListener('canplay', () => {
        this.updateDuration(cb);
      });
    }
  }

  getVolume() {
    return this.player.volume;
  }

  stop() {
    this.player.pause();
    this.isPlay = false;
    clearInterval(this.interval);
    this.player.currentTime = 0;
    this.updateCurrentTimeView();
  }

  updateDuration(cb) {
    this.progress.max = this.player.duration;
    let minutes = Math.floor(this.player.duration / 60);
    let seconds = Math.floor(this.player.duration % 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    const allTimeSong = minutes + ':' + seconds;
    cb(allTimeSong);
  }

  setCurrentTime(time) {
    this.player.currentTime = time;
    this.updateCurrentTimeView();
  }

  getCurrentTime() {
    return this.player.currentTime;
  }

  getDurationTime() {
    return this.player.duration;
  }

  disableVolume() {
    this.player.volume = 0;
  }

  enableVolume() {
    this.player.volume = this.volumeState;
  }
  //записать звук
  setVolume(volume) {
    this.player.volume = volume;
    if (+volume) {
      this.volumeState = volume;
    }
  }

  getVolume() {
    return this.player.volume;
  }

  play() {
    if (this.isPlay) {
      this.player.pause();
      this.isPlay = false;
      clearInterval(this.interval);
    } else {
      this.player.play();
      this.isPlay = true;
      this.startUpdateTime();
    }
  }

  startUpdateTime() {
    this.interval = setInterval(() => {
      this.updateCurrentTimeView();
      this.progress.value = this.player.currentTime;
    }, 500);
  }

  updateCurrentTimeView() {
    let minutes = Math.floor(this.player.currentTime / 60);
    let seconds = Math.floor(this.player.currentTime % 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    const currentTimeSong = minutes + ':' + seconds;
    this.progress.style.backgroundSize = (this.player.currentTime * 100) / this.player.duration + '% 100%';
    this.updateCurrentTime(currentTimeSong);
  }
}

module.exports = {
  Player: Player,
};
