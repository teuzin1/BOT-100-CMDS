const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
  name: "roleinfo",
  description: "Obtenha informações de um cargo",
  options: [
    {
      name: "role",
      type: "ROLE",
      description: "O cargo que você deseja obter as informações !",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
        try {
    const role = interaction.guild.roles.cache.get(args[0]);
     const permissions = {
            "ADMINISTRATOR": "Administrador",
            "VIEW_AUDIT_LOG": "Ver Registro de Auditoria",
            "VIEW_GUILD_INSIGHTS": "Exibir insights do servidor",
            "MANAGE_GUILD": "Gerenciar Servidor",
            "MANAGE_ROLES": "Gerenciar Cargos",
            "MANAGE_CHANNELS": "Gerenciar Canais",
            "KICK_MEMBERS": "Expulsar Membros",
            "BAN_MEMBERS": "Banir Membros",
            "CREATE_INSTANT_INVITE": "Criar convite",
            "CHANGE_NICKNAME": "Mudar apelido",
            "MANAGE_NICKNAMES": "Gerenciar apelidos",
            "MANAGE_EMOJIS": "Gerenciar Emojis",
            "MANAGE_WEBHOOKS": "Gerenciar webhooks",
            "VIEW_CHANNEL": "Ler canais de texto e ver canais de voz",
            "SEND_MESSAGES": "Enviar mensagens",
            "SEND_TTS_MESSAGES": "Enviar mensagens TTS",
            "MANAGE_MESSAGES": "Gerenciar mensagens",
            "EMBED_LINKS": "Embed Links",
            "ATTACH_FILES": "Anexar arquivos",
            "READ_MESSAGE_HISTORY": "Leia o histórico da mensagem",
            "MENTION_EVERYONE": "Mencione @everyone, @here e Todos os cargos",
            "USE_EXTERNAL_EMOJIS": "Usar Emojis Externos",
            "ADD_REACTIONS": "Adicionar Reações",
            "CONNECT": "Conectar",
            "SPEAK": "Falar",
            "STREAM": "Video",
            "MUTE_MEMBERS": "Mutar Membros",
            "DEAFEN_MEMBERS": "Membros surdos",
            "MOVE_MEMBERS": "Mover membros",
            "USE_VAD": "Usar atividade de voz",
            "PRIORITY_SPEAKER": "Orador prioritário"
        }

        const yesno = {
            true: '`Sim`',
            false: '`Não`'
        }


        const rolePermissions = role.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (rolePermissions.includes(permission)) finalPermissions.push(`✅ ${permissions[permission]}`);
            else finalPermissions.push(`❌ ${permissions[permission]}`);
        }

        const position = `\`${interaction.guild.roles.cache.size - role.position}\`/\`${interaction.guild.roles.cache.size}\``;
        
        const embed = new MessageEmbed()
        
        .setTitle(`Role Info !!`)
        .setThumbnail(interaction.guild.iconURL({dynamic: true, size: 1024}))
        .addField('Nome', `<@&${role.id}>`, true)
        .addField('ID', `\`${role.id}\``, true)
        .addField('Posição', `${position}`, true)
        .addField('Mencionavel', yesno[role.mentionable], true)
        .addField('Cargo de bot', yesno[role.managed], true)
        .addField('Visivel', yesno[role.hoist], true)
        .addField('Cor', `\`${role.hexColor.toUpperCase()}\``, true)
        .addField('Data de criação', `\`${moment(role.createdAt).format('DD/MMM/YYYY')}\``, true)
        .addField('Permissões', `\`\`\`diff\n${finalPermissions.join('\n')}\`\`\``)
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ")
        interaction.followUp({ embeds: [embed] })
    } catch (error) {
        await interaction.followUp({ content: error.message })
    }
}
}
