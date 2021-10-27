const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'novo',
    description: 'Começe um sorteio!',
    options: [
        {
            name: "premio",
            type: "STRING",
            description: "qual o premio do sorteio?",
            required: true,
        },
        
        {
            name: "ganhadores",
            type: "INTEGER",
            description: "quantidade de ganhadores",
            required: true,
        },

        {
            name: "duração",
            type: "STRING",
            description: "Tempo do sorteio",
            required: true,
          },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
        const duration = interaction.options.getString('duração');
        const winnerCount = interaction.options.getInteger('ganhadores');
        const prize = interaction.options.getString('premio');
        interaction.followUp({content: "Sorteio iniciado"})

        client.giveawaysManager.start(interaction.channel, {
            duration: ms(duration),
            winnerCount,
            prize,
        }).then((gData) => {
            console.log(gData); 
        })
    }
}