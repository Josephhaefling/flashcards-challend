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
  updateQuestions, 
  setCurrentQuestion 
} from '../../store/actions/index';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const state = store.getState().appState;

  const setCurrenctQuestion = () => {
    if (state.questions) {
      const question = state.questions.pop();
      dispatch(updateQuestions(state.questions, addData));
      dispatch(setCurrentQuestion(question, addData));
    }
  };
  
  const createQuestions = async (category, numCategories, numQuestions) => {
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      const question = await getQuestions(category);
      // const question = { data :[{ category: 'stuff', question: 'huh?',  answer: 'what' }] };
      const adjustedQuestion = adjustQuestionData(question.data[0]);
      questions.push(adjustedQuestion);
    } 
    dispatch(addQuestion(questions, addData));
  };
  
  useEffect(() => {
    if (!state.questions || isEmpty(state.questions)) {
      const categoryTitle = category || getRandomCategory();
      createQuestions(categoryTitle, 1, 5);
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