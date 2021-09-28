import axios from 'axios';

//Todo adjust function that will get several questions of the same category
export  const getQuestions = (args) => {
  //Number doesn't need to do anything until we turn this into Jeopardy
  const {category, number } = args;

  return axios.get(`https://api.api-ninjas.com/v1/trivia?category=${category}`);
}