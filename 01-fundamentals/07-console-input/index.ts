// Lesson 7: Reading console input
// Run it: npx tsx 01-fundamentals/07-console-input/index.ts
// Or pipe the answers in:
//   printf "Sam\n27\nseven\n" | npx tsx 01-fundamentals/07-console-input/index.ts

// ask() lives in utils/input.ts. It prints a question, waits for a line of
// input and gives it back as a string. import brings it into this file.
import { ask } from "../../utils/input.ts";

const name = ask("What's your name? ");
console.log(`Nice to meet you, ${name}!`);
