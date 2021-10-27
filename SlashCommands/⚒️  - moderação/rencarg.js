const Discord = require('discord.js');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "rencarg",
    description: "Retira o cargo de um mebro",
    type: "CHAT_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "Qual user deseja remover?",
            required: true
            
            },
        {
            name: "cargo",
            type: "ROLE",
            description: "Qual cargo deseja remover?",
            required: true
            
            },
           
    
    ],
run:  async(client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })


    let nãotenho = new Discord.MessageEmbed()
    .setTitle(`Não posso remover dar o cargo!`)
    .setDescription(`Não tenho permissão de \`Gerenciar Cargos!\` `)
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")


    if (!interaction.guild.me.permissions.has('ADMINISTRADOR')) return interaction.followUp({embeds: [nãotenho]})

    if (!interaction.member.permissions.has('MANAGE_ROLES')) return  interaction.followUp({content: "Ixi, cade sua perm?"})
  

    let membro = interaction.options.getUser("user");


    let role1 = interaction.options.getRole("cargo");

     




    const embed1 = new Discord.MessageEmbed()
        .setTitle("Eu removi o cargo!")
        .setDescription(`Foi removido de ${membro} o cargo: <@&${role1.id}> `)
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ")
     
        

       await interaction.guild.members.cache.get(membro.id).roles.remove(role1);
   
     interaction.followUp({embeds: [embed1]});
}
}