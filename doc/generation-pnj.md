# Génération des PNJ

Les générateurs sont dans `src/generators/pnj/` et ne dépendent pas de Discord.

- `generateMinorNpc()` tire attitude D12 et objectif D20.
- `generateImportantNpc()` produit ces deux mêmes résultats, puis tire méthode D12, secret D20 et point de rupture D10.
- La réaction à la pression n'est jamais tirée automatiquement.

Chaque champ contient `roll`, `dice`, `name`, `description` et `behavior`. Le nombre du dé peut être affiché ou rejoué indépendamment des variantes narratives.

La génération importante réutilise le résultat mineur déjà obtenu : elle ne relance ni l'attitude ni l'objectif. Les fonctions de génération assemblent les résultats des tables ; l'embed et les commandes Discord se trouvent dans des modules séparés.