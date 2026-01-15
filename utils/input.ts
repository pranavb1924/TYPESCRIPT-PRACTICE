// A tiny helper for reading what someone types in the terminal.
//
// Node has no built-in "wait for the user to type a line" function that fits
// the simple top-to-bottom programs we're writing in January. (The usual
// tools need callbacks or async code, which come later in the course.)
// So this reads the input one byte at a time until Enter is pressed.
//
// No need to understand how it works yet. Import it and call it:
//   import { ask } from "../../utils/input.ts";
//   const name = ask("What's your name? ");

import { closeSync, openSync, readSync } from "node:fs";
import { isatty } from "node:tty";

export function ask(question: string): string {
  process.stdout.write(question);

  // Read from the terminal when someone is typing, or from stdin when the
  // input is piped in (for example: echo "42" | npx tsx some/lesson.ts).
  const typing = isatty(0) && process.platform !== "win32";
  const fd = typing ? openSync("/dev/tty", "r") : 0;
  const buffer = Buffer.alloc(1);
  const bytes: number[] = [];
  let pressedEnter = false;

  while (readSync(fd, buffer, 0, 1, null) === 1) {
    if (buffer[0] === 10) {
      // 10 is the newline character: Enter was pressed
      pressedEnter = true;
      break;
    }
    if (buffer[0] !== 13) {
      // skip 13 (carriage return) from Windows-style line endings
      bytes.push(buffer[0]);
    }
  }
  if (typing) {
    closeSync(fd);
  }

  // The input ended with nothing typed (Ctrl+D, or piped input ran out):
  // there's nothing more to read, so end the program.
  if (!pressedEnter && bytes.length === 0) {
    process.stdout.write("\n");
    process.exit(0);
  }
  return Buffer.from(bytes).toString("utf8");
}
