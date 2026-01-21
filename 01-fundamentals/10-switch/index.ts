// Lesson 10: switch statements
// Compare one value against a list of cases.
// Run it: npx tsx 01-fundamentals/10-switch/index.ts

// switch checks the value against each case (using ===) and runs the first
// one that matches. default runs when nothing matches.
const dayNumber: number = 3;
let dayName: string;
switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "not a day";
}
console.log(`Day ${dayNumber} is ${dayName}.`);
