import React, { useEffect, useState } from 'react';

//components
import HomePage from '../home-page/home-page';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import { adjustQuestionData, getRandomCategory } from '../category/useCategory.hook';
import addData from '../../store/reducers/index'
import { 
  addQuestion, 
  createCategories
} from '../../store/actions/index';

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
  const dispatch = useDispatch()
  const state = store.getState().appState
  const [category, setCategory] = useState('')


  const generateCategories = (categories) => {
   const allCategories = categories.map(category => {
    return { 
      category, 
      correctAnswers: [], 
      currentQuestion: {}, 
      inbcorrectAnswers: [], 
      questions: [] 
    }
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
    if(!state.categories) {
      const categories = getRandomCategories(2)
      generateCategories(categories);
    }
  }, [generateCategories])
  
  console.log({ category })
  return (
    <div>
      {
        state.gameStarted ? (
          <p>Howdy</p>
        ) : (
          <HomePage setCategory={setCategory} />
        )
      }
    </div>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Game);