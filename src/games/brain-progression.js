import { getRandomInt, gameCascade } from '../index.js';

const MIN = 0;
const MAX = 100;
const MIN_LENGTH = 5;
const MAX_LENGTH = 20;
const DESCRIPTION = 'What number is missing in the progression?';

const getProgression = (a, b) => {
  const arr = [];

  for (let i = a; i <= a + b; i += 1) {
    arr.push(i);
  }

  return arr;
};

const getProgressionAnswer = () => {
  const startNumber = getRandomInt(MIN, MAX);
  const progressionLength = getRandomInt(MIN_LENGTH, MAX_LENGTH);
  const progression = getProgression(startNumber, progressionLength);
  const randomIndex = getRandomInt(0, progressionLength);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  return rightAnswer;
};

export default () => {
  gameCascade(DESCRIPTION, getProgressionAnswer);
};
