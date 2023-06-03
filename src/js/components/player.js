const SRC_PLAY = 'images/play.svg';
const SRC_PAUSE = 'images/pause.svg';

function renderPlayer(player) {
  const htmlPlayer = document.createElement('div');
  htmlPlayer.classList.add('player');
  const controls = renderControls(player);
  htmlPlayer.append(controls);
  return htmlPlayer;
}

function renderControls(player) {
  const controls = document.createElement('div');
  controls.classList.add('controls');
  const buttons = renderButtons(player);
  const progress = renderProgress(player);
  const volume = renderVolume(player);
  controls.append(buttons, progress, volume);
  return controls;
}

function renderButtons(player) {
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.addEventListener('click', (e) => {
    player.play();
    const src = player.isPlay ? SRC_PAUSE : SRC_PLAY;
    const img = createBtnImg(src);
    const currentTarget = e.currentTarget;
    currentTarget.textContent = '';
    currentTarget.append(img);
  });

  player.setEndedCb(() => {
    const src = SRC_PLAY;
    const img = createBtnImg(src);
    button.textContent = '';
    button.append(img);
  });
  const btnSrc = player.isPlay ? SRC_PAUSE : SRC_PLAY;
  const img = createBtnImg(btnSrc);
  button.append(img);
  buttons.append(button);
  return buttons;
}

function createBtnImg(src) {
  const img = document.createElement('img');
  img.classList.add('btn__img');
  img.src = src;
  img.alt = 'play/pause';
  return img;
}

function renderProgress(player) {
  const progress = document.createElement('div');
  progress.classList.add('progress');
  const progressBar = renderProgressBar(player);
  const progressTime = renderProgressTime(player);
  progress.append(progressBar, progressTime);
  return progress;
}

function renderProgressBar(player) {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress__bar');
  const progressDuration = document.createElement('input');
  progressDuration.classList.add('progress__duration');
  progressDuration.type = 'range';
  progressDuration.min = '0';
  progressDuration.step = '0.01';
  setTimeout(() => {
    progressDuration.value = player.getCurrentTime() ? player.getCurrentTime() : '0';
    progressDuration.style.backgroundSize = getCurrentTimeStyle(player);
  }, 0);
  player.progress = progressDuration;
  progressDuration.addEventListener('input', () => {
    player.setCurrentTime(progressDuration.value);
  });
  progressBar.append(progressDuration);
  return progressBar;
}

function getCurrentTimeStyle(player) {
  if (!player.getCurrentTime() || !player.getDurationTime()) {
    return '0% 100%';
  }
  return (player.getCurrentTime() * 100) / player.getDurationTime() + '% 100%';
}

function renderProgressTime(player) {
  const progressTime = document.createElement('div');
  progressTime.classList.add('progress__time');
  const currentTime = document.createElement('div');
  currentTime.textContent = getCurrentTime(player);
  progressTime.append(currentTime);
  player.setUpdateTime((time) => {
    currentTime.textContent = time;
  });
  const durationTime = document.createElement('div');
  player.setDuration((time) => {
    durationTime.textContent = time;
  });
  progressTime.append(durationTime);
  return progressTime;
}

function getCurrentTime(player) {
  if (!player.getCurrentTime()) {
    return '00:00';
  }

  let minutes = Math.floor(player.getCurrentTime() / 60);
  let seconds = Math.floor(player.getCurrentTime() % 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return minutes + ':' + seconds;
}

function renderVolume(player) {
  const volume = document.createElement('div');
  volume.classList.add('volume');
  const btnVolume = document.createElement('button');
  btnVolume.classList.add('volume__button');
  const imgVolume = document.createElement('img');
  imgVolume.classList.add('volume__button-img');
  imgVolume.src = 'images/volume.svg';
  imgVolume.alt = 'volume';
  btnVolume.append(imgVolume);
  btnVolume.addEventListener('click', (e) => {
    if (player.getVolume()) {
      player.disableVolume();
      inputVolume.value = '0';
      btnVolume.classList.add('disable');
    } else {
      player.enableVolume();
      inputVolume.value = player.getVolume();
      btnVolume.classList.remove('disable');
    }
    inputVolume.style.backgroundSize = (inputVolume.value * 100) / inputVolume.max + '% 100%';
  });
  const inputVolume = document.createElement('input');
  inputVolume.classList.add('volume__sound');
  inputVolume.type = 'range';
  inputVolume.min = '0';
  inputVolume.max = '1';
  setTimeout(() => {
    inputVolume.value = player.getVolume();
    inputVolume.style.backgroundSize = (inputVolume.value * 100) / inputVolume.max + '% 100%';
  }, 0);
  inputVolume.step = '0.1';
  inputVolume.addEventListener('input', (e) => {
    player.setVolume(e.currentTarget.value);
    inputVolume.style.backgroundSize = (inputVolume.value * 100) / inputVolume.max + '% 100%';
    if (player.getVolume()) {
      btnVolume.classList.remove('disable');
    } else {
      btnVolume.classList.add('disable');
    }
  });
  volume.append(btnVolume, inputVolume);
  return volume;
}

module.exports = {
  renderPlayer: renderPlayer,
  renderControls: renderControls,
};
