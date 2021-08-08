import readlineSync from 'readline-sync';
import greeter from '../cli.js';

const isEven = (n) => !!(n % 2 === 0);

export default () => {
  const name = greeter();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
