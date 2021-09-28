export  const getQuestions = (args) => {
  const {category, number } = args;
  fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}${number}`)
}