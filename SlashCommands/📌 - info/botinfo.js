const { Message , MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "botinfo",
description: "Ifos sobre mim ",
type: "CHAT_INPUT",


    run: async (client, interaction, args) => {

        let dias = Math.floor(client.uptime / 86400000 );
        let horas = Math.floor(client.uptime / 3600000 ) % 24;
        let minutos = Math.floor(client.uptime / 60000) % 60;
        let segs = Math.floor(client.uptime / 1000) % 60;
        const embed = new MessageEmbed()
        .setTitle('Olá!')

        .addField('Ping',`\`\`\`${client.ws.ping}ms\`\`\``,true)
        .addField('Uptime',`\`\`\`Acordei em: ${dias}d ${horas}h ${minutos}m ${segs}s\`\`\``,true)
        .addField('\u200b', `\u200b`)
        .addField('Servers',  `\`\`\`${client.guilds.cache.size} servers!\`\`\``,true)
        .addField('Canais',  `\`\`\`${client.channels.cache.size} canais!\`\`\``,true)
        .addField('Users',   `\`\`\`${client.users.cache.size} users!\`\`\``,true)
     
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ");
       interaction.followUp({ embeds: [embed]});
    },
};