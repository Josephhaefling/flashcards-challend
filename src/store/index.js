import { createStore, combineReducers } from 'redux'
import appState from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const game = {
  categories: {},
  correctAnswers: [],
  currentQuestion: {},
  gameComplete: false,
  gameStarted: false,
  incorrectAnswers: [],
  score: 0,  
};

export const appReducer = combineReducers({
  appState,
});

// can this be the following to clean up?
export const rootReducer = (state, action) => appReducer(state, action);

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

