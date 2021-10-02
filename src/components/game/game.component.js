import React, { useEffect, useState } from 'react';

//components
import HomePage from '../home-page/home-page';
import Category from '../category/category.component';

//lodash
import { isEmpty } from 'lodash';

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
  
  useEffect(() => {
    if(isEmpty(state.categories)) {
      const categories = category || getRandomCategories(1)
      generateCategories(categories);
    }
  }, [generateCategories]);
  
  return (
    <div>
      {
        state.gameStarted ? (
          <Category category={category} />
        ) : (
          <HomePage setCategory={setCategory} />
        )
      }
    </div>
  )
};

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Game);