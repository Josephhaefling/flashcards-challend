import { availableCategories } from '../../helpers/available-categories';
//if this is all that we are going to have in this component,
// an updated naming convention for the file name can be 'useGameCategories'

export const getRandomCategories = (number = 1) => {
    const categories = []
    for (let i = 0; i < number; i ++) {
      const randomNumber = Math.floor(Math.random() * availableCategories.length);
      const category = availableCategories[randomNumber];
      availableCategories.splice(randomNumber, 1)
      categories.push(category)
    }
    return categories;
  };
