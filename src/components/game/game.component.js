import React, { useEffect, useState } from 'react';
import FlashCard from '../flash-card/flash-card.component';
import { getQuestions } from '../../api/index';

const Game = () => {
  // Your application should display a random question as a flash card
  
  const [questions, setQuestions] = useState([]);

  const getRandomQuestion = () => {
    const randomNumber = Math.floor(Math.random()) * 10;
    return <FlashCard cardQuestion={questions[randomNumber]} />;
  }

  useEffect(() => {
    const questions = getQuestions();
    setQuestions(questions)
  }, [questions, setQuestions])

  return (
    <div>

    </div>
  )
}

export default Game;