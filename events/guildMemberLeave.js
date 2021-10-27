const client = require("../index");
const config = require("../config.json")
const creditos = require("../CREDITS.json")
const Discord = require("discord.js")
const db = require("quick.db")
client.on("guildMemberRemove", async (member) => {
    let canal = db.get(`saida_${member.guild.id}`)
    let canal_set = client.channels.cache.get(canal)
    if(!canal_set) return console.log("Algo de errado não está certo");
    let embed = new Discord.MessageEmbed()
    .setTitle("Membro saiu!")
    .setDescription(`${member} saiu!`)
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")
    .setThumbnail(member.user.avatarURL({dynamic: true, format: 'png', size: 1024}))
canal_set.send({embeds: [embed]})
})