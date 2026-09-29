import type { TableResult } from "../tables/types.js";

export interface PnjMineur {
  type: "mineur";
  attitude: TableResult;
  objective: TableResult;
}

export interface PnjImportant extends Omit<PnjMineur, "type"> {
  type: "important";
  method: TableResult;
  secret: TableResult;
  breakingPoint: TableResult;
}

export type Pnj = PnjMineur | PnjImportant;