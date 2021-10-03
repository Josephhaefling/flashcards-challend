import React from 'react';

//styles
import Styled from './home-page.styled';

//helpers
import { createOptions } from '../../helpers/helperFunctions';
import { homePageText } from '../../helpers/page-text';

//components
import Button from '../button/button.component';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import addData from '../../store/reducers/index'
import { startGame } from '../../store/actions/index';

const HomePage = ({ setCategory }) => {
  const dispatch = useDispatch();

    const handleSubmit = () => {
      dispatch(startGame(true, addData));
    }

    const categoryOnChange = (e) => {
      setCategory(e.target.value)
    }

  return (
    <Card>
      <Card.Header>
        <Heading level={1}>
          {homePageText.greeting}
        </Heading>
      </Card.Header>
      <Card.Body>
        <Text >
          {homePageText.chooseCategory}
        </Text>
        <Styled.Form 
          onChange={e => categoryOnChange(e)} 
          onSubmit={handleSubmit} 
        >
          <Styled.Select data-testid="category select" >            
            {createOptions()}
          </Styled.Select>
          <Styled.ButtonContainer>
            <Button label={homePageText.buttonText}/>
          </Styled.ButtonContainer>
        </Styled.Form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(HomePage);