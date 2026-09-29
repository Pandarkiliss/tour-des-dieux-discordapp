export function rollDie(faces: number): number {
  if (!Number.isInteger(faces) || faces < 1) {
    throw new RangeError("Le nombre de faces doit être un entier positif.");
  }

  return Math.floor(Math.random() * faces) + 1;
}