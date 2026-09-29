import { SlashCommandBuilder, type ChatInputCommandInteraction } from "discord.js";
import { executeImportantNpcCommand } from "./pnj/important.js";
import { executeMinorNpcCommand } from "./pnj/mineur.js";

export const pnjCommand = new SlashCommandBuilder()
  .setName("pnj")
  .setDescription("Générer un PNJ pour la partie")
  .addSubcommand((subcommand) =>
    subcommand.setName("mineur").setDescription("Générer un PNJ mineur"),
  )
  .addSubcommand((subcommand) =>
    subcommand.setName("important").setDescription("Générer un PNJ important"),
  );

export async function executePnjCommand(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  if (interaction.options.getSubcommand() === "mineur") {
    await executeMinorNpcCommand(interaction);
    return;
  }

  await executeImportantNpcCommand(interaction);
}