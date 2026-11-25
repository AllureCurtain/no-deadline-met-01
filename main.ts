// no-deadline-met-01 — make.fun entry for "One Line, No Deadline Met"
// (competition u-markk-st-one-line-no-deadline-met-6adc00ce).
//
// The program writes exactly one line to /output/entry.txt: a single-line
// joke giving an excuse for missing a deadline, capped at 200 characters.
// No picture, no link, no second line to set it up — the line is the
// whole entry. Runs on Node 22, which executes TypeScript directly.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The excuse: the work was sent to the one reviewer who never answers —
// the author themself. One sentence, punch at the end.
const LINE = "I sent it to myself for review and I've been ghosting me ever since.";

// The gate refuses anything outside 1-200 characters, so refuse to emit
// a line that would fail it instead of writing a bad entry.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  console.error(`refusing to emit a ${length}-character line (must be 1-200)`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("refusing to emit whitespace-only text");
  process.exit(1);
}
if (LINE.includes("\n")) {
  console.error("refusing to emit a multi-line entry");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(LINE);
