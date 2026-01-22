// Lesson 11: Loops
// for, while and do...while, plus break and continue.
// Run it: npx tsx 01-fundamentals/11-loops/index.ts

// for loop: for (start; keep going while this is true; after each round)
for (let lap = 1; lap <= 5; lap++) {
  console.log(`Lap ${lap}`);
}

// Counting down
for (let i = 3; i > 0; i--) {
  console.log(`${i}...`);
}
console.log("Liftoff!");

// Adding up 1 + 2 + ... + 100
let sum = 0;
for (let n = 1; n <= 100; n++) {
  sum += n;
}
console.log(`1 + 2 + ... + 100 = ${sum}`);
