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
