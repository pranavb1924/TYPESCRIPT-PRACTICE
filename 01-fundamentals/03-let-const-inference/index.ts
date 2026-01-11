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

// Type inference: no annotation needed. TypeScript works out the type from
// the starting value. (Hover over a variable in VS Code to see it.)
let message = "hi"; // string
let count = 3; // number
let isReady = false; // boolean
message = "hello";
count = count + 1;
isReady = true;
console.log(message, count, isReady);
// count = "four";
//   -> Type 'string' is not assignable to type 'number'.

// A const that holds a primitive gets a *literal type*: the exact value.
const language = "TypeScript"; // type: "TypeScript"
let otherLanguage = "JavaScript"; // type: string, because it can change
otherLanguage = "Python";
console.log(language, otherLanguage);

// So when should you write a type yourself? When there's no starting value
// for TypeScript to look at:
let city: string;
city = "Lisbon";
console.log(city);

// Rule of thumb: use const by default and let only when the value changes.
// (There's an older keyword, var. Skip it: its scope rules are confusing.)
