// Build: tip calculator
// Asks for the bill and the tip percentage, then works out the total.
// Run it: npx tsx 01-fundamentals/08-tip-calculator/index.ts

import { ask } from "../../utils/input.ts";

console.log("=== Tip Calculator ===");

const bill = Number(ask("Bill amount ($): "));
const tipPercent = Number(ask("Tip percentage (e.g. 18): "));
const people = Number(ask("Number of people: "));

const tip = bill * (tipPercent / 100);
const total = bill + tip;
const perPerson = total / people;
// Round each share up to the next cent so the bill is always covered.
const perPersonRounded = Math.ceil(perPerson * 100) / 100;

console.log("");
console.log(`Bill:       $${bill.toFixed(2)}`);
console.log(`Tip:        $${tip.toFixed(2)} (${tipPercent}%)`);
console.log(`Total:      $${total.toFixed(2)}`);
console.log(`Per person: $${perPersonRounded.toFixed(2)} (${people} people)`);
