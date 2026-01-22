// Lesson 10: switch statements
// Compare one value against a list of cases.
// Run it: npx tsx 01-fundamentals/10-switch/index.ts

import { ask } from "../../utils/input.ts";

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

// Stack cases with no code between them to share the same code.
switch (dayNumber) {
  case 0:
  case 6:
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a weekday.");
}

// break ends the switch. Without it, the code "falls through" and keeps
// running the next case too. That's almost always a bug, so tsconfig.json
// turns on "noFallthroughCasesInSwitch" and tsc reports any case that runs
// some code and then forgets its break.

// switch works with strings too. A tiny command menu:
console.log("Commands: start, help, quit");
const command = ask("Command: ");
switch (command) {
  case "start":
    console.log("Starting the game...");
    break;
  case "help":
    console.log("Type start to play or quit to leave.");
    break;
  case "quit":
    console.log("Bye!");
    break;
  default:
    console.log(`Unknown command: "${command}"`);
}
