import React from 'react';
import Text from './text.component';
import {render } from '@testing-library/react';

describe('Text', () => {
  it('should render the text', () => {
    const { getByText } = render(<Text>Test Text</Text>)
    expect(getByText('Test Text')).toBeInTheDocument();
  });

  it('should change text color', () => {
    const { getByText } = render(<Text color="#333">Test Text</Text>);
    expect(getByText('Test Text')).toHaveStyle('color: #333');
  });
});