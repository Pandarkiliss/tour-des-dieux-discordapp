import type { ChatInputCommandInteraction } from "discord.js";
import { createPnjEmbed } from "../../embeds/pnj.js";
import { generateImportantNpc } from "../../generators/pnj/generate-important.js";

export async function executeImportantNpcCommand(
	interaction: ChatInputCommandInteraction,
): Promise<void> {
	await interaction.reply({ embeds: [createPnjEmbed(generateImportantNpc())] });
}
