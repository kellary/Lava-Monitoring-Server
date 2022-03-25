const {MessageEmbed} = require('discord.js');
const {prefix} = require('./config.json');
const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
module.exports = {
    name: 'online',
    description: "monitorng",
    execute(message, args, Discord){
        var https = require('https');

        var options = {
            host: 'monitor.lavacraft.org',
            path: '/json/monitor.json',
            headers: {'User-Agent': 'request'}
        };
        
        https.get(options, function (res) {
            var json = '';
            res.on('data', function (chunk) {
                json += chunk;
            });
            
            res.on('end', function () {
                if (res.statusCode === 200) {
                    try {
                      //  var data = JSON.parse(json); ßßßßßßßs
                        // data is available here:
                        json = json.substring(5)
                        json = json.substring(0,json.length-2)
                        var data = JSON.parse(json);
                        const Embed = new MessageEmbed()
                        .setColor('69b00b')
                        .setTitle(`Сервера LavaCraft:`)
                        .setURL(`https://lavacraft.ru/launcher/LavaCraft.exe`)
                        for (var i=0; i<data.length; i++){
                            if(data[i].online == 1) {
                            Embed.addField(`==================================================`, "```"+data[i].name +"``` Онлайн: " +data[i].numpl +`/`+data[i].slots)
                            console.log(data[i].name, +data[i].numpl, +data[i].on);
                        }}
                        Embed.addField(`Запрос сделал:`, `${message.author}`)
                        .setTimestamp()
                        message.channel.send(Embed);
                        console.log(this.name)
                        
                        // console.log(data);
                    } catch (e) {
                        console.log('Error parsing JSON!', e);
                        
                    }
                } else {
                    console.log('Status:', res.statusCode);
                }
            });
        }).on('error', function (err) {
              console.log('Error:', err);
        });

    }

};