import React from 'react';
import Styled from './question.styled';

const Question = ({ question }) => {
  // console.log('question in question', question);
  return (
    <div>
      <Styled.Question>{question}</Styled.Question>
    </div>
  )
};

export default Question;