// Lesson 11: Loops
// for, while and do...while, plus break and continue.
// Run it: npx tsx 01-fundamentals/11-loops/index.ts

import { ask } from "../../utils/input.ts";

// for loop: for (start; keep going while this is true; after each round)
for (let lap = 1; lap <= 5; lap++) {
  console.log(`Lap ${lap}`);
}

// Counting down
for (let i = 3; i > 0; i--) {
  console.log(`${i}...`);
}
console.log("Liftoff!");

// Adding up 1 + 2 + ... + 100
let sum = 0;
for (let n = 1; n <= 100; n++) {
  sum += n;
}
console.log(`1 + 2 + ... + 100 = ${sum}`);

// while loop: repeats as long as its condition is true. Good for when you
// don't know ahead of time how many rounds you need.
let savings = 100;
let years = 0;
while (savings < 200) {
  savings *= 1.07; // 7% growth per year
  years++;
}
console.log(`$100 doubles after ${years} years ($${savings.toFixed(2)}).`);

// break jumps out of a loop early
for (let n = 50; n < 100; n++) {
  if (n % 7 === 0) {
    console.log(`First multiple of 7 from 50 up: ${n}`);
    break;
  }
}

// do...while runs its body once before checking the condition, so it's a
// natural fit for "keep asking until the answer is OK".
let answer = "";
do {
  answer = ask("Type yes to finish the lesson: ");
} while (answer !== "yes");
console.log("Lesson complete!");
