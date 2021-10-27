const Discord = require('discord.js');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "embed",
    description: "Envia uma embed customizável ",
    type: "CHAT_INPUT",
    options: [
        {
            name: "titulo",
            type: "STRING",
            description: "Titulo da embed",
            required: true
            
            },
        {
            name: "desc",
            type: "STRING",
            description: "Descrição da embed",
            required: true
            
            },
           
    
    ],
run:  async(client, interaction, args) => {

    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })


    if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return  interaction.followUp({content: "Ixi, cade sua perm?"})
  

    let t = interaction.options.getString("titulo");
    let d = interaction.options.getString("desc");







    const embed1 = new Discord.MessageEmbed()
        .setTitle(t)
        .setDescription(d)
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ")
     
        


   
        interaction.followUp({content: "Embed criada"})
        interaction.channel.send({embeds: [embed1]});
}
}