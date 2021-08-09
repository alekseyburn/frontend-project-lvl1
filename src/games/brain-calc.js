import { getRandomInt, gameCascade } from '../index.js';

const MIN = 0;
const MAX = 100;
const OPERATORS = ['+', '-', '*'];
const DESCRIPTION = 'What is the result of the expression?';

const calculate = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'unknown operator';
  }
};

const getCalculateAnswer = () => {
  const firstNum = getRandomInt(MIN, MAX);
  const secondNum = getRandomInt(MIN, MAX);
  const operator = OPERATORS[getRandomInt(MIN, OPERATORS.length - 1)];
  const rightAnswer = calculate(operator, firstNum, secondNum);

  console.log(`Question: ${firstNum} ${operator} ${secondNum}`);

  return rightAnswer;
};

export default () => {
  gameCascade(DESCRIPTION, getCalculateAnswer);
};
