import React, { useState } from 'react';
import AnswerInput from '../answer-input/answer-input.component';
import Question from '../question/question.component';
const FlashCard = (cardQuestion) => {
// Flash cards at minimum will have: a category, a question and an answer
// Clicking on the flash card reveals the answer
// The user is then prompted whether or not their answer was correct.  
  // const [userAnswer, setUserAnswer] = useState('');
  //Set on Submit
  // const [correct, setCorrect] = useEffect();
  // const [questionAnswered, setQuestionAnswered] = useState(false);
  // const { answer, category, question } = cardQuestion;

//Evaluates the answer
  // const onSubmit = (e) => {
  //   setQuestionAnswered(true)
  //   return e.target.value.contains(answer)
  // };

  //Todo rename this to something more descriptive
  // const onChange = (e) => {
  //   const value = e.target.value
  //   setUserAnswer(value)
  // }

  return (
    <div>
      {/* <div id="CardBody">
        <form>
          <Question question={question}/>
          <AnswerInput question={question} onChange={onChange} />
        </form>
      </div>
      <div id="CardFooter"> */}
        {/* {
          questionAnswered ?
          // <div>result of answer</div>
          // <SubmitButton onSubmit={onSubmit}/>
        } */}
      {/* </div> */}
    </div>
  )
};

export default FlashCard;