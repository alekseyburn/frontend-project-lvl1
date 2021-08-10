import { getRandomInt, gameCascade } from '../index.js';

const MIN = 0;
const MAX = 100;
const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeAnswer = () => {
  const randomNumber = getRandomInt(MIN, MAX);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  return rightAnswer;
};

export default () => {
  gameCascade(DESCRIPTION, getPrimeAnswer);
};
