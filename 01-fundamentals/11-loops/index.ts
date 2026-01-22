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
