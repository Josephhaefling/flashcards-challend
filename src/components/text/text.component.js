import React from 'react';
import Styled from './text.styled';

const Question = ({ color = 'white', question }) => {
  return (
    <div>
      <Styled.Question color={color} >{question}</Styled.Question>
    </div>
  )
};

export default Question;