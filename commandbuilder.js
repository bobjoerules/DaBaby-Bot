
console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express();
require('dotenv').config()

const { Client, Intents, MessageAttachment, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,] });

const { MessageEmbed } = require('discord.js');

client.once('ready', async () => {
    const data = {
        name: 'game',
        description: 'Information about the DaBaby game',
    };
    const command = await client.application?.commands.create(data);
   
});
client.login(process.env.TOKEN)