import ShortId from 'shortid';

const availableCategories = [
  'artliterature',
  'language',
  'sciencenature',
  'general',
  'fooddrink',
  'peopleplaces',
  'geography',
  'historyholidays',
  'entertainment',
  'toysgames',
  'music',
  'mathematics', 
  'religionmythology',
  'sportsleisure'
];

export const getRandomCategory = () => {
    const randomNumber = Math.floor(Math.random() * availableCategories.length);
    //removes category so that it is not reused
    const category = availableCategories[randomNumber];
    availableCategories.splice(randomNumber, 1)
    return category;
  };

  export const adjustQuestionData = (question) => {
    if (question) {
      //Todo remove extra properties
      question.answerCorrect = false;
      question.displayAnswer = false;
      question.id = ShortId.generate();
      question.isComplete = false;
      question.value = 1;
      return question
    }
  };
  