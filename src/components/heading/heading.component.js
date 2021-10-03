import React from 'react';
import Styled from './heading.styled';

const validLevels = [1, 2, 3, 4, 5];

const Heading = ({
  children,
  level
}) => {
  const tagType = validLevels.includes(level) ? `h${level}` : 'h1';
  return (
    <Styled.Heading>
      {React.createElement(tagType, null, children)}
    </Styled.Heading>
  )
}

export default Heading;