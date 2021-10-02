export const startGame = value => {
  return ({
  type: 'START_GAME',
  value
  })
};

export const endGame = value => {
  return ({
  type: 'END_GAME',
  value
  })
};

export const addQuestion = questions => {
  return ({
    type: 'ADD_QUESTIONS',
    questions
  })
};

export const updateCategories = categories => {
  return ({
    type: 'UPDATE_CATEGORIES',
    categories
  })
};

export const setCurrentQuestion = question => {
  return ({
    type: 'SET_CURRENT_QUESTION',
    question
  })
};

export const addCorrectAnswer = correctAnswers => {
  return ({
  type: 'ADD_CORRECT_ANSWER',
  correctAnswers
  })
};

export const addIncorrectAnswer = incorrectAnswers => {
  return ({
  type: 'ADD_INCORRECT_ANSWER',
  incorrectAnswers
  })
};

export const updateScore = value => {
  return ({
  type: 'UPDATE_SCORE',
  value
  })
};

export const createCategories = categories => {
  return ({
  type: 'CREATE_CATEGORIES',
  categories
  })
};

export const updateCategoryComplete = value => {
  return ({
  type: 'UPDATE_CATEGORY_COMPLETE',
  value
  })
};

export const updateGameComplete = value => {
  return ({
  type: 'UPDATE_GAME_COMPLETE',
  value
  })
};


