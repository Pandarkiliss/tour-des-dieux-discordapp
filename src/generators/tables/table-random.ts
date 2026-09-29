import type { TableDefinition, TableEntry, TableResult, WeightedText } from "./types.js";

export function weightedRandom<T extends { weight: number }>(items: readonly T[]): T {
  if (items.length === 0 || items.some(({ weight }) => !Number.isFinite(weight) || weight <= 0)) {
    throw new RangeError("La sélection pondérée nécessite des poids positifs.");
  }

  const totalWeight = items.reduce((total, item) => total + item.weight, 0);
  let threshold = Math.random() * totalWeight;

  for (const item of items) {
    threshold -= item.weight;
    if (threshold < 0) return item;
  }

  return items[items.length - 1]!;
}

export function getTableEntry(table: TableDefinition, roll: number): TableEntry {
  if (!Number.isInteger(roll) || roll < 1 || roll > table.dice.faces) {
    throw new RangeError(`Le résultat doit être compris entre 1 et ${table.dice.faces}.`);
  }

  const entry = table.entries[String(roll)];
  if (!entry) throw new Error(`Entrée ${roll} absente de la table « ${table.name} ».`);
  return entry;
}

export function resolveTableResult(table: TableDefinition, roll: number): TableResult {
  const entry = getTableEntry(table, roll);
  const description: WeightedText = weightedRandom(entry.descriptions);
  const behavior: WeightedText = weightedRandom(entry.behaviors);

  return {
    roll,
    dice: table.dice.faces,
    name: entry.name,
    description: description.text,
    behavior: behavior.text,
  };
}