const { Client, Message, MessageEmbed } = require('discord.js');
const db = require("quick.db")
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: 'setup',
    description: "Criar um setup",
    type: "CHAT_INPUT",
    run: async (client, interaction, args) => {
        // code here
        interaction.guild.channels.create("BOTLIST", {
            type: 'GUILD_CATEGORY',
            permissionOverwrites: [{
                id: interaction.guild.id,
                allow: ['VIEW_CHANNEL'],
            },],
        }).then((channel1) => {
            interaction.guild.channels.create(`🎈・logs`, {
                type: 'text', 
                parent: channel1.id, 
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    allow: ['VIEW_CHANNEL'],
                },],
            }).then((channel2) => {
                interaction.guild.channels.create(`🎈・addbot`, {
                    type: 'text', 
                    rateLimitPerUser: 6, 
                    topic: `Adicione seu bot`,
                    parent: channel1.id,
                    permissionOverwrites: [{
                        id: interaction.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    { 
                        id: client.user.id,
                        allow: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "ADD_REACTIONS", "SEND_MESSAGES", "MANAGE_ROLES"]
                    }
                    ],
                }).then((channel3) => {
                    interaction.followUp(`Bot list iniciada! <#${channel3.id}>`)
                    let a = new MessageEmbed()

                 
                        .setTitle("Adicione seu bot.")
                        .setDescription(`Você deve cumprir alguns recs, leia-os abaixo
                        
                        Use \`/addbot\``)
                        .setColor(config.embed)
                        .setFooter("By: Pani Kaz#8893 ")

                    let b = new MessageEmbed()
       
             
                      
                        .setDescription(`-Responder ao ser Mencionado mostrando prefixo e o comando de ajuda


                        -Ter no mínimo 15 comandos que não requerem permissões administrativas.
                        
                        -Ter no mínimo 10 dias de criação.
                        
                        -Bots que possuem conteúdo/comandos: (violentos, racistas, homofóbicos, políticos, religiosos, gore, pornográficos, etc...) Não serão aceitos!
                        
                        
                        -Não serão aceito bots com comandos roubados/copiados.
                        
                        -Não serão aceitos bots com Muitos erros "ortográficos"!`)
                        
                        .setColor(config.embed)
                        .setFooter("By: Pani Kaz#8893 ")
                       

                 
                    channel3.send({embeds: [new MessageEmbed()     .setColor(config.embed)
                        .setFooter("By: Pani Kaz#8893 ").setDescription("Bot list iniciada")]}).then(msg => {
            
                            msg.edit({embeds: [a]})
               

                    })

                    db.set(`botlist_${interaction.guild.id}`, channel3.id)
                    db.set(`botlist_logs${interaction.guild.id}`, channel2.id)

          
                    channel3.send({embeds: [new MessageEmbed()     .setColor(config.embed)
                        .setFooter("By: Pani Kaz#8893 ").setDescription("Botlist iniciada")]}).then(msg => {
             
                        msg.edit({embeds: [b]})
                        

            
                    })
                })
            })
        })
    }
}