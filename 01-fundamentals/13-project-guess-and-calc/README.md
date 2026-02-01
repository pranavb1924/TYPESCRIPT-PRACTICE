# Guess & Calc

My January project: a terminal app with a number guessing game and a calculator, built using only what I learned this month (no functions yet!).

## Features

- **Number guesser:** a random number from 1 to 100 and 7 tries, with hints that tell you when you're close
- Only whole numbers in range count as guesses
- **Calculator:** `+ - * / %` and `**`, with checks for bad numbers and dividing by zero
- **Stats:** games played and won, best score, number of calculations

## Run it

```bash
npx tsx 01-fundamentals/13-project-guess-and-calc/index.ts
```

## What I'd improve next

- Split the game and the calculator into functions (that's February's topic)
- Let the player pick the range and the number of tries
