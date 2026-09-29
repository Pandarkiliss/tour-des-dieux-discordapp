# Dés et hasard

## Jet mécanique

`rollDie(faces)` renvoie un entier uniforme entre 1 et `faces`, bornes incluses. Le moteur ne dépend d'aucune bibliothèque de dés.

Le résultat du dé est toujours conservé dans `TableResult.roll`. Pour appliquer à la main le résultat d'un vrai dé, on peut résoudre directement l'entrée correspondante :

```ts
const table = loadTable("attitude");
const result = resolveTableResult(table, 12);
```

Le résultat mécanique reste donc 12, quelle que soit la variante narrative tirée ensuite.

## Variantes narratives

`weightedRandom` choisit uniquement une description et un comportement. Pour des poids 1 et 3, la deuxième variante a trois fois plus de chances d'être sélectionnée. Ces poids ne sont jamais appliqués au jet mécanique ni au choix de son entrée.