import React, { useEffect, useState } from 'react';
import FlashCard from '../flash-card/flash-card.component';
import { adjustQuestionData, getRandomCategory } from './useGame.hook';
import { isEmpty } from 'lodash';
//redux
import { connect } from "react-redux"
import { store } from '../../store';
import { useDispatch } from "react-redux";
import addData from '../../store/reducers/index'
import { addQuestion, updateQuestions, setCurrentQuestion } from '../../store/actions/index';

const Game = () => {
  // Your application should display a random question as a flash card - planned
  //  The application will save correct/incorrect history for each question
  // After the user answers the next random flash card is displayed. - planned
  const dispatch = useDispatch();
  const state = store.getState().appState

  const setCurrenctQuestion = () => {
    if (state.questions) {
      const question = state.questions.pop();
      dispatch(updateQuestions(state.questions, addData));
      dispatch(setCurrentQuestion(question, addData));
    }
  }
  
  const createQuestions = async (category, numQuestions) => {
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      // const question = await getQuestions(category)
      const question = { data :[{ category: 'stuff', question: 'huh',  answer: 'what' }] };
      const adjustedQuestion = adjustQuestionData(question.data[0]);
      questions.push(adjustedQuestion);

    } 
    dispatch(addQuestion(questions, addData));
  };
  
  useEffect(() => {
    if (!state.questions || isEmpty(state.questions)) {
      const category = getRandomCategory();
      createQuestions(category, 5);
    }
    if (isEmpty(state.currentQuestion)) {
      setCurrenctQuestion();
    }
  }, [createQuestions, setCurrentQuestion])

  return (
    <div>
      <FlashCard question={state.currentQuestion} />
    </div>
  )
}
const mapStateToProps = () => store.getState()

export default connect(mapStateToProps)(Game);