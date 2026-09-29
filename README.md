# tour-des-dieux-discordapp

Bot Discord pour le jeu de rôle *Tour des Dieux*.

## Configuration

Renseigner `DISCORD_TOKEN`, `CLIENT_ID` et `GUILD_ID` dans un fichier `.env` à partir de `.env.example`.

## Démarrage

```sh
npm run deploy:commands
npm run dev
```

`/pnj mineur` génère un PNJ mineur et `/pnj important` un PNJ important. Pour exécuter la version compilée : `npm run build`, puis `npm start`.

## Tables

Les tables éditables sont dans `src/data/pnj/`, avec un fichier JSON par table. Les poids ne servent qu'au choix des descriptions et comportements ; la clé numérique de l'entrée reste le résultat exact du dé. La réaction à la pression est disponible, mais n'est pas tirée pendant la génération initiale.

## Documentation

Voir [doc/README.md](doc/README.md) pour la documentation par concepts.