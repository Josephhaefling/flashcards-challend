import React from 'react';

const Question = (question) => {
  return (
    <label for={question}>
      {question}
    </label>
  )
};

export default Question;