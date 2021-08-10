import readlineSync from 'readline-sync';
import greeter from './cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameCascade = (description, gameLogic) => {
  const userName = greeter();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = String(gameLogic(userName));
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, gameCascade };
