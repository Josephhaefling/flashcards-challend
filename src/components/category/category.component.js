import React, { useEffect, useState } from 'react';
import FlashCard from '../flash-card/flashcard.component';
import { adjustQuestionData, getRandomCategory } from './useCategory.hook';
import { isEmpty } from 'lodash';
import Styled from './category.styled';
//redux
import { connect } from "react-redux"
import { store } from '../../store';
import { useDispatch } from "react-redux";
import addData from '../../store/reducers/index'
import { getQuestions } from '../../api';
import { addQuestion, updateQuestions, setCurrentQuestion } from '../../store/actions/index';

const Category = ({ category }) => {
  console.log('category in category', category);
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
  
  const createQuestions = async (category, numCategories, numQuestions) => {
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      // const question = await getQuestions(category);
      const question = { data :[{ category: 'stuff', question: 'huh',  answer: 'what' }] };
      const adjustedQuestion = adjustQuestionData(question.data[0]);
      questions.push(adjustedQuestion);

    } 
    dispatch(addQuestion(questions, addData));
  };
  
  useEffect(() => {
    if (!state.questions || isEmpty(state.questions)) {
      const category = getRandomCategory();
      createQuestions(category, 1, 5);
    }
    if (isEmpty(state.currentQuestion)) {
      setCurrenctQuestion();
    }
  }, [createQuestions, setCurrentQuestion])

  return (
    <Styled.Game>
      <FlashCard question={state.currentQuestion} />
    </Styled.Game>
  )
}
const mapStateToProps = () => store.getState()

export default connect(mapStateToProps)(Category);