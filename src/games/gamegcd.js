import startGame from '../index.js';
import randomIntFromInterval from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const lessNum = Math.min(number1, number2);
  let gcd = 0;
  if (number1 === 0 || number2 === 0) {
    return Math.max(number1, number2);
  }

  for (let i = 0; i <= lessNum; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateRound = () => {
  const number1 = randomIntFromInterval(1, 100);
  const number2 = randomIntFromInterval(1, 100);
  const rightAnswer = String(findGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
