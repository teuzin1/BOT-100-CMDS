const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "setping",
description: "Seta ping da botlist",
type: "CHAT_INPUT",
options: [
    {
        name: "cargo",
        type: "ROLE",
        description: "Qual cargo deseja setar o ping?",
        required: true
        
        },
       

],


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
   
let cargo =  interaction.options.getRole('cargo');
    let setei = new Discord.MessageEmbed()
    .setTitle("Setei")
    .setDescription(`${cargo} foi setado como cargo de ping`)
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")

db.set(`ping_bot_list${interaction.guild.id}`, cargo.id)
interaction.followUp({embeds: [setei]})

}
}
