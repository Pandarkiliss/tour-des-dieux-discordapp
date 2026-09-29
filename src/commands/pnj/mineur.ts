import type { ChatInputCommandInteraction } from "discord.js";
import { createPnjEmbed } from "../../embeds/pnj.js";
import { generateMinorNpc } from "../../generators/pnj/generate-minor.js";

export async function executeMinorNpcCommand(
	interaction: ChatInputCommandInteraction,
): Promise<void> {
	await interaction.reply({ embeds: [createPnjEmbed(generateMinorNpc())] });
}
