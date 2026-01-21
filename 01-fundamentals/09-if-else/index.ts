// Lesson 9: if / else if / else
// Run code only when a condition is true.
// Run it: npx tsx 01-fundamentals/09-if-else/index.ts

import { ask } from "../../utils/input.ts";

// if runs its block only when the condition is true
const temperature: number = 31;
if (temperature > 30) {
  console.log("It's hot out. Drink some water!");
}

// else runs when the condition is false
const hour: number = 21;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good evening!");
}

// else if checks one condition after another. Only the first match runs.
const score: number = 83;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: below C");
}

// Combine conditions with && (and), || (or) and ! (not)
const age: number = 19;
const hasTicket: boolean = true;
if (age >= 18 && hasTicket) {
  console.log("Welcome to the concert!");
}

const isWeekend: boolean = false;
const isHoliday: boolean = true;
if (isWeekend || isHoliday) {
  console.log("No work today.");
}
if (!isWeekend) {
  console.log("It's a weekday.");
}

// Truthy and falsy: inside a condition, false, 0, "" (empty string), null,
// undefined and NaN all count as false. Every other value counts as true.
const nickname: string = "";
if (nickname) {
  console.log(`Hi, ${nickname}!`);
} else {
  console.log("No nickname set.");
}

// The ternary operator is a one-line if/else that produces a value:
//   condition ? valueIfTrue : valueIfFalse
const stock: number = 0;
const label = stock > 0 ? "In stock" : "Sold out";
console.log(label);

// Checking what the user typed
const text = ask("Pick a whole number from 1 to 10: ");
const pick = Number(text);
if (text === "" || Number.isNaN(pick)) {
  console.log("That's not a number.");
} else if (!Number.isInteger(pick) || pick < 1 || pick > 10) {
  console.log("That's not a whole number from 1 to 10.");
} else {
  const kind = pick % 2 === 0 ? "even" : "odd";
  console.log(`You picked ${pick}, which is ${kind}.`);
}
