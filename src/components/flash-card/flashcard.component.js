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
  addCorrectQuestion, 
  setCurrentQuestion 
} from '../../store/actions/index';
import { getQuestions } from '../../api/index';
import Styled from './flashcard.styled';

const FlashCard = ({ question }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState

  const [correctAnswer, setCorrectAnswer] = useState(false)

  //Todo
  // add correct answers to correct answers array
  // add incorrect answers to incorrect answers array

//Evaluates the answer, updates score, and clears current question
  const onSubmit = (e) => {
    e.preventDefault()
    if (correctAnswer) {
      question.isCorrect = true;
      console.log('on submit ran', question.isCorrect)
      dispatch(addCorrectAnswer(question.value, addData));
      dispatch(addCorrectQuestion([question, ...state.previousQuestions], addData));
    } 
    dispatch(setCurrentQuestion({}, addData));
  };

  const updateCorrectAnswer = () => {
    setCorrectAnswer(true)
    console.log('update correct', correctAnswer)
  };

  const displayAnswer = () => {
    question.displayAnswer = true;
    dispatch(setCurrentQuestion(question, addData));
  };

  return (
    <Styled.FlashCard id="question-container">
    {
      question.displayAnswer ? (
        <form  onSubmit={(e) => onSubmit(e)}>
          <Question question={question.answer} />
          <div>
            <Button onClick={updateCorrectAnswer} label="Correct" />
            <Button label="Incorrect" />
          </div>
        </form>
            ) : (
              <div id="question-container" onClick={displayAnswer}>
              <Question question={question.question} />
              </div>
              )
            }
    </Styled.FlashCard>
  )
};

const mapStateToProps = () => {
    return store.getState()
}

export default connect(mapStateToProps)(FlashCard);