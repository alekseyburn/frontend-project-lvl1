import { getRandomInt, gameCascade } from '../index.js';

const MIN = 0;
const MAX = 100;
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => !(n % 2);

const getEvenAnswer = () => {
  const randomNumber = getRandomInt(MIN, MAX);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  return rightAnswer;
};

export default () => {
  gameCascade(DESCRIPTION, getEvenAnswer);
};
