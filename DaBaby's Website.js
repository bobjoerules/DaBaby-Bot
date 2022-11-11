
console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express();


const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { MessageEmbed } = require('discord.js');
client.once('ready', () => {
    client.api.applications(client.user.id).guilds('933723920647991296').commands.post({data: {
        name: "website",
        description: "Websites including DaBaby's website and bot's website",
        option: [
            {
            type: 3,
            name: "for",
            description: "Choose which website you want to go too",
            choices: [
                {
                name: "dababy",
                value: 1
                },
                {
                name: "bot",
                value: 2
                },
                {
                name: "developer",
                value: 3
                }
            ],
            required: true
            }
        ]
      }
    })
});
client.login(process.env.TOKEN)