// Lesson 7: Reading console input
// Run it: npx tsx 01-fundamentals/07-console-input/index.ts
// Or pipe the answers in:
//   printf "Sam\n27\nseven\n" | npx tsx 01-fundamentals/07-console-input/index.ts

// ask() lives in utils/input.ts. It prints a question, waits for a line of
// input and gives it back as a string. import brings it into this file.
import { ask } from "../../utils/input.ts";

const name = ask("What's your name? ");
console.log(`Nice to meet you, ${name}!`);

// ask() always gives back a string, even when the user types digits.
const ageText = ask("How old are you? ");
console.log(typeof ageText); // string
// "27" + 1 would be "271", so convert the text to a number first:
const age = Number(ageText);
console.log(`Next year you'll be ${age + 1}.`);

// When the text isn't a number, Number() gives NaN ("Not a Number").
// NaN's type is still number, so check for it with Number.isNaN().
const luckyText = ask("What's your lucky number? ");
const lucky = Number(luckyText);
console.log(`Number("${luckyText}") is ${lucky}`);
console.log(`Is that NaN? ${Number.isNaN(lucky)}`);
// Next week, if statements will let us react to bad input.

// parseInt and parseFloat read a number from the start of the text:
console.log(Number("42px")); // NaN
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.5kg")); // 3.5
console.log(Number("")); // 0 (careful: an empty answer turns into 0!)
