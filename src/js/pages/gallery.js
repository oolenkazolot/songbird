const { birdsData } = require('../utils/birds');
const { renderControls } = require('../components/player.js');
const { Player } = require('../utils/audio-player.js');

function renderMainGallery() {
  const main = document.createElement('main');
  main.classList.add('main');
  const gallery = renderGallery();
  main.append(gallery);
  return main;
}

function renderGallery() {
  const gallery = document.createElement('section');
  gallery.classList.add('gallery');
  const gridContainer = renderGridContainer();
  gallery.append(gridContainer);
  return gallery;
}

function renderGridContainer() {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('gallery__grid-container');
  birdsData.forEach((element) => {
    element.forEach((bird) => {
      const gridItem = renderGridItem(bird);
      gridContainer.append(gridItem);
    });
  });
  return gridContainer;
}

function renderGridItem(bird) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('gallery__item');
  const img = document.createElement('img');
  img.classList.add('gallery__img');
  img.src = bird.image;
  img.alt = 'image-bird';
  const player = new Player();
  player.setSound(bird.audio);
  const galleryPlayer = renderPlayer(player);
  const content = renderGalleryContent(bird);
  gridItem.append(img, galleryPlayer, content);
  return gridItem;
}

function renderPlayer(player) {
  const galleryPlayer = document.createElement('div');
  galleryPlayer.classList.add('gallery__player');
  const controls = renderControls(player);
  galleryPlayer.append(controls);
  return galleryPlayer;
}

function renderGalleryContent(bird) {
  const content = document.createElement('div');
  content.classList.add('gallery__content');
  const title = document.createElement('div');
  title.classList.add('gallery__title');
  const currentLang = localStorage.getItem('language');
  title.textContent = bird.name[currentLang];
  const subtitle = document.createElement('div');
  subtitle.classList.add('gallery__subtitle');
  subtitle.textContent = bird.species[currentLang];
  const description = document.createElement('div');
  description.classList.add('gallery__description');
  description.textContent = bird.description[currentLang];
  content.append(title, subtitle, description);
  return content;
}

module.exports = {
  renderMainGallery: renderMainGallery,
};
