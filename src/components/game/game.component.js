import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { store } from '../../store/index';

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

const Category = () => {

  const generateCategories = (category, numCategories, numQuestions) => {
    //takes args of number of cats 
    //array of category names

  };

  const getCategories = (category, numCategories) => {
    const categories = [];
    for (let i = 0; i < numCategories; i ++) {
      const randomNumber = Math.floor(Math.random() * availableCategories.length);
      //removes category so that it is not reused
      categories.push(availableCategories[randomNumber]);
      availableCategories.splice(randomNumber, 1)
    }
    console.log('categories', categories)
    return categories;
  };
  
  useEffect(() => {
    getCategories('sportsleisure', 6)
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Category);