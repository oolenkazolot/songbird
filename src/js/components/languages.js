const langList = ['ru', 'en'];
const translates = {
  ru: {
    ru: 'Рус',
    en: 'Анг',
  },
  en: {
    ru: 'Ru',
    en: 'En',
  },
};

function renderLanguages(renderContent) {
  const container = document.createElement('div');
  container.classList.add('header__lang');
  const currentLang = localStorage.getItem('language');
  langList.forEach((lang) => {
    const langBtn = document.createElement('button');
    langBtn.classList.add('header__lang-btn');
    if (currentLang === lang) {
      langBtn.classList.add('active');
    }
    langBtn.addEventListener('click', () => {
      if (currentLang != lang) {
        localStorage.setItem('language', lang);
        renderContent(false);
      }
    });
    langBtn.classList.add(lang);
    langBtn.textContent = translates[currentLang][lang];
    container.append(langBtn);
  });

  return container;
}

module.exports = {
  renderLanguages: renderLanguages,
};
