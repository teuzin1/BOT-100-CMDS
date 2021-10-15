const Discord = require("discord.js")
module.exports =  {
name: "serverinfo",
description: "Veja infos sobre o server",
type: "CHAT_INPUT",
run: async (client, interaction, args) => {
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
.setThumbnail(bb)
.setColor("RANDOM")

    await interaction.followUp({embeds: [embed]})
}
}