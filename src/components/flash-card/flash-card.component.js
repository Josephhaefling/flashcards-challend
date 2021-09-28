import React, { useState } from 'react';
import AnswerInput from '../answer-input/answer-input.component';
import Question from '../question/question.component';
const FlashCard = (cardQuestion) => {
// Flash cards at minimum will have: a category, a question and an answer
// Clicking on the flash card reveals the answer
// The user is then prompted whether or not their answer was correct.  
// After the user answers the next random flash card is displayed.
  const [userAnswer, setUserAnswer] = useState('');
  const { answer, category, question } = cardQuestion;

  const onSubmit = (e) => {
    return answer === e.target.value
  };
  //Todo rename this to something more descriptive
  const onChange = (e) => {
    const value = e.target.value
    setUserAnswer(value)
  }

  return (
    <div>
      <div id="CardBody">
        <form>
          <Question question={question}/>
          <AnswerInput question={question} onChange={onChange} />
        </form>
      </div>
      <div id="CardFooter">
        {
          // <SubmitButton onSubmit={onSubmit}/>
        }
      </div>
    </div>
  )
};

export default FlashCard;