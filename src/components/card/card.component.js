import React from 'react';
import Styled from './card.styled';

const Header = ({ children }) => (
  <Styled.Header>{children}</Styled.Header>
);
const Body = ({ children }) => (
    <Styled.Body>{children}</Styled.Body>
);
const Footer = ({ children }) => (
<Styled.Footer>{children}</Styled.Footer>
);


const Card = ({ children }) => {
  return (
    <Styled.Card>
      {(children)}
    </Styled.Card>
  )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card