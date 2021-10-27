const Discord = require("discord.js"); 
const moment = require("moment")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
  name: "userinfo",
  description: "Veja infos de um user",
  type: 'CHAT_INPUT',
  options: [
      {
          name: 'user',
          type: 'USER',
          description: 'User que deseja ver infos',
          required: true,
      },
  ],

run:  async (client, interaction, args) => {
  if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })

  let user = interaction.options.getUser('user');
  let member = interaction.guild.members.cache.get(user.id)
  
  let avatar_png = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
  let avatar_gif = user.avatarURL({ dynamic: true, format: "jpg", size: 1024 });    
  const invite = new Discord.MessageActionRow().addComponents(
       
    new Discord.MessageButton().setLabel("png").setURL(avatar_png).setStyle("LINK"),
    new Discord.MessageButton().setLabel("jpg").setURL(avatar_gif).setStyle("LINK"),
  );

  let embed = new Discord.MessageEmbed() 
  
    .setTitle(`${user.username}`) 
    .addField("Id:", `${user.id}`)
    .addField("Conta criada em:", `\`\`\`${member.user.createdAt.toLocaleString()}\`\`\``, true)
    .addField(`Cargos: [${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "Sem cargos!"}`, true)
    .addField("Entrou em:", `\`\`\`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\`\`\``, true)
.setImage(avatar_png)
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")
 await interaction.followUp({embeds:[embed],components:[invite]}); 

},
}