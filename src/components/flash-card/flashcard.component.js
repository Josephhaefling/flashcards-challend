import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { store } from '../../store/index';

// Lodash
import { isEmpty } from 'lodash';

//components
import Question from '../question/question.component';
import Button from '../button/button.component';

//redux
import { useDispatch } from "react-redux";
import addData from '../../store/reducers/index'
import { 
  addCorrectAnswer, 
  addIncorrectAnswer, 
  setCurrentQuestion,
  updateScore 
} from '../../store/actions/index';
import { getQuestions } from '../../api/index';
import Styled from './flashcard.styled';

const FlashCard = ({ question }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState

  const [correctAnswer, setCorrectAnswer] = useState(false)
  console.log({ question })
  //Todo
  // add correct answers to correct answers array
  // add incorrect answers to incorrect answers array

//Evaluates the answer, updates score, and clears current question
  const onSubmit = (e) => {
    e.preventDefault()
    if (correctAnswer) {
      dispatchCorrect()
    } else {
      dispatchIncorrect()
    }
    dispatch(setCurrentQuestion({}, addData));
  };

  const dispatchCorrect = () => {
    question.isCorrect = true;
    dispatch(updateScore(question.value, addData));
    dispatch(addCorrectAnswer([question, ...state.correctAnswers], addData));
  };

  const dispatchIncorrect = () => {
    //Use this in the future to decrease the score
    // dispatch(updateScore(question.value, addData));
    dispatch(addIncorrectAnswer([question, ...state.incorrectAnswers], addData));
  };
  //refactor this...you probably don't need to use state
  const updateCorrectAnswer = () => {
    setCorrectAnswer(true)
  };

  const displayAnswer = () => {
    question.displayAnswer = true;
    dispatch(setCurrentQuestion(question, addData));
  };

  return (
    <Styled.FlashCard id="question-container">
    {
      question.displayAnswer ? (
          <Styled.Form  onSubmit={(e) => onSubmit(e)}>
            <Question question={question.answer} />
            <Styled.ButtonContainer>
              <Button onClick={updateCorrectAnswer} label="Correct" />
              <Button label="Incorrect" />
            </Styled.ButtonContainer>
          </Styled.Form>
            ) : (
              <Styled.QuestionContainer id="question-container" onClick={displayAnswer}>
                <Question question={question.question} />
              </Styled.QuestionContainer>
            )
            }
    </Styled.FlashCard>
  )
};

const mapStateToProps = () => {
    return store.getState()
}

export default connect(mapStateToProps)(FlashCard);