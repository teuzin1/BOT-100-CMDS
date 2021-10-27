const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports =  {
name: "addbot",
description: "Adicione um bot na botlist",
type: "CHAT_INPUT",
options: [
    {
        name: "id",
        type: "STRING",
        description: "Qual o id do seu bot?",
        required: true
        
        },
        {
            name: "prefix",
            type: "STRING",
            description: "Qual o prefix do seu bot?",
            required: true
            
            },
            {
                name: "descrição",
                type: "STRING",
                description: "Qual a descrição do seu bot?",
                required: true
                
                },
                {
                    name: "linguagem",
                    type: "STRING",
                    description: "qual a linguagem de programação do seu bot?",
                    required: true
                    
                    },
       

],


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
   let logs = db.get(`botlist_logs${interaction.guild.id}`)
  let add=  db.get(`botlist_${interaction.guild.id}`)
  let men = db.get(`ping_bot_list${interaction.guild.id}`)
  let id =  interaction.options.getString('id');
  let prefix =  interaction.options.getString('prefix');
  let descrição =  interaction.options.getString('descrição');
  let linguagem =  interaction.options.getString('linguagem');
  if(logs == null) return interaction.followUp({content: "Ixi, acho que não tem um canal de logs setado"})
  if(men == null) return interaction.followUp({content: "Ixi, acho que não tem um ping setado"})
let logs_cc = client.channels.cache.get(logs)
if(!logs_cc) return interaction.followUp({content: "Ixi, o canal de logs foi removido"})
if(add == null) return interaction.followUp({content: "Ixi, acho que não tem um canal de logs setado"})
let add_cc= client.channels.cache.get(add)
if(!add_cc) return interaction.followUp({content: "Ixi, o canal de add-bot foi removido"})
if(add_cc == interaction.channel.id) {
let embed = new Discord.MessageEmbed()
.setTitle("Novo bot!")
.setDescription("Temos um novo bot para avaliar")

.addField('Id:', `\`\`\`${id}\`\`\``, true)
.addField('Prefix:', `\`\`\`${prefix}\`\`\``, true)
.addField('Descrição:', `\`\`\`${descrição}\`\`\``, true)
.addField('Linguagem:', `\`\`\`${linguagem}\`\`\``, true)
.addField('Adicionar:', `[clique aqui](https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=0&scope=bot%20applications.commands)`)
.setThumbnail(interaction.user.avatarURL({dynamic: true, format: 'png', size: 1024}))
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")

logs_cc.send({content: `<@&${men}>`, embeds: [embed]})

db.set(`botlist_espera_${interaction.user.id}_${id}_${interaction.guild.id}`,interaction.user.id)
db.set(`botlist_id_${interaction.user.id}_${id}_${interaction.guild.id}`,id)
db.set(`botlist_prefix_${interaction.user.id}_${id}_${interaction.guild.id}`,prefix)
db.set(`botlist_desc_${interaction.user.id}_${id}_${interaction.guild.id}`,descrição)
db.set(`botlist_desc_${interaction.user.id}_${id}_${interaction.guild.id}`,linguagem)
return interaction.followUp({content: "Bot enviado!"})

}
interaction.followUp({content: `O comando só pode ser usado em: <#${add}>`}) 


}
}
