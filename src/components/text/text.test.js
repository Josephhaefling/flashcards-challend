import React from 'react';
import Text from './text.component';
import { render } from '@testing-library/react';

describe('Text', () => {
  let text;
  beforeEach(() => {
    text = render(<Text color="#333">Test Text</Text>)
  })

  it('should render the text', () => {
    const { getByText } = text;
    expect(getByText('Test Text')).toBeInTheDocument();
  });

  it('should change text color', () => {
    const { getByText } = text;
    expect(getByText('Test Text')).toHaveStyle('color: #333');
  });
});