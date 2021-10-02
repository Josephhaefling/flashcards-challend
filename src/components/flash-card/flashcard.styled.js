import styled from 'styled-components';

const Styled = {
  QuestionContainer: styled.form`
    align-items: center;
    border: 1px solid white;
    display: flex;
    height: 100%;
    justify-content: center;
    /* padding: 0px 20px; */
    width: 100%;
  `, 

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
  `,

  Form: styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0px 20px;
    width: 100%;
  `
};

export default Styled