const Discord = require("discord.js")

const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
const db = require("quick.db")
module.exports =  {
name: "setsegestão",
description: "Cria o setup de sugestões!",
type: "CHAT_INPUT",


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});






        let embed = new Discord.MessageEmbed()
        .setTitle("Ativo!")
        .setDescription(`Sugestões foram ativas no ${interaction.channel}`)
        .setColor(config.embed)
     .setFooter("By: Pani Kaz#8893 ")
interaction.followUp({embeds: [embed]});
 

db.set(`sugestao_${interaction.guild.id}_${interaction.channel.id}`, interaction.channel.id)
}
}
