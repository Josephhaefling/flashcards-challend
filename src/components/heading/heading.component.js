import React from 'react';
import Styled from './heading.styled';

const Heading = ({
  children,
  color,
  level
}) => {
  const validLevels = [1, 2, 3, 4, 5];
  const tagType = validLevels.includes(level) ? `h${level}` : 'h1';
  return (
    <div>
      {React.createElement(tagType, null, children)}
    </div>
  )
}

export default Heading;