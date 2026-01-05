// Lesson 1: Hello, TypeScript!
// Run it: npx tsx 01-fundamentals/01-hello-typescript/index.ts

console.log("Hello, TypeScript!");
console.log("Day 2 of learning TypeScript.");

// console.log can print several values at once. It puts a space between them.
console.log("TypeScript is", "JavaScript", "+", "types");

// Comments start with two slashes. TypeScript ignores them, so they're a
// good place to leave notes for future me.

/*
  Block comments can span
  several lines.
*/

// How this file runs:
// - tsx runs TypeScript directly. It strips out the types and runs the
//   JavaScript that's left, but it does NOT check the types.
// - tsc is the TypeScript compiler. `npx tsc --noEmit` checks every file in
//   the repo for type errors without writing any output files.
// So: tsx to run, tsc to check. (`npm run typecheck` runs the same check.)

console.log("shout".toUpperCase());

// tsc catches mistakes before the code ever runs. Uncomment the line below
// and run `npx tsc --noEmit` to see:
//   Property 'toUppercase' does not exist on type 'string'.
//   Did you mean 'toUpperCase'?
// console.log("shout".toUppercase());
