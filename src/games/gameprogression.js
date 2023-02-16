import { startGame, numberGeneration } from '../index.js';

const description = 'What number is missing in the progression?';

const randomIntFromInterval = (min, max) =>  {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRound = () => {
  // generate initial data of progression
  const progressionStep = randomIntFromInterval(1, 5);
  const firstNumber = numberGeneration();
  const lengthOfProgression = randomIntFromInterval(5, 10);
  const hiddenIndex = randomIntFromInterval(0, (lengthOfProgression - 1));
  // generate progression arr
  const generateProgressionArr = () => {
    const progressionArr = [];
    for (let i = 0; i < lengthOfProgression; i += 1) {
      if (i === hiddenIndex) {
        progressionArr.push('..');
      }
      if (i !== hiddenIndex) {
        progressionArr.push(firstNumber + progressionStep * i);
      }
    }
    return progressionArr;
  };
  const question = generateProgressionArr().join(' ');
  const rightAnswer = String(firstNumber + progressionStep * hiddenIndex);
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
