import React from 'react';
import HomePage from './home-page.component';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { rootReducer } from '../../store/index';
import { composeWithDevTools } from 'redux-devtools-extension'

const categoryOnChange = jest.fn();
const handleSubmit = jest.fn();

const store = createStore(rootReducer, composeWithDevTools());

describe('HomePage', () => {
  let homePage;

  beforeEach(() => {
    homePage = render(<Provider store={store}><HomePage setCategory={categoryOnChange}/></Provider>);
  });

  it('should render the homepage header', () => {
    const { getByText } = homePage;
    expect(getByText('Welcome to Flashcards')).toBeInTheDocument();
  });

  it('should render the choose category header', () => {
    const { getByText } = homePage;
    expect(getByText('Choose a category')).toBeInTheDocument();
  });

  it('should render the start game button', () => {
    const { getByText } = homePage;
    expect(getByText('Start game')).toBeInTheDocument();
  });

  it('should allow a user to select a category', () => {
    const { getByTestId } = homePage;
    const dropDown = getByTestId('category select');
    fireEvent.change(dropDown, {target: {value: 'music'}});
    expect(categoryOnChange).toHaveBeenCalledWith('music');
  });

  it('should call categoryChange on change', () => {
    const { getByTestId, getByText } = homePage;
    const dropDown = getByTestId('category select');
    fireEvent.change(dropDown, {target: {value: 'music'}});
    expect(getByText('Music')).toBeInTheDocument();
  });

  it.skip('should start game when start game clicked', () => {
    const { getByText } = homePage;
    const startButton = getByText('Start game')
    fireEvent.submit(startButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
