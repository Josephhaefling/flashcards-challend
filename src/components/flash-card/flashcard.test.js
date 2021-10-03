import React from 'react';
import FlashCard from './flashcard.component';
import { findByText, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { rootReducer } from '../../store/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const question = {
  answer: 'What?',
  category: 'Stuff',
  question: 'Huh?',
  value: 1,
}

const displayAnswer = jest.fn();
const store = createStore(rootReducer, composeWithDevTools());

describe('FlashCard', () => {
  let flashcard;

  beforeEach(() => {
    flashcard = render(
      <Provider store={store}>
        <FlashCard question={question} />
      </Provider>
    )
  });

  it('should render the question to the page', () => {
    const { getByText } = flashcard;
    const question = getByText('Huh?');
    expect(question).toBeInTheDocument();
  });

  it('should render the answer onclick', async () => {
    const { getByTestId } = flashcard;
    const questionContainer = getByTestId('question container');
    fireEvent.submit(questionContainer);
    // const answerText = await screen.findByText('What?');
    expect(displayAnswer).toHaveBeenCalledTimes(1);
  })
})