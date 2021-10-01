import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { store } from '../../store/index';

//components
import AnswerInput from '../answer-input/answer-input.component';
import Question from '../question/question.component';

//redux
import { useDispatch } from "react-redux";
import addData from '../../store/reducers/index'
import { addQuestion} from '../../store/actions/index';
import { addCorrectAnswer } from '../../store/actions/index';
import { getQuestions } from '../../api/index';


const FlashCard = ({ question }) => {
  const dispatch = useDispatch();

  const state = store.getState().appState

  const [userAnswer, setUserAnswer] = useState('')
  //figure out why current question isn't being set
  //maybe move it into the flash card component?
  //add redux to update correct answers
  //evaluate answer onSubmit
    // if answer is correct update correct answers
  // move current question to previous question
  //refresh game so that a new question is displayed 

//Evaluates the answer
  const onSubmit = (e) => {
    e.preventDefault()
    if (userAnswer.includes(question.answer)) {
      // dispatch(addCorrectAnswer(question, addData))
    } 
    // return e.target.value.contains(answer)
  };

  // Todo rename this to something more descriptive
  const onChange = (e) => {
    const value = e.target.value
    setUserAnswer(value)
  }

  useEffect(() => {
    // if (!state.appState.currentRound.currentQuestion) {
    //   createQuestion(category)
    // }
  }, [question]);

  console.log('state', state);
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