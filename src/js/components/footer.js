const footerItems = [
  {
    title: '',
    imageSrc: 'images/logo.svg',
    link: '/',
  },
  {
    imageSrc: 'images/github.svg',
    link: 'https://github.com/oolenkazolot?tab=repositories',
  },
  {
    title: '© 2022 Volha Zalatarova',
  },
  {
    imageSrc: 'images/rs-school.svg',
    link: 'https://rs.school/js/',
  },
];

function renderFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footerItems.forEach((element) => {
    if (element.imageSrc) {
      const link = createLink(element);
      footer.append(link);
    } else {
      const p = createParagraph(element);
      footer.append(p);
    }
  });

  return footer;
}

function createParagraph(element) {
  const p = document.createElement('p');
  p.classList.add('footer__copyright');
  p.textContent = element.title;
  return p;
}

function createLink(element) {
  const link = document.createElement('a');
  link.classList.add('footer__link');
  link.href = element.link;
  link.target = '_blank';
  const img = document.createElement('img');
  img.classList.add('footer__img');
  img.src = element.imageSrc;
  link.append(img);
  return link;
}

module.exports = {
  renderFooter: renderFooter,
};
