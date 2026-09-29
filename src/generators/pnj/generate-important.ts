import { rollDie } from "../dice/roll.js";
import { loadTable } from "../tables/table-loader.js";
import { resolveTableResult } from "../tables/table-random.js";
import { generateMinorNpc } from "./generate-minor.js";
import type { PnjImportant } from "./types.js";

const methodTable = loadTable("methode");
const secretTable = loadTable("secret");
const breakingPointTable = loadTable("point-rupture");

export function generateImportantNpc(): PnjImportant {
  const minorNpc = generateMinorNpc();

  return {
    ...minorNpc,
    type: "important",
    method: resolveTableResult(methodTable, rollDie(methodTable.dice.faces)),
    secret: resolveTableResult(secretTable, rollDie(secretTable.dice.faces)),
    breakingPoint: resolveTableResult(breakingPointTable, rollDie(breakingPointTable.dice.faces)),
  };
}