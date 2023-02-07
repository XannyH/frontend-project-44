import { startGame, numberGeneration } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const number = numberGeneration();
  const rightAnswer = isPrime(number);
  const question = `${number}`;
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
