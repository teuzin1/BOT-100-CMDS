const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "serverinfo",
description: "Veja infos sobre o server",
type: "CHAT_INPUT",
run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    let server = interaction.guild;


let embed = new Discord.MessageEmbed()
.setTitle("Informações sobre o server")

.addField('Nome:' , `\`\`\`${server.name}\`\`\``,true)
.addField('Id:' , `\`\`\`${server.id}\`\`\``,true)
.addField('Quantidade de membros:' , `\`\`\`${server.memberCount}\`\`\``,true)
.addField('Criado em:' , `\`\`\`${server.createdAt}\`\`\``,true)
.addField('Entrei em:' , `\`\`\`${server.joinedAt}\`\`\``,true)
.addField('Owner:' , `<@${server.ownerId}>`,true)
.addField('Cargo mais alto:' , `${server.roles.highest}`,true)
.setImage(server.iconURL())

.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")

    await interaction.followUp({embeds: [embed]})
}
}