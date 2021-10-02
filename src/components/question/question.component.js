import React from 'react';
import Styled from './question.styled';

const Question = ({ color = 'white', question }) => {
  // console.log('question in question', question);
  return (
    <div>
      <Styled.Question color={color} >{question}</Styled.Question>
    </div>
  )
};

export default Question;