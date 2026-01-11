// Build: player profile card
// Uses typed variables and console.log to print a profile card for a game.
// Run it: npx tsx 01-fundamentals/04-profile-card/index.ts

const playerName: string = "NovaByte";
const level: number = 7;
const health: number = 82.5;
const guild: string = "Night Owls";
const isOnline: boolean = true;
let wins: number = 41;
wins = 42; // just won a match!

console.log("+-----------------------------+");
console.log("|       PLAYER PROFILE        |");
console.log("+-----------------------------+");
console.log("  Player:", playerName);
console.log("  Level: ", level);
console.log("  Health:", health);
console.log("  Guild: ", guild);
console.log("  Online:", isOnline);
console.log("  Wins:  ", wins);
console.log("+-----------------------------+");
