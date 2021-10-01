import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { store } from '../../store/index';

// Lodash
import { isEmpty } from 'lodash';

//components
import AnswerInput from '../answer-input/answer-input.component';
import Question from '../question/question.component';

//redux
import { useDispatch } from "react-redux";
import addData from '../../store/reducers/index'
import { addQuestion} from '../../store/actions/index';
import { 
  addCorrectAnswer, 
  addPreviousQuestion, 
  setCurrentQuestion 
} from '../../store/actions/index';
import { getQuestions } from '../../api/index';

const FlashCard = ({ question }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState

  const [correctAnswer, setCorrectAnswer] = useState(false)

//Evaluates the answer, updates score, and clears current question
  const onSubmit = (e) => {
    e.preventDefault()
    if (correctAnswer) {
      console.log('log in onSubmit')
      question.isCorrect = true;
      dispatch(addCorrectAnswer(question.value, addData));
    } 
    dispatch(addPreviousQuestion([question, ...state.previousQuestions], addData));
    dispatch(setCurrentQuestion({}, addData));
  };

  const updateCorrectAnswer = () => {
    setCorrectAnswer(true)
  }

  const displayAnswer = () => {
    question.displayAnswer = true;
    dispatch(setCurrentQuestion(question, addData));
  }

  useEffect(() => {
    // if (!isEmpty(question)) {
    //   flashCard  = createForm();
    // }
  }, [question]);

  console.log(question)
  return (
    <div id="question-container">
    {
      question.displayAnswer ? (
        <form  onSubmit={(e) => onSubmit(e)}>
          <Question question={question.answer} />
          <div>
            <button onClick={updateCorrectAnswer}>Correct</button>
            <button>Incorrect</button>
          </div>
        </form>
            ) : (
              <div id="question-container" onClick={displayAnswer}>
              <Question question={question.question} />
              </div>
              )
            }
    </div>
  )
};

const mapStateToProps = () => {
    return store.getState()
}

export default connect(mapStateToProps)(FlashCard);