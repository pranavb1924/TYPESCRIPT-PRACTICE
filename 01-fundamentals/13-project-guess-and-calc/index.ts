// Project: Guess & Calc
// A number guessing game for the terminal (a calculator is coming next).
// Run it: npx tsx 01-fundamentals/13-project-guess-and-calc/index.ts

import { ask } from "../../utils/input.ts";

const MIN = 1;
const MAX = 100;
const MAX_ATTEMPTS = 7;

// Math.random() gives a decimal from 0 up to (but not including) 1.
// Scale it up to MIN-MAX and drop the decimals with Math.floor().
const secret = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

console.log(`I'm thinking of a number from ${MIN} to ${MAX}.`);
console.log(`You have ${MAX_ATTEMPTS} tries.`);
let guess = 0;
let attempts = 0;
while (guess !== secret && attempts < MAX_ATTEMPTS) {
  const text = ask("Your guess: ");
  const value = Number(text);
  if (text === "" || !Number.isInteger(value) || value < MIN || value > MAX) {
    console.log(`Please enter a whole number from ${MIN} to ${MAX}.`);
    continue;
  }

  guess = value;
  attempts++;
  const distance = Math.abs(secret - guess);
  if (guess < secret) {
    console.log(distance <= 10 ? "Too low, but close!" : "Too low.");
  } else if (guess > secret) {
    console.log(distance <= 10 ? "Too high, but close!" : "Too high.");
  }
}

if (guess === secret) {
  console.log(`You got it in ${attempts} tries!`);
} else {
  console.log(`Out of tries! The number was ${secret}.`);
}
