// Lesson 5: Operators
// Arithmetic, comparison and logical operators.
// Run it: npx tsx 01-fundamentals/05-operators/index.ts

const a: number = 17;
const b: number = 5;

// Arithmetic
console.log("a + b =", a + b); // 22
console.log("a - b =", a - b); // 12
console.log("a * b =", a * b); // 85
console.log("a / b =", a / b); // 3.4 (division keeps the decimals)
console.log("a % b =", a % b); // 2 (the remainder)
console.log("a ** 2 =", a ** 2); // 289 (a squared)
console.log("whole part of a / b:", Math.floor(a / b)); // 3

// Order of operations works like in math. Parentheses make it explicit.
console.log(2 + 3 * 4); // 14
console.log((2 + 3) * 4); // 20

// + also joins strings
console.log("Type" + "Script"); // TypeScript
console.log("Lesson " + 5); // the number turns into text: "Lesson 5"
