// Project: Guess & Calc
// A number guessing game and a calculator in one terminal app, built with
// everything from January: variables, operators, template literals, input,
// if/else, switch and loops.
// Run it: npx tsx 01-fundamentals/13-project-guess-and-calc/index.ts

import { ask } from "../../utils/input.ts";

const MIN = 1;
const MAX = 100;
const MAX_ATTEMPTS = 7;

// Stats for this session
let gamesPlayed = 0;
let gamesWon = 0;
let bestScore = 0; // fewest tries in a win (0 means no wins yet)
let calculations = 0;

console.log("=== Guess & Calc ===");

let running = true;
while (running) {
  console.log("");
  console.log("1) Number guesser");
  console.log("2) Calculator");
  console.log("3) Stats");
  console.log("4) Quit");
  const choice = ask("Choose an option: ");

  switch (choice) {
    case "1": {
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
        if (
          text === "" ||
          !Number.isInteger(value) ||
          value < MIN ||
          value > MAX
        ) {
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

      gamesPlayed++;
      if (guess === secret) {
        gamesWon++;
        const tries = attempts === 1 ? "try" : "tries";
        console.log(`You got it in ${attempts} ${tries}!`);
        if (bestScore === 0 || attempts < bestScore) {
          bestScore = attempts;
          console.log("New best score!");
        }
      } else {
        console.log(`Out of tries! The number was ${secret}.`);
      }
      break;
    }

    case "2": {
      const firstText = ask("First number: ");
      const operator = ask("Operator (+ - * / % **): ");
      const secondText = ask("Second number: ");
      const a = Number(firstText);
      const b = Number(secondText);
      if (
        firstText === "" ||
        secondText === "" ||
        Number.isNaN(a) ||
        Number.isNaN(b)
      ) {
        console.log("Both values need to be numbers.");
        break;
      }

      let result = 0;
      let valid = true;
      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
        case "%":
          if (b === 0) {
            console.log("Can't divide by zero.");
            valid = false;
          } else {
            result = operator === "/" ? a / b : a % b;
          }
          break;
        case "**":
          result = a ** b;
          break;
        default:
          console.log(`Unknown operator "${operator}".`);
          valid = false;
      }
      if (valid) {
        calculations++;
        console.log(`${a} ${operator} ${b} = ${result}`);
      }
      break;
    }

    case "3":
      console.log(`Games played: ${gamesPlayed} (won ${gamesWon})`);
      console.log(`Best score:   ${bestScore === 0 ? "none yet" : bestScore}`);
      console.log(`Calculations: ${calculations}`);
      break;

    case "4":
      running = false;
      break;

    default:
      console.log("Unknown option.");
  }
}

console.log("Thanks for playing!");
console.log(`Games won: ${gamesWon} of ${gamesPlayed}`);
console.log(`Calculations: ${calculations}`);
