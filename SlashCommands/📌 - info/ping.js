const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports =  {
name: "ping",
description: "Veja meu ping",
type: "CHAT_INPUT",
run: async (client, interaction, args) => {



    await interaction.followUp({content: `Meu ping é \`${client.ws.ping}\`ms`})
}
}