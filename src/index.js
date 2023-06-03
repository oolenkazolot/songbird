import './sass/style.scss';

import logo from './assets/image/logo.svg';
import favicon from './assets/image/favicon.png';
import github from './assets/image/github.svg';
import rsSchool from './assets/image/rs-school.svg';
import bird from './assets/image/bird.jpg';
import play from './assets/image/play.svg';
import pause from './assets/image/pause.svg';
import volume from './assets/image/volume.svg';
import error from './assets/audio/error.mp3';
import win from './assets/audio/win.mp3';

const { renderHeader } = require('./js/components/header.js');
const { renderFooter } = require('./js/components/footer.js');
const { renderMainHome } = require('./js/pages/home.js');
const { renderMainGallery } = require('./js/pages/gallery.js');
const { newGame, renderMainGame } = require('./js/pages/game.js');

let page = renderMainHome;
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'ru');
}

function renderContent(reload = true) {
  document.body.textContent = '';
  const container = document.createElement('div');
  container.classList.add('container');
  const header = renderHeader(router.getFragment(), renderContent);
  let main;

  if (!reload && router.getFragment() === 'game') {
    main = renderMainGame();
  } else {
    main = page();
  }

  const footer = renderFooter();
  container.append(header, main, footer);
  document.body.append(container);
}

import Router from './js/utils/router.js';

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/game/, () => {
    page = newGame;
    renderContent();
  })
  .add(/gallery/, () => {
    page = renderMainGallery;
    renderContent();
  })
  .add('', () => {
    page = renderMainHome;
    renderContent();
  });
