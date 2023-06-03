const { renderLanguages } = require('./languages.js');

function renderHeader(route, renderContent) {
  const header = document.createElement('header');
  header.classList.add('header');
  const title = document.createElement('h1');
  title.classList.add('header__title');
  title.textContent = 'Songbird';
  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header__logo');
  const logoLink = document.createElement('a');
  logoLink.classList.add('header__logo-link');
  logoLink.href = 'index.html';
  const logoImg = document.createElement('img');
  logoImg.classList.add('header__logo-img');
  logoImg.src = '/images/logo.svg';
  logoImg.alt = 'logo';
  logoLink.append(logoImg);
  headerLogo.append(logoLink);
  const languages = renderLanguages(renderContent);
  const headerList = renderNavigation(route);
  const headerWrap = document.createElement('div');
  headerWrap.classList.add('header__wrap');
  headerWrap.append(headerList, languages);
  header.append(headerLogo, headerWrap);
  return header;
}

const navItems = [
  {
    nameItem: {
      ru: 'Главная',
      en: 'Main',
    },
    itemSrc: '/#/',
  },
  {
    nameItem: {
      ru: 'Викторина',
      en: 'Quiz',
    },
    itemSrc: '/#/game/',
  },
  {
    nameItem: {
      ru: 'Галлерея',
      en: 'Gallery',
    },
    itemSrc: '/#/gallery/',
  },
];

function renderNavigation(route) {
  const currentLang = localStorage.getItem('language');
  const nav = document.createElement('nav');
  nav.classList.add('header__nav');
  const headerList = document.createElement('ul');
  headerList.classList.add('header__list');

  navItems.forEach((element) => {
    const navItem = document.createElement('li');
    navItem.classList.add('header__list-item');
    const navItemLink = document.createElement('a');
    navItemLink.classList.add('header__list-link');
    if (route === element.itemSrc.replace(/[\/#]/g, '')) {
      navItemLink.classList.add('header__list-link--active');
    }
    navItemLink.href = element.itemSrc;
    navItemLink.textContent = element.nameItem[currentLang];
    navItem.append(navItemLink);
    headerList.append(navItem);
  });
  return headerList;
}

module.exports = {
  renderHeader: renderHeader,
};
