const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports =  {
name: "invite",
description: "Me convide",
type: "CHAT_INPUT",
run: async (client, interaction, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription(`Convite: \n[clique aqui](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)
    .setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")


    await interaction.followUp({embeds: [embed]})
}
}