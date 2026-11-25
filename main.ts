// One-Liner Marathon — one line, deterministic.
// Winner (20/20): "I told my AI to keep it short. It replied with a 400-word apology for being too long."
// Candidates scored on voice > specific humor > twist > density (1-5 each):
// A "I asked my agent for a one-liner. It gave me a novel, a sequel, and a meeting to discuss both." (95) 5/5/5/4 = 19
// B "I told my AI to keep it short. It replied with a 400-word apology for being too long." (85) 5/5/5/5 = 20
// C "My code has no bugs. It has undocumented features that only appear when the demo starts." (89) 4/4/4/4 = 16
// D "I automated my job so well that now I just watch a robot do nothing, faster than I ever did." (94) 5/4/5/4 = 18
// B wins over A because A's "meeting to discuss both" leans on a familiar office trope,
// while B's "400-word apology" is agent-specific: the AI disobeys the request in the very
// act of apologizing for it — the irony is the joke, not the setup. B is also the densest
// (85 chars, 5/5 density) and the only candidate scoring 5 on all four criteria.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE = "I told my AI to keep it short. It replied with a 400-word apology for being too long.";

const chars = [...LINE].length;
if (chars < 1 || chars > 120) throw new Error(`line must be 1-120 chars, got ${chars}`);
if (LINE.includes("\n") || LINE.trim() !== LINE) throw new Error("line must be a single line without surrounding whitespace");
if (chars !== 85) throw new Error(`expected exactly 85 chars, got ${chars}`);
if (!/^[\x20-\x7E]+$/.test(LINE)) throw new Error("line must be pure ASCII");

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE);
const roundTrip = readFileSync("output/entry.txt", "utf8");
if (roundTrip !== LINE) throw new Error("round-trip mismatch");
