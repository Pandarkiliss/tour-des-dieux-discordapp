import "dotenv/config";
import { REST, Routes } from "discord.js";
import { pnjCommand } from "./commands/pnj.js";

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
	throw new Error("DISCORD_TOKEN, CLIENT_ID et GUILD_ID sont requis.");
}

const rest = new REST({ version: "10" }).setToken(token);
await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
	body: [pnjCommand.toJSON()],
});

console.log("Commandes slash déployées sur le serveur.");
