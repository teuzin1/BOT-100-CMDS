const Discord = require('discord.js');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "serverlist",
    description: "Server list",
    type: "CHAT_INPUT",
    ownerOnly: true,


run:  async(client, interaction, args) => {


const guild = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(30);
const footer = new Discord.MessageEmbed()
.setDescription(guild.map((guild, index) => `#**${index + 1}**  \`${guild.name}\` | ${guild.memberCount} Members | \`${guild.id}\``).join('\n'))
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")

interaction.followUp({ embeds: [footer]});
}
}