import * as readlinesync from 'readline-sync';

const input = readlinesync.question('Enter your name: ');
console.log(`Hello, ${input}!`);