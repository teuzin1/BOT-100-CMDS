const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
    name: "apagar",
    description: "Apaga um canal",
    type: "CHAT_INPUT",
 run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({content: 'Você deve ter perm de:\`ADMINISTRATOR\`'})

  interaction.channel.delete()

 }
}