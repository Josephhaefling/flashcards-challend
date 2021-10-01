import { createStore, combineReducers } from 'redux'
import appState from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addCorrectAnswer } from './actions';

export const game = {
  correctAnswers: [],
  currentQuestion: {},
  incorrectAnswers: [],
  previousQuestions: [],
  score: 0,
  // previousCategories: [],
  // currentRound: {
  //   categories: [],
  //   currentCategory: {},
  // },
};

const appReducer = combineReducers({
  appState,
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

