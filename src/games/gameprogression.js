import { startGame, numberGeneration } from '../index.js';

const description = 'What number is missing in the progression?';

const randomIntFromInterval = (min, max) =>  {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateRound = () => {
  const numDiff = randomIntFromInterval(1, 5);
  const firstElement = numberGeneration();
  const lengthOfProgression = randomIntFromInterval(5, 10);
  const hiddenIndex = randomIntFromInterval(0, (lengthOfProgression - 1));
  let  question = '';
  let currentElement = firstElement;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i !== 0 && i !== hiddenIndex) {
      question = `${question} ${currentElement}`;
    }
    if (i === 0) {
      question = `${currentElement}`;
    }
    if (i === hiddenIndex) {
      question = `${question} ..`;
    }
    currentElement += numDiff;
  }

  const rightAnswer = String(firstElement + numDiff * hiddenIndex);

  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
