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
import { addCorrectAnswer, addPreviousQuestion } from '../../store/actions/index';
import { getQuestions } from '../../api/index';


const FlashCard = ({ question }) => {
  const dispatch = useDispatch();

  const state = store.getState().appState

  const [userAnswer, setUserAnswer] = useState('')
  // move current question to previous question
  //refresh game so that a new question is displayed 
const createForm  = () => {
  return (
  <form  onSubmit={(e) => onSubmit(e)}>
      <div id="question-container">
        <Question question={question.question} />
      </div>
      <div>
        <AnswerInput onChange={onChange} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
};
//Evaluates the answer
  const onSubmit = (e) => {
    e.preventDefault()
    if (userAnswer.includes(question.answer)) {
      console.log('on submit ran', question.value)
      dispatch(addCorrectAnswer(question.value, addData))
      dispatch(addPreviousQuestion([question, ...state.previousQuestions], addData))
    } 
    // return e.target.value.contains(answer)
  };

  // Todo rename this to something more descriptive
  const onChange = (e) => {
    const value = e.target.value
    setUserAnswer(value)
  }

  useEffect(() => {
    // if (!isEmpty(question)) {
    //   flashCard  = createForm();
    // }
  }, [question]);

  console.log(state)
  return (
    <form  onSubmit={(e) => onSubmit(e)}>
      <div id="question-container">
        <Question question={question.question} />
      </div>
      <div>
        <AnswerInput onChange={onChange} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
};

const mapStateToProps = () => {
    return store.getState()
}

export default connect(mapStateToProps)(FlashCard);