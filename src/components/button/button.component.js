import React from 'react';
import Styled from './button.styled';

const Button = ({ onClick, label }) => {
  return (
    <div>
      <Styled.Button onClick={onClick}>{label}</Styled.Button>
    </div>
  )
}

export default Button