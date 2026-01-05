// Lesson 2: Primitive types
// The basic kinds of values: string, number, boolean, null and undefined.
// Run it: npx tsx 01-fundamentals/02-primitive-types/index.ts

// A type annotation (the ": string" part) says what kind of value a variable
// holds. (const creates a variable; the next lesson covers it properly.)

// string: text, in double or single quotes
const firstName: string = "Maya";
const favoriteFood: string = "dumplings";
console.log(firstName, "loves", favoriteFood);

// number: whole numbers and decimals share one type
const age: number = 27;
const height: number = 1.68;
const temperature: number = -4;
console.log(age, height, temperature);

// boolean: true or false
const isLearning: boolean = true;
const isFinished: boolean = false;
console.log(isLearning, isFinished);

// typeof tells you a value's type while the program runs
console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isFinished); // boolean

// null means "deliberately empty". undefined means "no value yet".
const middleName: null = null;
const nickname: undefined = undefined;
console.log(middleName, nickname);
console.log(typeof nickname); // undefined
console.log(typeof middleName); // object (a famous old JavaScript quirk!)

// TypeScript won't let you mix types up. Each of these is a type error:
// const wrong: number = "27";
//   -> Type 'string' is not assignable to type 'number'.
// const alsoWrong: boolean = "true";
//   -> "true" in quotes is a string, not a boolean.
