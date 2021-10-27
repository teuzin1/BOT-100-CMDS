const Discord = require("discord.js")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
    name: "avatar",
    description: "Veja avatar dos membros",
    type: "CHAT_INPUT",
    options: [
    {
    name: "user",
    type: "USER",
    description: "Qual user deseja pegar o avatar?",
    required: true
    
    },
    
    ],


run: async (client, interaction, args) => {

    let user = interaction.options.getUser("user");
let avatar = user.avatarURL({dynamic: true, format: 'png', size: 1024})
let embed = new Discord.MessageEmbed()
.setTitle(`Avatar do: \`${user.tag}\``)
.setDescription(`[Clique aqui caso queira baixar](${avatar})`)
.setImage(avatar)
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")
await interaction.followUp({embeds: [embed]})

}
}