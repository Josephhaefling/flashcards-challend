import React, { useEffect, useState } from 'react';

//components
import HomePage from '../home-page/home-page.component';
import Category from '../category/category.component';
import ScorePage from '../score-page/score-page.component';

//hooks
import { getRandomCategories } from './useGame';

//lodash
import { isEmpty } from 'lodash';

//styles
import Styled from './game.styled';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import addData from '../../store/reducers/index'
import { createCategories, updateGameComplete } from '../../store/actions/index';

const Game = () => {
  const dispatch = useDispatch();
  const state = store.getState().appState;
  const [category, setCategory] = useState('random');
  const { gameStarted, gameComplete } = state;

  const generateCategories = (categories) => {
    console.log('categories', categories);
    const allCategories = categories.reduce((categories, category) => {
       categories[category] = { 
        started: false,
        currentQuestion: {}, 
        questions: [] 
      };
      return categories;
    }, {})
    dispatch(createCategories(allCategories, addData));
  };

  const checkIfGameComplete = () => {
    const categoryKeys = Object.keys(state.categories)
    const inCompleteCategories = (
      categoryKeys.find(category => !state.categories[category].categoryComplete)
    );
    !inCompleteCategories && dispatch(updateGameComplete(true, addData));
  }

  useEffect(() => {
    if(state.gameStarted && isEmpty(state.categories)) {
      const categories = category === 'random' ? getRandomCategories(1) : [category];
      setCategory(categories);
      generateCategories(categories); 
    }
    if(!isEmpty(state.categories) && !state.gameComplete) {
      checkIfGameComplete()
    }
  }, [checkIfGameComplete, generateCategories]);

  return (
    <Styled.Game>
      {gameStarted && gameComplete && <ScorePage />}
      {gameStarted && !gameComplete && <Category categoryTitle={category} />}
      {!gameStarted && !gameComplete && 
      <HomePage setCategory={setCategory} />}
    </Styled.Game>
  )
};

const mapStateToProps = () => store.getState()

export default connect(mapStateToProps)(Game);