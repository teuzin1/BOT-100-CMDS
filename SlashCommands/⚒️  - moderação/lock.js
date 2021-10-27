const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
    name: "lock",
    description: "Tranca um canal",
    options: [
        {
            name: "on-off",
            description: "Deseja desativar ou ativar?",
            type: "STRING",
            required: true,
        }, {
            name: "canal",
            description: "Qual canal deseja trancar?",
            required: true,
            type: "CHANNEL"
        }, {
            name: "cargo",
            description: "Cargo que será desativado/ativado",
            required: false,
            type: "ROLE"
        }
    ],
    userPermissions: ["MANAGE_CHANNELS"],
    run: async(client, interaction) => {
        if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })

        const state = interaction.options.getString("on-off");
        const channel = interaction.options.getChannel("canal");
        if(!channel.type === "GUILD_TEXT") return await interaction.followUp({
            content: `Epa o canal dito não é de texto.`
        })
        let role = interaction.options.getRole("cargo") || channel.guild.roles.everyone;

        const sendMessages = channel.permissionsFor(role).has("SEND_MESSAGES")

        if(state.toLowerCase() === "on" && sendMessages === true) {
            await channel.permissionOverwrites.edit(role, {
                SEND_MESSAGES: false
            });

            const embed = new MessageEmbed()
        
            .setAuthor(`Canal trancado por: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Canal: ${channel} \n Cargo: ${role}`)
            .setColor(config.embed)
            .setFooter("By: Pani Kaz#8893 ")

            return interaction.followUp({ embeds: [embed] })
        } 
   
        

        const embed = new MessageEmbed()

        .setAuthor(`Destrancado trancado por: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`Canal: ${channel} \n Cargo: ${role}`)
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ")
        await channel.permissionOverwrites.edit(role, {
            SEND_MESSAGES: null
        })
        interaction.followUp({ embeds: [embed] });
        
    }
}