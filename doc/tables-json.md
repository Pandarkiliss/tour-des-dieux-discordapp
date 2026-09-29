# Tables JSON

Chaque table est un fichier indépendant dans `src/data/pnj/`. Son identifiant, son nom, le nombre de faces et les résultats sont déclarés dans le JSON :

```json
{
  "id": "attitude",
  "name": "Attitude",
  "dice": { "faces": 12 },
  "entries": {
    "12": {
      "name": "Trop amical",
      "descriptions": [{ "text": "Le PNJ semble heureux de voir les PJ.", "weight": 1 }],
      "behaviors": [{ "text": "Il propose spontanément son aide.", "weight": 1 }]
    }
  }
}
```

Les clés de `entries` sont les résultats exacts du dé, de `1` à `dice.faces`. Chaque entrée doit avoir au moins une description et un comportement ; chaque variante a un texte et un poids strictement positif.

Pour ajouter une variante, ajoutez un objet à `descriptions` ou `behaviors`. Pour ajouter une table, créez un JSON du même format et chargez-le avec `loadTable`. La table `reaction-pression.json` est disponible, mais la génération initiale ne l'utilise pas.