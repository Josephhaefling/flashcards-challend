export const addQuestion = questions => {
  return ({
    type: 'ADD_QUESTIONS',
    questions
  })
};

export const updateQuestions = remainingQuestions => {
  return ({
    type: 'UPDATE_QUESTIONS',
    remainingQuestions
  })
}

export const setCurrentQuestion = question => {
  return ({
    type: 'SET_CURRENT_QUESTION',
    question
  })
}

export const addRound = currentRound => ({
  type: 'ADD_ROUND',
  currentRound
})

export const addCategory = currentCategory => {
  return ({
  type: 'ADD_CATEGORY',
  currentCategory
})}

export const addCorrectAnswer = currentRound => {
  return ({
  type: 'ADD_CORRECT_ANSWER',
  currentRound
})}