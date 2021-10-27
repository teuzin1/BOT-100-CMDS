const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
    name: "nuke",
    description: "Limpa um canal",
    type: "CHAT_INPUT",
 run: async (client, interaction, args) => {
  if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
  if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({content: 'Você deve ter perm de:\`ADMINISTRATOR\`'})
    interaction.channel.clone().then(channel => {
    channel.send('**NUKE**')
  })
  interaction.channel.delete()
  .catch (e => {
    return interaction.followUp({content: 'NUKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'})
  })
 }
}