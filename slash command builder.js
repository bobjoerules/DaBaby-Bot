const { SlashCommandBuilder } = require('@discordjs/builders');

console.log("NodeJS Version: " + process.version)

require('dotenv').config()

const { Client, Intents, MessageAttachment, GatewayIntentBits, } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    var guildCommand = new SlashCommandBuilder();
    guildCommand.setName('changelog')
    guildCommand.setDescription('Sends the changelog of this bot')
    console.log("New slash command has been made")
});
client.login(process.env.TOKEN)