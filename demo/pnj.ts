import { generateImportantNpc } from "../dist/generators/pnj/generate-important.js";

const npc = generateImportantNpc();

console.dir(npc, { depth: null });