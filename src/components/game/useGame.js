import { availableCategories } from '../../helpers/available-categories';

export const getRandomCategories = (number = 1) => {
    const categories = []
    for (let i = 0; i < number; i ++) {
      const categoryKeys = Object.keys(availableCategories)
      const randomNumber = Math.floor(Math.random() * categoryKeys.length);
      const category = categoryKeys[randomNumber];
      categories.push(category)
    }
    return categories;
  };
