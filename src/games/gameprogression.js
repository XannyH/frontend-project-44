import { startGame } from '../index.js';
import { randomIntFromInterval } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  // generate initial data of progression
  const progressionStep = randomIntFromInterval(1, 5);
  const firstNumber = randomIntFromInterval(1, 100);
  const lengthOfProgression = randomIntFromInterval(5, 10);
  const hiddenIndex = randomIntFromInterval(0, (lengthOfProgression - 1));
  // generate progression
  const generateProgressionArr = () => {
    const progressionArr = [];
    for (let i = 0; i < lengthOfProgression; i += 1) {
      progressionArr.push(firstNumber + progressionStep * i);
    }
    return progressionArr;
  };
  const progression = generateProgressionArr();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const rightAnswer = String(firstNumber + progressionStep * hiddenIndex);
  return [question, rightAnswer];
};

export default () => startGame(description, generateRound);
