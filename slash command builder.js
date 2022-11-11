const { SlashCommandBuilder } = require('discord.js');

console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express();
require('dotenv').config()

const { Client, Intents, MessageAttachment, GatewayIntentBits, } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    new SlashCommandBuilder()
    .setName('Images')
    .setDescription('Sends a random image of DaBaby')
});
client.login(process.env.TOKEN)