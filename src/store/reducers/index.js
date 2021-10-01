import { game } from '../index';

const appState = (state = game, action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS': {
      return {
        ...state, 
        questions: action.questions
      }
    } 
    case 'UPDATE_QUESTIONS':{
      return {
        ...state, 
        questions: action.remainingQuestions
      }
    }
    case 'SET_CURRENT_QUESTION':{
      return {
        ...state, 
        currentQuestion: action.question
      }
    }

    case 'ADD_CORRECT_ANSWER': {
      return {
        correctAnswers: action.correctAnswer
      }
    }

    // case 'UPDATE_CORRECT_ANSWERS':{
    //   return {
    //     ...state, 
    //     correctAnswers: state.correctAnswers += 1
    //   }
    // }
    case 'ADD_ROUND': {
      return {
        ...state, 
        currentRound: action.currentRound
      }
    }
    case 'ADD_CATEGORY': {
      return {
        currentRound: action.currentCategory
      }
    }
    
    default: {
      return state
    }
  }
}
export default appState;