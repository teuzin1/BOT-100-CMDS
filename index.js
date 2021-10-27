

const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767,});
const config = require("./config.json")
const creditos = require("./CREDITS.json")
const db = require("quick.db")
module.exports = client;
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
client.login(client.config.token);
var criar = new Discord.MessageButton().setCustomId("c").setLabel("Crie seu ticket").setStyle("PRIMARY")
const fechar = new Discord.MessageButton().setCustomId("f").setLabel("Feche seu ticket").setStyle("PRIMARY")
const { GiveawaysManager } = require('discord-giveaways');

const manager = new GiveawaysManager(client, {
    storage: './sorteios.json',
    default: {
        botsCanWin: false,
        embedColor: config.embed,
        embedColorEnd: config.embed,
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;
client.on('interactionCreate', interaction => {
    if (interaction.isButton()) {
        if (interaction.customId.startsWith('c')) {
            interaction.guild.channels.create(`ticket-${interaction.user}`, {
                permissionOverwrites: [
                    {
                id: interaction.guild.roles.everyone,
                deny: ["VIEW_CHANNEL"],
                    },
                    {
                        id: interaction.user.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", 'READ_MESSAGE_HISTORY']
                    }
                ], 
                
                
                            }).then(async channel => {
                                channel = channel;
                                interaction.reply({content: `seu ticket foi criado em: ${channel}`, ephemeral: true})
                                const row = new Discord.MessageActionRow().addComponents(fechar)
                                let embed = new Discord.MessageEmbed()
                                .setTitle("Bem vindo(a) ao seu ticekt!")
                                .setDescription("Espere um moderador vir te atender.")
                                .setColor("RANDOM")
                                channel.send({embeds: [embed], components: [row]}).then(msg => {
                                    msg.pin()
                                })
                            })
        }
        if (interaction.customId.startsWith('f')) {
   interaction.channel.delete()

        }
    }
})
client.on('messageCreate', message => {
    let setado = db.get(`sugestao_${message.guild.id}_${message.channel.id}`)
    if(setado == null) return;
    let conteudo = message.content.split(" ").slice('').join(" ");
    if(message.author.bot)return;


    if (!message.channel.id === setado) return;
    if (conteudo.length > 250) {
        message.delete()
        return message.channel.send({content: `${message.author}` + "A sugestão não pode passar de 200 caracteres"});
    }
    if(message.content.startsWith('')){
        message.delete()
    const embed = new Discord.MessageEmbed()
.setTitle("Uma nova sugestão!")
    .setDescription(`\n\n\`\`\`${conteudo}\`\`\``)
    .setFooter(`Sugestão enviada por: ${message.author.tag}`)
    .setThumbnail(message.author.avatarURL())
    .setColor(config.embed)
message.channel.send({embeds: [embed], content: `${message.author}`}).then(msg => {
      msg.react('✅').then( r => {
        msg.react('🚫')
      })
    })
    }
    });







