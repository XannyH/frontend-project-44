import readlineSync from 'readline-sync';
import greetings from './cli.js';


const numberGeneration = () => Math.floor(Math.random() * 100);

export default () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let num = numberGeneration();
    console.log(`Question: ${num}`);
    let rightAnswer = 'no';
    if (num % 2 === 0) {
      rightAnswer = 'yes';
    }
    let userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
