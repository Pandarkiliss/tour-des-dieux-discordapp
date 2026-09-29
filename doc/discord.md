# Intégration Discord

La commande `/pnj` possède deux sous-commandes : `mineur` et `important`. Les commandes transmettent les résultats du générateur à `createPnjEmbed`; elles ne contiennent pas de logique de tirage ni de texte narratif.

Configurez `DISCORD_TOKEN`, `CLIENT_ID` et `GUILD_ID` dans `.env` à partir de `.env.example`. Déployez les commandes du serveur avec `npm run deploy:commands`, puis lancez le bot avec `npm run dev`. Pour la version compilée, utilisez `npm run build` puis `npm start`.