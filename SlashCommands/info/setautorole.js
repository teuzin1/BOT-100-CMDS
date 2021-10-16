const Discord = require("discord.js")
const db = require("quick.db")
module.exports =  {
name: "setrole",
description: "Seta o cargo do autorole",
type: "CHAT_INPUT",
options: [
    {
        name: "cargo-autorole",
        type: "ROLE",
        description: "Qual cargo deseja setar o autorole?",
        required: true
        
        },
       

],


run: async (client, interaction, args) => {
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
    if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
    let cargo =  interaction.options.getRole('cargo-autorole');
    let setei = new Discord.MessageEmbed()
    .setTitle("Setei")
    .setDescription(`${cargo} foi setado como cargo de autorole`)
    .setColor("RANDOM");

db.set(`autorole_${interaction.guild.id}`, cargo.id )
interaction.followUp({embeds: [setei]})

}
}
