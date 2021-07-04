require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require("./commands");

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('connect !');
}


client.on('message', commandHandler);



