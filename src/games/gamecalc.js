import { startGame } from '../index.js';
import { randomIntFromInterval } from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, expressionSign) => {
  if (expressionSign === '+') {
    return number1 + number2;
  }
  if (expressionSign === '-') {
    return number1 - number2;
  }
  if (expressionSign === '*') {
    return number1 * number2;
  }
};

const generateRound = () => {
  const number1 = randomIntFromInterval(1, 100);
  const number2 = randomIntFromInterval(1, 100);
  const expressionSigns = ['+', '-', '*'];
  const signRandomizer = expressionSigns[Math.floor(Math.random() * expressionSigns.length)];
  const rightAnswer = String(calculate(number1, number2, signRandomizer));
  const question = `${number1} ${signRandomizer} ${number2}`;
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
