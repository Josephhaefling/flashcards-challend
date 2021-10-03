import styled from 'styled-components';

const Styled = {
  Card: styled.div`
    align-items: center;
    background-color: darkslateblue;
    border: 1px solid lightgray;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    width: 70%;
  `,

  Header: styled.div``, 

  Body: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  `,

  Footer: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  `
}

export default Styled;