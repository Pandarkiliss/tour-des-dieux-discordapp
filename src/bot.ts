import { Client, Events, GatewayIntentBits } from "discord.js";
import { executePnjCommand } from "./commands/pnj.js";

export async function startBot(token: string): Promise<void> {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });

	client.once(Events.ClientReady, (readyClient) => {
		console.log(`Connecté en tant que ${readyClient.user.tag}`);
	});

	client.on(Events.InteractionCreate, async (interaction) => {
		if (!interaction.isChatInputCommand() || interaction.commandName !== "pnj") return;

		try {
			await executePnjCommand(interaction);
		} catch (error) {
			console.error("Échec de la génération du PNJ :", error);
			const reply = { content: "La génération du PNJ a échoué.", ephemeral: true };
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp(reply);
			} else {
				await interaction.reply(reply);
			}
		}
	});

	await client.login(token);
}
