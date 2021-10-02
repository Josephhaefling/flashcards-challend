import styled from 'styled-components';
import Button from './button.component';

const Styled = {
  Button: styled.button`
    background-color: transparent;
    border: 1px solid ${({ color }) => color ? color : 'white'};
    border-radius: 3px;
    color: ${({ color }) => color ? color : 'white'};
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
  `
};

export default Styled;