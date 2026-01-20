// Lesson 9: if / else if / else
// Run code only when a condition is true.
// Run it: npx tsx 01-fundamentals/09-if-else/index.ts

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
