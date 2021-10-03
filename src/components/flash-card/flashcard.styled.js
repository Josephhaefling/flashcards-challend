import styled from 'styled-components';

const Styled = {
  QuestionContainer: styled.form`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  `, 

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
  `,

  TextContainer: styled.div`
    padding: 30px;
  `,

  Form: styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  `
};

export default Styled