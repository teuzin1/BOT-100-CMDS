const Discord = require('discord.js');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
name: "desligar",
description: "Somente para o dono!",
type: "CHAT_INPUT",
ownerOnly: true,




    run: async(client, interaction, args) => {
        let a = config.Logs_ini
        let b = client.channels.cache.get(a)
        client.user.setActivity("DESLIGANDO")
        b.send({content: `<:719816652572852225:897525071323734016> <@${config.owners}>\n\n <:751830147996581960:897525071034347541> Desligando... `});
        let channel3 = client.channels.cache.get(config.logs_stats)
        channel3.edit({name: `💹・sᴛᴀᴛᴜs : OFF`})
       
      let embed = new Discord.MessageEmbed()
        .setDescription(`Serei desligado em 10 sgs!`)
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ")
        interaction.followUp({embeds: [embed]}).then(m => {
            setTimeout(() => {
    
           client.destroy()

            }, 10000) 
        })

    }
};