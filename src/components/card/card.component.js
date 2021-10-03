import React from 'react';
import Styled from './card.styled';

const Header = ({ children }) => (
  <Styled.Header data-testid="header">{children}</Styled.Header>
);
const Body = ({ children }) => (
    <Styled.Body data-testid="body">{children}</Styled.Body>
);
const Footer = ({ children }) => (
<Styled.Footer data-testid="footer">{children}</Styled.Footer>
);

const Card = ({ children }) => {
  return (
    <Styled.Card data-testid="card">
      {(children)}
    </Styled.Card>
  )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card