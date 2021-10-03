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
import { updateGameComplete } from '../../store/actions/index';

const ScorePage = () => {
  const dispatch = useDispatch();
  const state = store.getState().appState;
  const correctAnswers = state.correctAnswers.length;
  const incorrectAnswers = state.incorrectAnswers.length;

  const getPercentCorrect = () => {
    const totalQuestions = incorrectAnswers + correctAnswers;
    console.log('cate',  correctAnswers / totalQuestions)
  }
  getPercentCorrect()

  return (
      <Card>
        <Card.Header>
          <Heading level={1}>Results</Heading>
        </Card.Header>
        <Card.Body>
          {/* might be better to have str vars here instead or 
          an object with a bunch of strings instead of 
          hardcoding the text */}
          <Styled.ResultsContainer>
            <Text>{`${scorePageText.numCorrect}: ${correctAnswers}`}</Text>
            <Text>{scorePageText.percentCorrect}</Text>
          </Styled.ResultsContainer>
        </Card.Body>
        <Card.Footer>
          <Text>{scorePageText.playAgain}</Text>
          <Button label={scorePageText.buttonText}/>
        </Card.Footer>
      </Card>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(ScorePage);