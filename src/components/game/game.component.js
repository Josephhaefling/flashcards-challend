import React, { useEffect, useState } from 'react';

//components
import HomePage from '../home-page/home-page';
import Category from '../category/category.component';
import ScorePage from '../score-page/score-page.component';

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
    const allCategories = categories.reduce((categories, category) => {
       categories[category] = { 
        correctAnswers: [], 
        currentQuestion: {}, 
        inbcorrectAnswers: [], 
        questions: [] 
      };
      return categories;
    }, {})
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

  const getPage = () => {
    console.log('get page ran')
    const { gameStarted, gameComplete } = state;
    if(gameStarted && gameComplete) {
      return <ScorePage />
    } else if (gameStarted && !gameComplete) {
      return <Category category={category} />
    } else {
      return  <HomePage setCategory={setCategory} />
    }
  }
  //Todo
  //create a function in category that checks of there are any reaming questions
  //if there are do nothing
  //if there aren't mark as complete

  //iterate over categories check if all categories are complete if so 
  //update game complete to true

  useEffect(() => {
    if(state.gameStarted && isEmpty(state.categories)) {
      console.log('the use effect ran')
      const categories = [category] || getRandomCategories(1)
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