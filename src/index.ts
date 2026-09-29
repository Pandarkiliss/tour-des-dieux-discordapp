import "dotenv/config";
import { startBot } from "./bot.js";

const token = process.env.DISCORD_TOKEN;
if (!token) throw new Error("La variable DISCORD_TOKEN est requise.");

await startBot(token);
