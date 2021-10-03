import styled from 'styled-components';

const Styled = {
  Question: styled.p`
    color: ${({ color }) => color ? color : 'white'};
    font-size: 18px;
    font-weight: 500;
    /* margin-bottom: 50px; */
  `
};

export default Styled;