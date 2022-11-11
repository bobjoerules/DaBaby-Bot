const { SlashCommandBuilder } = require('discord.js');

console.log("NodeJS Version: " + process.version)

require('dotenv').config()

const { Client, Intents, MessageAttachment, GatewayIntentBits, } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    new SlashCommandBuilder()
    .setName('images')
    .setDescription('Sends a random image of DaBaby')
    console.log("New slash command has been made")
});
client.login(process.env.TOKEN)