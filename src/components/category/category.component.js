import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { store } from '../../store/index';
import addNewCategory from '../../store/reducers/index'
import { addCategory } from '../../store/actions/index';
import FlashCard from '../flash-card/flash-card.component';
import ShortId from 'shortid';

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
]

const Category = ({ currentCategory, setCurrentCategory }) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState();

  const getRandomCategory = () => {
    const randomNumber = Math.floor(Math.random() * availableCategories.length);
    //removes category so that it is not reused
    const category = availableCategories[randomNumber];
    availableCategories.splice(randomNumber, 1)
    return category;
  }

  const createCategory =  (category) => {
    const id = ShortId.generate()
    const newCategory = { 
      id, 
      isComplete: false, 
      title: category, 
      question: {} 
    };
    console.log('creatCategory ran')
    // dispatch(addCategory(newCategory, addNewCategory))
  }

  useEffect(() => {
      const randomCategory = getRandomCategory();
      createCategory(randomCategory)
  }, [])
  
  return (
    <div>
      <FlashCard question={question} setQuestion={setQuestion} category={currentCategory?.title} />
    </div>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Category);