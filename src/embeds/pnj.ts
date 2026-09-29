import { EmbedBuilder } from "discord.js";
import type { Pnj } from "../generators/pnj/types.js";
import type { TableResult } from "../generators/tables/types.js";

function formatTableResult(result: TableResult): string {
	return [
		`🎲 D${result.dice} : ${result.roll}`,
		`**${result.name}**`,
		"",
		"**Description :**",
		result.description,
		"",
		"**Comportement :**",
		`• ${result.behavior}`,
	].join("\n");
}

export function createPnjEmbed(pnj: Pnj): EmbedBuilder {
	const fields = [
		{ name: "🎭 ATTITUDE", value: formatTableResult(pnj.attitude) },
		{ name: "🎯 OBJECTIF", value: formatTableResult(pnj.objective) },
	];

	if (pnj.type === "important") {
		fields.push(
			{ name: "🗣️ MANIÈRE D'AGIR", value: formatTableResult(pnj.method) },
			{ name: "🔒 SECRET", value: formatTableResult(pnj.secret) },
			{ name: "💥 POINT DE RUPTURE", value: formatTableResult(pnj.breakingPoint) },
		);
	}

	return new EmbedBuilder()
		.setColor(pnj.type === "important" ? 0xa34b38 : 0x267a69)
		.setTitle(pnj.type === "important" ? "👤 PNJ IMPORTANT" : "👤 PNJ MINEUR")
		.addFields(fields);
}
