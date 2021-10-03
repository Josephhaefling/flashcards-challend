import React from 'react';
import Heading from './heading.component';
import { render } from '@testing-library/react';

describe('Text', () => {
  let h1, h2, h3;
  beforeEach(() => {
    h1 = render(<Heading level={1}>Test Heading 1</Heading>);
    h2 = render(<Heading level={2}>Test Heading 2</Heading>);
    h3 = render(<Heading level={3}>Test Heading 3</Heading>);
  })

  it('should render an h1', () => {
    const { getByText } = h1;
    expect(getByText('Test Heading 1')).toHaveStyle('font-size: 2em');
  });
  it('should render an h2', () => {
    const { getByText } = h2;
    expect(getByText('Test Heading 2')).toHaveStyle('font-size: 1.5em');
  });
  it('should render an h3', () => {
    const { getByText } = h3;
    expect(getByText('Test Heading 3')).toHaveStyle('font-size: 1.17em');
  });
});