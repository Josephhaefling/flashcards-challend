import React from 'react';

//redux
import { connect, useDispatch } from "react-redux";
import { store } from '../../store/index';
import addData from '../../store/reducers/index'
import { startGame } from '../../store/actions/index';


import { availableCategories } from '../../available-categories/available-categories';

//components
import Question from '../question/question.component';
import Button from '../button/button.component';

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
    <div>
      <Question color="black" question="Welcome To Flashcards" />
      <Question color="black" question="Would you like to choose a category?" />
      <form onChange={e => handleChange(e)} onSubmit={handleSubmit} >
        <select>
          <option key="random" value="Random">Random</option>
          {createOptions()}
        </select>
        <div>
          <Button color="black" label="StartGame"/>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(HomePage);