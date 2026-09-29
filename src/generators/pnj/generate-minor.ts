import { rollDie } from "../dice/roll.js";
import { loadTable } from "../tables/table-loader.js";
import { resolveTableResult } from "../tables/table-random.js";
import type { PnjMineur } from "./types.js";

const attitudeTable = loadTable("attitude");
const objectiveTable = loadTable("objectif");

export function generateMinorNpc(): PnjMineur {
  return {
    type: "mineur",
    attitude: resolveTableResult(attitudeTable, rollDie(attitudeTable.dice.faces)),
    objective: resolveTableResult(objectiveTable, rollDie(objectiveTable.dice.faces)),
  };
}