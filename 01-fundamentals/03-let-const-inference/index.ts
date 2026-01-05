// Lesson 3: let, const and type inference
// Run it: npx tsx 01-fundamentals/03-let-const-inference/index.ts

// const: the variable can never be given a new value.
const birthYear = 1999;
console.log("Born in", birthYear);
// birthYear = 2000;
//   -> Cannot assign to 'birthYear' because it is a constant.

// let: the value can change later.
let score = 0;
console.log("Score:", score);
score = 10;
score = score + 5;
console.log("Score:", score);

// Rule of thumb: use const by default and let only when the value changes.
// (There's an older keyword, var. Skip it: its scope rules are confusing.)
