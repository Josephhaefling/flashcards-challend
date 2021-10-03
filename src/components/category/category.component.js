import React, { useEffect } from 'react';

//components
import FlashCard from '../flash-card/flashcard.component';
import Styled from './category.styled';

//hooks
import { adjustQuestionData, getRandomCategory } from './useCategory.hook';

//lodash
import { isEmpty } from 'lodash';

//api call
import { getQuestions } from '../../api';

//redux
import { connect, useDispatch } from "react-redux"
import { store } from '../../store';
import addData from '../../store/reducers/index'
import { 
  addQuestion, 
  updateCategories, 
  updateGameComplete,
  setCurrentQuestion 
} from '../../store/actions/index';

const Category = ({ categoryTitle }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState;
  const fullCategory = state.categories[categoryTitle];

  const setCurrenctQuestion = () => {
    if (!isEmpty(fullCategory?.questions) && !fullCategory.categoryComplete) {
      const question = fullCategory.questions.pop();
      dispatch(updateCategories(state.categories, addData));
      dispatch(setCurrentQuestion(question, addData));
      updateCategoryIsComplete()
    }
  }; 

  const updateCategoryIsComplete = () => {
    if(isEmpty(fullCategory.questions) && isEmpty(state.currentQuestion)) {
      fullCategory.categoryComplete = true;
      dispatch(updateCategories(state.categories, addData));
      dispatch(updateGameComplete(true, addData));
    }
  }

  const createQuestions = async (category, numCategories, numQuestions) => {
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      const question = await getQuestions(category);
      const adjustedQuestion = adjustQuestionData(question.data[0]);
      questions.push(adjustedQuestion);
    } 
    state.categories[category].questions = questions
    dispatch(addQuestion(state.categories, addData));
  };

  useEffect(() => {
    if (fullCategory && isEmpty(fullCategory.questions)) {
      console.log('createQuestions')
      const category = categoryTitle || getRandomCategory();
      createQuestions(category, 1, 5);
    }
    if (isEmpty(state.currentQuestion)) {
      setCurrenctQuestion();
    }
  }, [createQuestions, setCurrentQuestion]);

  return (
    <Styled.Game>
      <FlashCard question={state.currentQuestion} />
    </Styled.Game>
  )
}
const mapStateToProps = () => store.getState();

export default connect(mapStateToProps)(Category);