import React from 'react';

const AnswerInput = (question, onChange) => {
  //Todo Add mask 
  return (
    <input 
      // checked={checkedLogic}
      id={question}
      name={question}
      onChange={onChange}
      type="text" 
    />
  )
}

export default AnswerInput;