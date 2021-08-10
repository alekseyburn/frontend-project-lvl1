import { getRandomInt, gameCascade } from '../index.js';

const MIN = 0;
const MAX = 100;
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};

const getGcdAnswer = () => {
  const firstNum = getRandomInt(MIN, MAX);
  const secondNum = getRandomInt(MIN, MAX);
  const rightAnswer = gcd(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);

  return rightAnswer;
};

export default () => {
  gameCascade(DESCRIPTION, getGcdAnswer);
};
