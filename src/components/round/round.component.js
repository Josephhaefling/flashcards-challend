import React, { useEffect, useState } from 'react';
// The application will track the users total score for this round

const Round = () => {
  const [score, setScore] = useState();
  const[correctAnswers, setCorrectAnswers] = useState()
  const [questionsAnswered, setQuestionsAnswered] = useState()

  useEffect(() => {
    setScore(redux.score)
  })

  return (
    // <div>
    // This is where we will render multiple categories
    // </div>
  )
};

export default Round;