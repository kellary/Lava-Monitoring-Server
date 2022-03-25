'use strict'
const {MessageEmbed} = require('discord.js');
const {prefix} = require('./config.json');
const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
module.exports = {
    name: 'server',
    description: 'serverinfo',
    execute(message, args, Discord){
        const Embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(`940fd0`)
        .setDescription(`**Владелец сервера:** ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
        .addField('Количество участников:', `${message.guild.memberCount}`)
        .addField('АФК время каналов:', `${message.guild.afkTimeout / 60} минут`, true)
        .addField('АФК канал:', `${message.guild.afkChannelID === null ? `Нету АФК каналов` : client.channels.get(message.guild.afkChannelID).name} ${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID}`, true)
        .addField('Регион:', message.guild.region, true)
        .addField('Был создан:', message.guild.createdAt.toLocaleString(), true)
        .addField(`Запрос сделал:`, `${message.author} \nLavaCraft.ru`)
        .setTimestamp()
        message.channel.send(Embed);
        console.log(this.name)
    }
};