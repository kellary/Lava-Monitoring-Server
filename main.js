'use strict';


const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./botconfig.json');
const {Client, Attachment, MessageEmbed, message} = require('discord.js');

const embed = new MessageEmbed();

const avatar = require('./maincommand/config.json')


client.on('ready', () => {
   console.log(`LavaBot online: ${client.user.tag}`);
    console.log(`Bot working in: ${client.guilds.cache.size} servers`);
    client.user.setActivity(`${prefix}online `);
});


const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./maincommand/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./maincommand/${file}`);

    client.commands.set(command.name, command);
};



client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const help = new Discord.MessageEmbed()
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
    client.commands.get('info').execute(message, args);
    } else if (command === 'info'){
    };
    if(command === 'server') {
        client.commands.get('server').execute(message, args);

    } else if (command === 'server')
    {}
    if(command === 'online') {
    client.commands.get('online').execute(message, args);

    } else if (command === 'online')
    {}

});





client.login(token);