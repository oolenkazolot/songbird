const { translates } = require('../utils/translates');

function renderMainHome() {
  const main = document.createElement('main');
  main.classList.add('main');
  const currentLang = localStorage.getItem('language');
  const contentSection = translates[currentLang].homePage;
  contentSection.forEach((element, index) => {
    const section = renderSection(element, index);

    main.append(section);
  });
  return main;
}

function renderSection(element, index) {
  const section = document.createElement('section');
  section.classList.add('section');

  const title = renderTitle(element, index);
  section.append(title);

  element.content.forEach((element) => {
    const sectionContent = createParagraph(element);
    section.append(sectionContent);
  });

  if (element.videoSrc) {
    const video = createVideo(element);
    section.append(video);
  }

  return section;
}

function renderTitle(element, index) {
  if (index === 0) {
    title = document.createElement('h1');
    title.classList.add('section__title');
    title.classList.add('section__title--main');
  } else {
    title = document.createElement('h2');
    title.classList.add('section__title');
  }

  title.textContent = element.title;
  const titleMark = document.createElement('span');
  titleMark.classList.add('mark');
  titleMark.textContent = element.markTitle;
  title.append(titleMark);

  return title;
}

function createParagraph(element) {
  const sectionContent = document.createElement('p');
  sectionContent.classList.add('section__content');
  sectionContent.textContent = element;

  return sectionContent;
}

function createVideo(element) {
  const video = document.createElement('iframe');
  video.classList.add('section__video');
  video.src = element.videoSrc;
  video.title = 'YouTube video player';
  video.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  video.allowfullscreen = true;

  return video;
}

module.exports = {
  renderMainHome: renderMainHome,
};
