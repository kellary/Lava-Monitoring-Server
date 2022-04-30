'use strict'
const {MessageEmbed} = require('discord.js');
const {prefix} = require('./config.json');
const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
module.exports = {
    name: 'media',
    description: 'media',
    execute(message, args, Discord){
        const Embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(`940fd0`)
        .setDescription(`**LavaCraft Media**`)
        .addField('VK группа: https://vk.com/lavacraft', `15.000 участников.`)
        .addField('Discord сервер https://discord.gg/YTGgfuv:', `4.000 тысячи участников.`)
        .addField('LavaCraft сайт:', `https://lavacraft.org`)
        .addField(`LavaCraft Википедия:`, `http://wiki.lavacraft.ru/index.php/Заглавная_страница`)
        .setTimestamp()
        message.channel.send(Embed);
        console.log(this.name)
    }
};
