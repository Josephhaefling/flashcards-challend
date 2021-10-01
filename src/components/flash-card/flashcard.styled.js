import styled from 'styled-components';

const Styled = {
  FlashCard: styled.div`
    background-color: darkslateblue;
    border: 1px solid lightgray;
    border-radius: 3px;
    height: 30%;
    width: 70%;
    `, 

QuestionContainer: styled.form`
    align-items: center;
    border: 1px solid white;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0px 20px;
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