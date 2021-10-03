import React from 'react';
import Button from './button.component';
import { fireEvent, render } from '@testing-library/react';

const onClick = jest.fn()

describe('Button', () => {
  let button;

  beforeEach(() => {
    button = render(<Button color="#fff" label="test" onClick={onClick} />);
  });

  it('should render the button', () => {
    const { getByText } = button;
    expect(getByText('test')).toBeInTheDocument();
  });

  it('should change the button color', () => {
    const { getByText } = button;
    expect(getByText('test')).toHaveStyle('color: #fff');
  });

  it('should fire onClick', () => {
    const { getByText } = button;
    fireEvent.click(getByText('test'));
    expect(onClick).toHaveBeenCalledTimes(1)
  });
});