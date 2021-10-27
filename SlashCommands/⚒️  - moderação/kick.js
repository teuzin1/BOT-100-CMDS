const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "kick",
description: "Expulse um membro",
type: "CHAT_INPUT",
options: [
    {
        name: "user",
        type: "USER",
        description: "Qual user deseja kickar?",
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
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    let user = interaction.options.getUser("user");
    const memberTarget = interaction.guild.members.cache.get(user.id);
    let rr = interaction.options.getString("motivo");
    let rra = interaction.options.getString("motivo");
    if(rra == null) rra = `Sem motivo`;
    if(rr == null) rr = `Kickado pelo dono do server!`;
    if(user.id == interaction.user.id) return interaction.followUp({content: `Você não pode se kickar!`});
if(user.id == interaction.guild.me.id) return interaction.followUp({content: `Você não pode me kickar!`});
if(user.id == interaction.guild.ownerId) return  interaction.followUp({content: `Você não pode kickar o dono do server!`});

if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("KICK_MEMBERS")) return interaction.followUp({content: `Eu não tenho perm para isso!`});

if(interaction.guild.ownerId) {

    memberTarget.kick();
    return  interaction.followUp({content: `${user} foi KICKADO! Motivo: ` +  rr });
    

   
};
interaction.followUp({content: `${user} foi KICKADO! Motivo: ` +  rra })

memberTarget.kick()




}
}
