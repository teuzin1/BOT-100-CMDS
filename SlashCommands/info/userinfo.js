const Discord = require("discord.js"); 
const moment = require("moment")
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

  let user = interaction.options.getUser('user');
  let member = interaction.guild.members.cache.get(user.id)
  
  let avatar_png = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
  let avatar_gif = user.avatarURL({ dynamic: true, format: "jpg", size: 1024 });    
  const invite = new Discord.MessageActionRow().addComponents(
       
    new Discord.MessageButton().setLabel("png").setEmoji("<:hype_1:894537367543754762> ").setURL(avatar_png).setStyle("LINK"),
    new Discord.MessageButton().setLabel("jpg").setEmoji("<:hype_2:894537424577916928> ").setURL(avatar_gif).setStyle("LINK"),
  );
  let as = user.bot;
  if(as == false) as == "Não é um bot";
  if(as == true) as == "É um bot";
  let embed = new Discord.MessageEmbed() 
  
    .setTitle(`${user.username}`) 
    .addField("Id:", `${user.id}`)
    .addField("Conta criada em:", `\`\`\`${member.user.createdAt.toLocaleString()}\`\`\``, true)
    .addField(`Cargos: [${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "Sem cargos!"}`, true)
    .addField("Entrou em:", `\`\`\`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\`\`\``, true)
.setImage(avatar_png)
.setColor('#2F3136')
 await interaction.followUp({embeds:[embed],components:[invite]}); 

},
}