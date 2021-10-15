const Discord = require("discord.js")
module.exports =  {
name: "ban",
description: "Banir um membro",
type: "CHAT_INPUT",
options: [
    {
        name: "user",
        type: "USER",
        description: "Qual user deseja banir?",
        required: true
        
        },
        {
            name: "motivo",
            type: "STRING",
            description: "Qual o motivo?",
            required: false
            
            },

],


run: async (client, interaction, args) => {

    let user = interaction.options.getUser("user");
    let rr = interaction.options.getString("motivo");
    let rra = interaction.options.getString("motivo");
    if(rra == null) rra = `Sem motivo`;
    if(rr == null) rr = `Banido pelo dono do server!`;
    if(user.id == interaction.user.id) return interaction.followUp({content: `Você não pode se banir!`});
if(user.id == interaction.guild.me.id) return interaction.followUp({content: `Você não pode me banir!`});
if(user.id == interaction.guild.ownerId) return  interaction.followUp({content: `Você não pode banir o dono do server!`});

if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.followUp({content: `Eu não tenho perm para isso!`});

if(interaction.guild.ownerId) {
    interaction.followUp({content: `${user} foi banido! Motivo: ` +  rr })
    
    user.ban({reason: rr || `Banido pelo dono do server!`})
   
};
interaction.followUp({content: `${user} foi banido! Motivo: ` +  rra })

user.ban({reason: rra})




}
}
