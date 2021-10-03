import React from 'react';
import Styled from './text.styled';

// try not to hardcode colors and use hex codes instead
const Text = ({ color = '#fff', children }) => {
  return (
    <div>
      <Styled.Question color={color} >{children}</Styled.Question>
    </div>
  )
};

export default Text;