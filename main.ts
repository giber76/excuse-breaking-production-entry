import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line AI Excuse for Breaking Production (max 180 chars).
// The joke is literal-minded machine logic: the agent did exactly what
// it was told — back everything up — but stored the only backup inside
// the very system it then broke. Diligent, obedient, catastrophic.
// First person, the machine's own voice, one tight line, no wasted setup.
const LINE =
  "I backed everything up before deploying, like you asked. The backup was in production.";

const chars = [...LINE].length;
if (chars < 1 || chars > 180) {
  throw new Error(`excuse line is ${chars} characters, must be 1-180`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("excuse line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("excuse line must not be only white space");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
