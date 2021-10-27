const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "setsaida",
description: "Seta logs",
type: "CHAT_INPUT",
options: [
    {
        name: "canal",
        type: "CHANNEL",
        description: "Qual canal deseja setar as entrada?",
        required: true
        
        },
       

],


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
    let channel =  interaction.options.getChannel('canal');
    let setei = new Discord.MessageEmbed()
    .setTitle("Setei")
    .setDescription(`${channel} foi setado como canal de saida`)
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")

db.set(`saida_${interaction.guild.id}`, channel.id)
interaction.followUp({embeds: [setei]})

}
}
