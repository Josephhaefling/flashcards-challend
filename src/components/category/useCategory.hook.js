import ShortId from 'shortid';
import { availableCategories } from '../../helpers/available-categories';

export const getRandomCategory = () => {
    const  categoryKeys = Object.keys(availableCategories);
    const randomNumber = Math.floor(Math.random() * categoryKeys.length);
    const category = categoryKeys[randomNumber];
    return category;
  };

  export const adjustQuestionData = (question) => {
    if (question) {
      question.answerCorrect = false;
      question.displayAnswer = false;
      question.id = ShortId.generate();
      question.value = 1;
      return question
    }
  };
  