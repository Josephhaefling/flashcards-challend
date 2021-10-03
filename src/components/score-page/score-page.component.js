import React from 'react';

//styles
import Styled from './score-page.styled';

//helpers
import { scorePageText } from '../../helpers/page-text';

//components
import Button from '../button/button.component';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';

//redux
import { connect, useDispatch } from "react-redux"
import { store } from '../../store';
import addData from '../../store/reducers/index'
import { 
  addCorrectAnswer,
  addIncorrectAnswer,
  resetScore, 
  startGame,
  setCurrentQuestion,
  updateCategories, 
  updateGameComplete
} from '../../store/actions/index';

const ScorePage = () => {
  const dispatch = useDispatch();
  const state = store.getState().appState;
  const correctAnswers = state.correctAnswers.length;
  const incorrectAnswers = state.incorrectAnswers.length;
  const percentCorrect = Math.round((correctAnswers / (incorrectAnswers + correctAnswers)) * 100);

  const onClick = () => {
    dispatch(addCorrectAnswer([], addData));
    dispatch(addIncorrectAnswer([], addData));
    dispatch(setCurrentQuestion({}, addData));
    dispatch(updateCategories({}, addData));
    dispatch(updateGameComplete(false, addData));
    dispatch(resetScore(0, addData));
    dispatch(startGame(false, addData));
  };

  return (
      <Card>
        <Card.Header>
          <Heading level={1}>Results</Heading>
        </Card.Header>
        <Card.Body>
          <Styled.ResultsContainer>
            <Text>{`${scorePageText.numCorrect}: ${correctAnswers}`}</Text>
            <Text>{`${scorePageText.percentCorrect}: ${percentCorrect}%`}</Text>
          </Styled.ResultsContainer>
        </Card.Body>
        <Card.Footer>
          <Text>{scorePageText.playAgain}</Text>
          <Button label={scorePageText.buttonText} onClick={onClick} />
        </Card.Footer>
      </Card>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(ScorePage);