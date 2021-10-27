const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "analisar",
description: "Analise um bot na botlist",
type: "CHAT_INPUT",
options: [
    {
        name: "id",
        type: "STRING",
        description: "Qual o id do bot?",
        required: true
        
        },
    
       

],


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
let id =  interaction.options.getString('id');
let logs = db.get(`botlist_logs${interaction.guild.id}`)
  let add=  db.get(`botlist_${interaction.guild.id}`)
  let men = db.get(`ping_bot_list${interaction.guild.id}`)
  let bot =  db.get(`botlist_espera_${interaction.user.id}_${id}_${interaction.guild.id}`)

  if(logs == null) return interaction.followUp({content: "Ixi, acho que não tem um canal de logs setado"})
  if(men == null) return interaction.followUp({content: "Ixi, acho que não tem um ping setado"})
let logs_cc = client.channels.cache.get(logs)
if(!logs_cc) return interaction.followUp({content: "Ixi, o canal de logs foi removido"})
if(add == null) return interaction.followUp({content: "Ixi, acho que não tem um canal de logs setado"})
let add_cc= client.channels.cache.get(add)
if(!add_cc) return interaction.followUp({content: "Ixi, o canal de add-bot foi removido"})
if(bot == null ) return interaction.followUp({content: "Ixi, esse bot não existe"})

    var aprovar = new Discord.MessageButton().setCustomId('a').setLabel('Aprovar').setStyle('SUCCESS')
    var reprovar = new Discord.MessageButton().setCustomId('r').setLabel('Reprovar').setStyle('DANGER')

    let row = new Discord.MessageActionRow().addComponents(aprovar, reprovar)
    var collector = interaction.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 30000})

    let embed = new Discord.MessageEmbed()

    .setTitle("Olá!")
    .setDescription("O que deseja fazer com o bot?")
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")
    let acb = new Discord.MessageEmbed()
    .setTitle("Esse menu expirou ")
    .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")
interaction.followUp({embeds: [embed], components: [row]}).then(m => {
    setTimeout(() => {

        aprovar.setDisabled(true)
        reprovar.setDisabled(true)
        let row2 = new Discord.MessageActionRow().addComponents(aprovar, reprovar)
       m.edit({embeds: [acb], components: [row2]});
    }, 30000) 
});

collector.on('collect', async (m) => {
            
    if (m.user.id != interaction.user.id)
    return;
    if (m.customId === 'r') {
        let reprovado = new Discord.MessageEmbed()
        .setTitle("Seu bot foi reprovado!")
        .setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")
logs_cc.send({embeds: [reprovado], content: `<@${bot}> `})
db.delete(`botlist_espera_${interaction.user.id}_${id}_${interaction.guild.id}`)
db.delete(`botlist_id_${interaction.user.id}_${id}_${interaction.guild.id}`)
db.delete(`botlist_prefix_${interaction.user.id}_${id}_${interaction.guild.id}`)
db.delete(`botlist_desc_${interaction.user.id}_${id}_${interaction.guild.id}`)
db.delete(`botlist_desc_${interaction.user.id}_${id}_${interaction.guild.id}`)
return interaction.followUp("Bot reprovado!")

      
    }
})





}
}
