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

// Template literals can span several lines, line breaks included
const receipt = `
  Coffee x ${quantity}
  ------------
  Total: $${price * quantity}
`;
console.log(receipt);

// Formatting numbers
const share: number = 10 / 3;
console.log(share); // 3.3333333333333335
console.log(share.toFixed(2)); // 3.33 (toFixed gives back a string)
console.log(`Each pays $${share.toFixed(2)}`);

// toLocaleString adds thousands separators.
// (The underscores in 4_500_000 are only there to make it easier to read.)
const population: number = 4_500_000;
console.log(population.toLocaleString("en-US")); // 4,500,000
