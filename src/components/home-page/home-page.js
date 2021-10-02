import React from 'react';

import Styled from './home-page.styled';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import addData from '../../store/reducers/index'
import { startGame } from '../../store/actions/index';

//helpers
import { availableCategories } from '../../available-categories/available-categories';

//components
import Button from '../button/button.component';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';

const HomePage = ({ setCategory }) => {
  const dispatch = useDispatch();
  
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
          Welcome to Flashcards
        </Heading>
      </Card.Header>
      <Card.Body>
        <Text >
          Would you like to choose a category?
        </Text>
        <form onChange={e => handleChange(e)} onSubmit={handleSubmit} >
          <select>
            <option key="random" value="Random">Random</option>
            {createOptions()}
          </select>
          <div>
            <Button label="StartGame"/>
          </div>
        </form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(HomePage);