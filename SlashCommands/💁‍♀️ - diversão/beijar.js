const Discord = require('discord.js')
const superagent = require("superagent");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
   name: "beijar",
description: "Eu sei que quer beijar ele ne",
type: "CHAT_INPUT",
options: [
{
name: "user",
type: "USER",
description: "Qual user deseja beijar?",
required: true

},

],
run: async(bot, interaction, args ) => {

   const { body } = await superagent.get('https://nekos.life/api/v2/img/kiss')

   let user = interaction.options.getUser("user");
   


if(user.id == interaction.user.id) return interaction.followUp({content: "Que? Como vai se beijar???"})



   const embed = new Discord.MessageEmbed()
      .setDescription(`<@${interaction.user.id}> beijou <@${user.id}>`)
      .setImage(body.url)
      .setColor(config.embed)
      .setFooter("By: Pani Kaz#8893 ")
      await interaction.followUp({embeds: [embed]})
 
}
}