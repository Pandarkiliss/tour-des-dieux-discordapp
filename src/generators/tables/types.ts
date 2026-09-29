export interface WeightedText {
  text: string;
  weight: number;
}

export interface TableEntry {
  name: string;
  descriptions: WeightedText[];
  behaviors: WeightedText[];
}

export interface TableDefinition {
  id: string;
  name: string;
  dice: {
    faces: number;
  };
  entries: Record<string, TableEntry>;
}

export interface TableResult {
  roll: number;
  dice: number;
  name: string;
  description: string;
  behavior: string;
}