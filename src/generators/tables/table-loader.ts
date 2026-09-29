import { readFileSync } from "node:fs";
import type { TableDefinition, TableEntry, WeightedText } from "./types.js";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isWeightedTextList(value: unknown): value is WeightedText[] {
  return Array.isArray(value) && value.length > 0 && value.every((item) =>
    isRecord(item)
    && typeof item.text === "string"
    && typeof item.weight === "number"
    && Number.isFinite(item.weight)
    && item.weight > 0,
  );
}

function isTableEntry(value: unknown): value is TableEntry {
  return isRecord(value)
    && typeof value.name === "string"
    && isWeightedTextList(value.descriptions)
    && isWeightedTextList(value.behaviors);
}

export function loadTable(fileName: string): TableDefinition {
  if (!/^[a-z-]+$/.test(fileName)) throw new Error("Nom de table invalide.");

  const fileUrl = new URL(`../../data/pnj/${fileName}.json`, import.meta.url);
  const data: unknown = JSON.parse(readFileSync(fileUrl, "utf8"));

  if (
    !isRecord(data)
    || typeof data.id !== "string"
    || typeof data.name !== "string"
    || !isRecord(data.dice)
    || !Number.isInteger(data.dice.faces)
    || (data.dice.faces as number) < 1
    || !isRecord(data.entries)
  ) {
    throw new Error(`Structure invalide pour la table « ${fileName} ».`);
  }

  const faces = data.dice.faces as number;
  for (let roll = 1; roll <= faces; roll += 1) {
    if (!isTableEntry(data.entries[String(roll)])) {
      throw new Error(`Entrée ${roll} invalide ou absente dans « ${fileName} ».`);
    }
  }

  return data as unknown as TableDefinition;
}