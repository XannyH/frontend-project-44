import readlineSync from 'readline-sync';

const name = (userName) => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { name };
