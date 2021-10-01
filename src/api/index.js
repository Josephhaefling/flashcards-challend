import axios from 'axios';
const url = 'https://api.api-ninjas.com/v1/trivia?category='

    // headers: { 'X-Api-Key': 'YOUR_API_KEY'},

//Todo adjust function that will get several questions of the same category
export  const getQuestions = (category) => {
  return axios.get(`${url}${category}`, {
    headers: { 'X-Api-Key': 'eNGhjNRZQP03skABTlTyJQ==9G0M39Q9onpxT4Jb'},
  });
}
