const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "reportarbug",
    description: "Reporte um bug!",
    options: [
        {
            type: 'STRING',
            description: 'Qual o bug?',
            name: 'bug',
            required: true,
        },
    ],

    run: async (client, interaction, args, message) => {
let user = interaction.user;
        const cc = client.channels.cache.get(config.bugs);
        const bug =    interaction.options.getString('bug');
        const reportEmbed = new MessageEmbed()
            .setTitle('Bug Reportado!')
            .setDescription(`**Author :**\n> ${user.username} \n**BUG :**\n > ${bug}`)
            .setThumbnail(user.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(config.embed)
            .setFooter("By: Pani Kaz#8893 ");
        interaction.followUp({ content: "Obrigado por reportar um bug!" })
        cc.send({ embeds: [reportEmbed] });
    },
};