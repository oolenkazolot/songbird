const translates = {
  ru: {
    score: 'Счёт',
    gameMenu: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
    gameInstruction: ['Послушайте плеер.', 'Выберите птицу из списка.'],
    homePage: [
      {
        title: 'Songbird - приложение-викторина ',
        markTitle: 'для распознавания птиц по их голосам.',
        content: [
          'Oдна из лучших игр, в которые я играю довольно часто. Она пришла из ниоткуда и растопило мое сердце! Это фантастическая сочетание различных жанров и она действительно прекрасна. Это лёгкое, весёлое и захватывающее музыкальное приключение. Её стиль и музыка погружают меня в совершенно иной мир, и в нём я забываю обо всём и обретаю лёгкость и беззаботность. Я хочу снова и снова сыграть в нее как первый раз и это прекрасно!',
          'Окунитесь в этот музыкальный мир и Вы не пожалеете!',
        ],
      },
      {
        title: 'О пении ',
        markTitle: 'птиц',
        content: [
          'Oдна из лучших игр, в которые я играю довольно часто. Она пришла из ниоткуда и растопило мое сердце! Это фантастическая сочетание различных жанров и она действительно прекрасна. Это лёгкое, весёлое и захватывающее музыкальное приключение. Её стиль и музыка погружают меня в совершенно иной мир, и в нём я забываю обо всём и обретаю лёгкость и беззаботность. Я хочу снова и снова сыграть в нее как первый раз и это прекрасно!',
          'Окунитесь в этот музыкальный мир и Вы не пожалеете!',
        ],
        content: [
          'Пение птиц считается одним из самых умиротворяющих и прекрасных звуков в мире. Жители больших городов в стремлении обрести спокойствие и подпитаться энергетикой природы покидают каменные джунгли с целью услышать его и в полной мере расслабиться.',
        ],
        videoSrc: 'https://www.youtube.com/embed/SR0PGXgUqms',
      },
      {
        title: 'Правила ',
        markTitle: 'игры',
        content: [
          'Птица в блоке с вопросом выбирается автоматически.',
          'При клике по варианту ответа с названием птицы, в блоке с описанием птицы выводятся информация о ней.',
          'Если игрок выбрал правильный ответ, то в блоке с вопросом выводится название и изображение птицы.',
          'В игре подсчитываются баллы за каждый правильный ответ. В начале игры количество баллов 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка сокращает баллы на один. Если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов. Баллы за все вопросы суммируются.',
          'В игре используется звуковое и цветовое сопровождение правильных и неправильных ответов.',
          'Если игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу.',
          'После последнего вопроса выводятся результаты игры.',
        ],
      },
    ],
    btnLevel: 'Следующий уровень',
    gameResults: {
      content: 'Поздравляем!',
      result: 'Вы прошли викторину и набрали',
      resultScore: 'из 30 возможных баллов',
      contentWin: 'Вы Победитель! Игра окончена!',
      btnRestart: 'Попробовать еще раз!',
    },
  },
  en: {
    score: 'Score',
    gameMenu: ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea  birds'],
    gameInstruction: ['Listen to the player.', 'Select a bird from the list.'],
    homePage: [
      {
        title: 'Songbird - quiz app ',
        markTitle: 'to recognize birds by their voices',
        content: [
          'One of the best games I play quite often. She came out of nowhere and melted my heart! It"s a fantastic combination of different genres and it"s really beautiful. This is an easy, fun and exciting musical adventure. Her style and music immerse me in a completely different world, and in it I forget about everything and find lightness and carelessness. I want to play it again and again like the first time and it"s great!',
          'Plunge into this musical world and you will not regret it!',
        ],
      },
      {
        title: 'About singing ',
        markTitle: 'birds',
        content: [
          'Birdsong is considered one of the most peaceful and beautiful sounds in the world. Residents of big cities, in an effort to find peace and feed on the energy of nature, leave the stone jungle in order to hear it and fully relax.',
        ],
        videoSrc: 'https://www.youtube.com/embed/SR0PGXgUqms',
      },
      {
        title: 'Rules ',
        markTitle: 'games',
        content: [
          'The bird in the question block is automatically selected.',
          'When you click on the answer option with the name of the bird, information about it is displayed in the block with the description of the bird.',
          'If the player has chosen the correct answer, then the name and image of the bird are displayed in the block with the question.',
          'The game counts points for each correct answer. At the beginning of the game, the number of points is 0. If the player gave the correct answer on the first attempt, his score increases by 5 points, each subsequent attempt reduces the points by one. If the correct answer is given only on the last, sixth attempt, the player receives 0 points for it. Points for all questions are summed up.',
          'The game uses sound and color accompaniment of correct and incorrect answers.',
          'If the player gave the correct answer, the "Next" button is activated and he gets the opportunity to move on to the next question.',
          'After the last question, the results of the game are displayed.',
        ],
      },
    ],
    btnLevel: 'Next Level',
    gameResults: {
      content: 'Congratulations!',
      result: 'You passed the quiz and scored',
      resultScore: 'out of 30 possible points',
      contentWin: 'You are the Winner! The game is over!',
      btnRestart: 'To try one more time!',
    },
  },
};

module.exports = {
  translates: translates,
};
