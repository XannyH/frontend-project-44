import { startGame } from '../index.js';
import { randomIntFromInterval } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = randomIntFromInterval(1, 100);
  let rightAnswer = '';
  if (isPrime(number) === true) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  const question = String(number);
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
