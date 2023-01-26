import readlineSync from 'readline-sync';

export const numberGeneration = () => Math.floor(Math.random() * 100);

export const startGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = generateRound(i);
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i == 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};


