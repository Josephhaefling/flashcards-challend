import React from 'react';
import Styled from './button.styled';

const Button = ({ color, label, onClick }) => {
  return (
    <div>
      <Styled.Button color={color} onClick={onClick}>{label}</Styled.Button>
    </div>
  )
}

export default Button