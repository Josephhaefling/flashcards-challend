import React from 'react';

const AnswerInput = ({ onChange }) => {
  //Todo Add mask 
  return (
    <input 
      // id={question}
      // name={question}
      onChange={e => onChange(e)}
      type="text" 
    />
  )
}

export default AnswerInput;