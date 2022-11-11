
console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express();


const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { MessageEmbed } = require('discord.js');
client.once('ready', () => {
    client.api.applications(client.user.id).commands.post({data: {
        name: 'game',
        description: 'Link to DaBaby game by Markus Kramer on app store'
    }})
   
});
client.login(process.env.TOKEN)