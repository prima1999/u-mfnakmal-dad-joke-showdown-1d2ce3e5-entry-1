import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path"; // path helper for the output file

// Dad Joke Showdown: one joke, built to be told out loud.
const SETUP_LINE = "My son asked why I hung a mirror above the dining table.";
const PUNCH_LINE = "I said, 'So we can reflect on our meals.'";
const JOKE = `${SETUP_LINE} ${PUNCH_LINE}`;

// The gate takes 1 to 200 characters, so check the length first.
if (JOKE.length === 0 || JOKE.length > 200) throw new Error(`Joke is ${JOKE.length} characters long, must be 1-200.`);

// Write where the grader points, or to /output when unset.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt"); // the judged file

mkdirSync(OUTPUT_DIR, { recursive: true }); // make the folder first
writeFileSync(OUTPUT_PATH, JOKE, { encoding: "utf8" });
