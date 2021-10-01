import React from 'react';

const Question = ({ question }) => {
  // console.log('question in question', question);
  return (
    <label for={question}>
      <p>{question}</p>
    </label>
  )
};

export default Question;