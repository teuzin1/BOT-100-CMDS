const Discord = require("discord.js")
const db = require("quick.db")
module.exports =  {
name: "setlogs",
description: "Seta logs",
type: "CHAT_INPUT",
options: [
    {
        name: "canal",
        type: "CHANNEL",
        description: "Qual canal deseja setar as logs?",
        required: true
        
        },
       

],


run: async (client, interaction, args) => {
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
    let channel =  interaction.options.getChannel('canal');
    let setei = new Discord.MessageEmbed()
    .setTitle("Setei")
    .setDescription(`${channel} foi setado como canal de logs`)
    .setColor("RANDOM");

db.set(`logs_${interaction.guild.id}`, channel.id)
interaction.followUp({embeds: [setei]})

}
}
