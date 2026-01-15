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
