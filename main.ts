import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Charm the Commuter: Forecast a City That Isn't
// One line of weather, 136 characters, for Drizzlewick — a city that
// does not exist. Broadcast-forecast rhythm throughout (place, rain,
// temperature, percentages), the commuter joke is the missed buses,
// and the smile lands on the bakery smelling like warm bread.
// The program below only copies that one line to the output file.
// The guard above keeps the line inside the one-to-140 gate.
const ENTRY = "In Drizzlewick, light rain and 11°C this morning, with a 90% chance of missed buses and a 100% chance the bakery smells like warm bread.";

if (!ENTRY.trim() || ENTRY.length < 1 || ENTRY.length > 140) throw new Error("entry must be 1-140 characters");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
