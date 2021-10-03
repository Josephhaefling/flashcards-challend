import React from 'react';

//styles
import Styled from './flashcard.styled';

//components
import Button from '../button/button.component';
import Card from '../card/card.component';
import Text from '../text/text.component';

//redux
import addData from '../../store/reducers/index'
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import { 
  addCorrectAnswer, 
  addIncorrectAnswer, 
  setCurrentQuestion,
  updateScore 
} from '../../store/actions/index';

const FlashCard = ({ question }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState;

//Evaluates the answer, updates score, and clears current question
  const onSubmit = () => {
    question.answerCorrect ?
      dispatchCorrectQuestions() :
      dispatchIncorrectQuestions()
    dispatch(setCurrentQuestion({}, addData));
  };

  const dispatchCorrectQuestions = () => {
    question.isCorrect = true;
    dispatch(updateScore(question.value, addData));
    dispatch(addCorrectAnswer([question, ...state.correctAnswers], addData));
  };

  const dispatchIncorrectQuestions = () => {
    //Use this in the future to decrease the score jeopardy style
    // dispatch(updateScore(question.value, addData));
    dispatch(addIncorrectAnswer([question, ...state.incorrectAnswers], addData));
  };

  const updateCorrectAnswer = () => {
    question.answerCorrect = true;
  };

  const displayAnswer = () => {
    question.displayAnswer = true;
    dispatch(setCurrentQuestion(question, addData));
  };

  return (
    <Card data-testid="question-container">
      <Card.Body>
      {
        question.displayAnswer ? (
            <Styled.Form  onSubmit={onSubmit}>
              <Styled.TextContainer>
                <Text>{question.answer}</Text>
              </Styled.TextContainer>
              <Styled.ButtonContainer>
                <Button onClick={updateCorrectAnswer} label="Correct" />
                <Button label="Incorrect" />
              </Styled.ButtonContainer>
            </Styled.Form>
              ) : (
                <Styled.QuestionContainer 
                  data-testid="question-container" 
                  onClick={displayAnswer}
                >
                  <Styled.TextContainer>
                    <Text>{question.question}</Text>
                  </Styled.TextContainer>
                </Styled.QuestionContainer>
              )
        }
      </Card.Body>
    </Card>
  )
};

const mapStateToProps = () => {
    return store.getState()
};

export default connect(mapStateToProps)(FlashCard);