// import FlashCard from './flashcard.component';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
// import appState from '../../store/reducers/index';
// import { combineReducers, createStore } from 'redux';
// import { rootReducer } from '../../store/index';
// import {
//   cleanup,
//   fireEvent,
//   render as rtlRender,
//   screen,
//   waitFor,
// } from '@testing-library/react';

// const question = {
//     answer: 'what?',
//     answerCorrect: false,
//     category: 'stuff',
//     displayAnswer: false,
//     isComplete: false,
//     question: 'huh?',
//     value: 1
//   }

//   // const store = createStore(rootReducer, {
//   //   categories: {},
//   //   correctAnswers: [],
//   //   currentQuestion: {},
//   //   gameComplete: false,
//   //   gameStarted: false,
//   //   incorrectAnswers: [],
//   //   score: 0,  
//   // })

// // const mockDispatch = jest.fn();
// // const mockStore = configureMockStore();
// // const store = mockStore({ currentQuestion: question });

// // jest.mock('react-redux', () => ({
// //   ...jest.requireActual('react-redux'),
// //   appReducer: jest.fn().mockImplementation(() => ({})),
// //   useDispatch: () => mockDispatch,
// // }));

// // const render = flashcard => rtlRender(<Provider store={store}>{flashcard}</Provider>);

// describe('FlashCard', () => {
//   let flashcard, state;
  

//   beforeEach(() => {
//     // state = store.getState();
//     flashcard = rtlRender(<FlashCard question={question} />)
//   });

//   it('Should render the question on page load', () => {
//     // expect(flashcard).toBeInTheDocument()
//     expect(true).toEqual(true);
//   })
// });