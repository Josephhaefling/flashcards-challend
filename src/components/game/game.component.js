import React, { useEffect, useState } from 'react';
import FlashCard from '../flash-card/flash-card.component';
import { getQuestions } from '../../api/index';

const categories = [
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

const Game = () => {
  // Your application should display a random question as a flash card - planned
  //  The application will save correct/incorrect history for each question
  // After the user answers the next random flash card is displayed. - planned
  //The Round Component application will track the users total score for this round

  //Redux Store Model
  // {
  //   game: {
  //     isComplete: Boolean,
  //     currentRound: Round,
  //     previousRounds: Round[],
  //     gameResults: {correctAnswers: Number, inCorrectAnswers}
  //     score: Number,
  //     },
  // }

  // interface Round {
  //   isComplete: Boolean.
  //   categories: Categories[],
  //   roundResults: {answerCorrect: Number, answerIncorrect: Number}
  // }

  // interface Category {
  //   isComplete: Boolean,
  //   categoryResults: {answerCorrect: Number, answerIncorrect: Number}
  //   title: String
  //   questions: question[],
  // }

  //  interface question: {
  //    answer,
  //    answerCorrect: Boolean,
  //    category,
  //    value: Number,
  //    question
  //   }
  //A game object with current round and previous round
  const [game, setGame] = useState({})
  //A round object with categories
  const [round, setRound] = useState({});
  //An array of category objects with questions
  const [cateagories, setCategories] = useState([])
  //An array of question objects
  const [questions, setQuestions] = useState([])

  const createQuestions = (category, number) => {
    console.log('create questions ran')
    const questions = getQuestions({ category, number })
    // return questions.map(question => ({ answer, answerCorrect: false, category, question, }))
  }

  const getRandomCategory = () => {
    // console.log('get random category ran')
    const randomNumber = Math.floor(Math.random()) * categories.length;
    //removes category so that it is not reused
    categories.slice(randomNumber, 0)
    return categories[randomNumber];
  }

  const createCategory = (category, number) => {
    const categoryQuestions = createQuestions(category, number)
    console.log('create category ran', categoryQuestions)
    // return {isComplete: false, title: categoryTitle, questions: categoryQuestions}
  }

  const createRound = () => {
    //get 6 random categories
    //create six categories
    let categories = [];
    for (let i = 0; i <= 6; i ++) {
      const categoryTitle = getRandomCategory()
      const category = createCategory(categoryTitle, 1)
      console.log('create round ran', category)
      
      // categories.push(category)
    }
    return { categories: categories, isComplete: false }
  }

  const createNewGame = () => {
    console.log('create game ran')
    const round = createRound()
    // return {isComplete: false, currentRound: round, previousRounds: []}
  }

  useEffect(() => {
   createNewGame()
  }, [])

  return (
    <div>
      <p>Hi</p>
    </div>
  )
}

export default Game;