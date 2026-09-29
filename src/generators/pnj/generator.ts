import { generateImportantNpc } from "./generate-important.js";
import { generateMinorNpc } from "./generate-minor.js";
import type { Pnj } from "./types.js";

export { generateImportantNpc } from "./generate-important.js";
export { generateMinorNpc } from "./generate-minor.js";

export const generatePnjMineur = generateMinorNpc;
export const generatePnjImportant = generateImportantNpc;

export function generatePnj(type: Pnj["type"]): Pnj {
  return type === "mineur" ? generateMinorNpc() : generateImportantNpc();
}