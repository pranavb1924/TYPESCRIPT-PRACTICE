// Project: Guess & Calc
// A number guessing game for the terminal (a calculator is coming next).
// Run it: npx tsx 01-fundamentals/13-project-guess-and-calc/index.ts

import { ask } from "../../utils/input.ts";

const MIN = 1;
const MAX = 100;

// Math.random() gives a decimal from 0 up to (but not including) 1.
// Scale it up to MIN-MAX and drop the decimals with Math.floor().
const secret = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

console.log(`I'm thinking of a number from ${MIN} to ${MAX}.`);
let guess = 0;
let attempts = 0;
while (guess !== secret) {
  guess = Number(ask("Your guess: "));
  attempts++;
  if (guess < secret) {
    console.log("Too low!");
  } else if (guess > secret) {
    console.log("Too high!");
  }
}
console.log(`You got it in ${attempts} tries!`);
