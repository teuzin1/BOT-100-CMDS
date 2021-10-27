const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "clear",
    description: "limpe mensagens de um canal",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'quantidade',
            type: 'STRING',
            description: 'Quantas mensagens deseja apagar?',
            required: true,
        },
    ],
  



    run: async (client, interaction, args, Discord) => {
        if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
        try {
            if(!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({content: `Você não tem perm para isso!`});
            if(!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
            let delamount = interaction.options.getString('quantidade');
            if (isNaN(delamount) || parseInt(delamount <= 0)) return interaction.followUp({content: ' > ``Coloque um número específico;``\n > ``Exp: /clear 3.``'} )

            if (parseInt(delamount) > 100) return interaction.followUp({content:'Só podes eleminar 99 mensagens de uma vez!'})

            interaction.followUp('Clear iniciado!').then(m => {
                setTimeout(() => {
                  interaction.channel.bulkDelete(parseInt(delamount) * 1, true)
                }, 1000) 
            })

          
        } catch (e) {
            console.log(e)
        }
    }
}