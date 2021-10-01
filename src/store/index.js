import { createStore, combineReducers } from 'redux'
import appState from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const game = {
  correctAnswers: [],
  currentQuestion: {},
  previousQuestions: [],
  score: 0
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

