import React from 'react';

//styles
import Styled from './home-page.styled';

//helpers
import { availableCategories } from '../../helpers/available-categories';
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
  
  // can this be moved out of the component for performance?
  const createOptions = () => {
    const categoryKeys = Object.keys(availableCategories);
    return categoryKeys.map(category => {
      return (
        <option key={category} value={category}>
          {availableCategories[category]}
        </option>
          )
        }
      )
    };

    const handleSubmit = () => {
      dispatch(startGame(true, addData));
    }

    const handleChange = (e) => {
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
        <Styled.Form onChange={e => handleChange(e)} onSubmit={handleSubmit} >
          <Styled.Select>
            {/* this might be bad practice to name a key 'random' here */}
            <option key="random" value={null} >Random</option>
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