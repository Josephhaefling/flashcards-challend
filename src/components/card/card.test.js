import React from 'react';
import Card from './card.component';
import {render } from '@testing-library/react'

describe('Card', ()=> {
  let card;
  beforeEach(() => {
  card = render(
      <Card>
        <Card.Header></Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    );
})

  it('should render the card', () => {
    const { getByTestId } = card;
    expect(getByTestId('card')).toBeInTheDocument();
  });
  it('should render the card header', () => {
    const { getByTestId } = card;
    expect(getByTestId('header')).toBeInTheDocument();
  });
  it('should render the card body', () => {
    const { getByTestId } = card;
    expect(getByTestId('body')).toBeInTheDocument();
  });
  it('should render the footer', () => {
    const { getByTestId } = card;
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});