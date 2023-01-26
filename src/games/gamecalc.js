import { startGame, numberGeneration } from '../index.js';

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
  const number1 = numberGeneration();
  const number2 = numberGeneration();
  const expressionSigns = ['+', '-', '*'];
  const signRandomizer = expressionSigns[Math.floor(Math.random() * expressionSigns.length)];
  const rightAnswer = String(calculate(number1, number2, signRandomizer));
  const question = `${number1} ${signRandomizer} ${number2}`;
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
