import React, { useEffect, useState } from 'react';

//components
import HomePage from '../home-page/home-page';
import Category from '../category/category.component';
import ScorePage from '../score-page/score-page';

//lodash
import { isEmpty } from 'lodash';

//styles
import Styled from './game.styled';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import addData from '../../store/reducers/index'
import { createCategories } from '../../store/actions/index';

const availableCategories = [
  'artliterature',
  'language',
  'sciencenature',
  'general',
  'fooddrink',
  'peopleplaces',
  'geography',
  'historyholidays',
  'entertainment',
  'toysgames',
  'music',
  'mathematics', 
  'religionmythology',
  'sportsleisure'
];

const Game = () => {
  const dispatch = useDispatch();
  const state = store.getState().appState;
  const [category, setCategory] = useState('');


  const generateCategories = (categories) => {
   const allCategories = categories.map(category => {
    return { 
      category, 
      correctAnswers: [], 
      currentQuestion: {}, 
      inbcorrectAnswers: [], 
      questions: [] 
    };
   })
    dispatch(createCategories(allCategories, addData));
  };

  const getRandomCategories = (number = 1) => {
    const categories = []
    for (let i = 0; i < number; i ++) {
      const randomNumber = Math.floor(Math.random() * availableCategories.length);
      const category = availableCategories[randomNumber];
      availableCategories.splice(randomNumber, 1)
      categories.push(category)
    }
    return categories;
  };
  //game stared
  //game compelte
  //if gameStarted and !gameComplete display categories
  //else if gameStarted and gameComplete display score page
  //else display homepage

  const getPage = () => {
    const { gameStarted, gameComplete } = state;
    if(gameStarted && gameComplete) {
      return <ScorePage />
    } else if (gameStarted && !gameComplete) {
      return <Category category={category} />
    } else {
      return  <HomePage setCategory={setCategory} />
    }
  }

  useEffect(() => {
    if(isEmpty(state.categories)) {
      const categories = category || getRandomCategories(1)
      generateCategories(categories);
    }
  }, [generateCategories]);
  
  return (
    <Styled.Game>
      {getPage()}  
    </Styled.Game>
  )
};

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Game);