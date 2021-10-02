import { game } from '../index';

const appState = (state = game, action) => {
  switch (action.type) {
    case 'START_GAME': {
      return {
        ...state,
        gameStarted: action.value
      }
    }
    case 'END_GAME': {
      return {
        ...state,
        gameComplete: action.value
      }
    }
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
        ...state,
        correctAnswers: action.correctAnswers
      }
    }

    case 'ADD_INCORRECT_ANSWER': {
      return {
        ...state,
        incorrectAnswers: action.incorrectAnswers
      }
    }

    case 'UPDATE_SCORE': {
      return {
        ...state,
        score: state.score += action.value
      }
    }

    case 'CREATE_CATEGORIES': {
      return {
        ...state,
        categories: action.categories
      }
    }

    default: {
      return state
    }
  }
}
export default appState;