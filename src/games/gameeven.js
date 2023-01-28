import { startGame, numberGeneration } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => {
  if (number % 2 == 0) {
    return 'yes';
  } else {
    return 'no';
  }
};

const generateRound = () => {
  const number = numberGeneration();
  const rightAnswer = isEven(number);
  const question = `${number}`;
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
