// Build: running stats
// Type numbers one per line, then leave a line empty to see the stats.
// Run it: npx tsx 01-fundamentals/12-number-stats/index.ts

import { ask } from "../../utils/input.ts";

console.log("Enter one number per line. Leave a line empty to finish.");

let count = 0;
let sum = 0;

while (true) {
  const text = ask(`#${count + 1}: `);
  if (text === "") {
    break;
  }

  const value = Number(text);
  count++;
  sum += value;
}

console.log(`Count: ${count}`);
console.log(`Sum: ${sum}`);
