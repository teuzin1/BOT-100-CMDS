const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'finalizar',
    description: 'finalizar um sorteio!',
    userPermissions: ["ADMINISTRATOR"],
    options: [
        {
          name: "message_id",
          type: "STRING",
          description: "Mensagem do sorteio",
          required: true,
        },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
const messageId = interaction.options.getString('message_id');
client.giveawaysManager.end(messageId).then(() => {
    interaction.followUp('Pronto! Soteio encerrado');
}).catch((err) => {
    interaction.channel.send(`Ouve um erro!`);
});
    }
}