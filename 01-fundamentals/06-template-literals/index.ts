// Lesson 6: Template literals
// Strings in backticks can hold ${expressions} and span several lines.
// Run it: npx tsx 01-fundamentals/06-template-literals/index.ts

const name: string = "Sam";
const lessonsDone: number = 6;

// Building a sentence with + gets messy:
console.log("Hi " + name + ", you've finished " + lessonsDone + " lessons.");
// A template literal reads much better:
console.log(`Hi ${name}, you've finished ${lessonsDone} lessons.`);

// Any expression works inside ${ }
const price: number = 4.5;
const quantity: number = 3;
console.log(`Total: ${price * quantity}`);
console.log(`Next up: lesson ${lessonsDone + 1}`);
console.log(`More than 5 done? ${lessonsDone > 5}`);
