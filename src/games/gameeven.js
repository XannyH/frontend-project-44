import { startGame } from '../index.js';
import { randomIntFromInterval } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const number = randomIntFromInterval(1, 100);
  let rightAnswer = '';
  if (isEven(number) === true) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  const question = String(number);
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
