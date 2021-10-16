const { Client, Collection } = require("discord.js");
const roles = require("./roles.json")

const Discord = require("discord.js");
const client = new Client({
    intents: 32767,
});
const config = require("./config.json")
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
client.login(client.config.token);
const criar = new Discord.MessageButton().setCustomId("c").setLabel("Crie seu ticket").setStyle("PRIMARY")
const fechar = new Discord.MessageButton().setCustomId("f").setLabel("Feche seu ticket").setStyle("PRIMARY")
const menino = new Discord.MessageButton().setCustomId("me").setLabel("Menino").setStyle("PRIMARY")
const menina = new Discord.MessageButton().setCustomId("ma").setLabel("Menina").setStyle("PRIMARY")
const nb = new Discord.MessageButton().setCustomId("nb").setLabel("Não binario").setStyle("PRIMARY")
const mais = new Discord.MessageButton().setCustomId("+18").setLabel("+18").setStyle("PRIMARY")
const menos = new Discord.MessageButton().setCustomId("-18").setLabel("-18").setStyle("PRIMARY")

client.on("ready", () => { 
    let cc = client.channels.cache.get(config.id_ticekt_channel)
    const row = new Discord.MessageActionRow().addComponents(criar)
    let embed = new Discord.MessageEmbed()
    .setTitle("TICKTS")
    .setDescription("Crie seu ticket!")
    .setColor("RANDOM")
cc.send({embeds: [embed], components: [row]})

  
});

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
], parent: config.id_category


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
        if (interaction.customId.startsWith('+18')) {
			if (interaction.member.roles.cache.has(roles.ma18)) {
                interaction.member.roles.remove(roles.ma18)
                return interaction.reply({
                    content: `Cargo removido!`,
                    ephemeral: true,
            
            })
        }
			
        
        interaction.member.roles.add(roles.ma18)
			interaction.reply({
				content: `Cargo setado!`,
				ephemeral: true,
			  });
	};
    if (interaction.customId.startsWith('-18')) {
        if (interaction.member.roles.cache.has(roles.me18)) {
            interaction.member.roles.remove(roles.me18)
            return interaction.reply({
                content: `Cargo removido!`,
                ephemeral: true,
        
        })
    }
        interaction.member.roles.add(roles.me18)
        interaction.reply({
            content: `Cargo setado!`,
            ephemeral: true,
          });
};
if (interaction.customId.startsWith('me')) {
    if (interaction.member.roles.cache.has(roles.menino)) {
        interaction.member.roles.remove(roles.menino)
        return interaction.reply({
            content: `Cargo removido!`,
            ephemeral: true,
    
    })
}
    interaction.member.roles.add(roles.menino)
    interaction.reply({
        content: `Cargo setado!`,
        ephemeral: true,
      });
};
if (interaction.customId.startsWith('ma')) {
    if (interaction.member.roles.cache.has(roles.menina)) {
        interaction.member.roles.remove(roles.menina)
        return interaction.reply({
            content: `Cargo removido!`,
            ephemeral: true,
    
    })
}
    interaction.member.roles.add(roles.menina)
    interaction.reply({
        content: `Cargo setado!`,
        ephemeral: true,
      });
};
if (interaction.customId.startsWith('nb')) {
    if (interaction.member.roles.cache.has(roles.não_binario)) {
        interaction.member.roles.remove(roles.não_binario)
        return interaction.reply({
            content: `Cargo removido!`,
            ephemeral: true,
    
    })
}
interaction.member.roles.add(roles.não_binario)
    interaction.reply({
        content: `Cargo setado!`,
        ephemeral: true,
      });
};
    }
})
client.on("ready", () => { 
    let cc = client.channels.cache.get(config.id_button_channel_role)
    const row = new Discord.MessageActionRow().addComponents(mais, menos, menino, menina, nb)
    let embed = new Discord.MessageEmbed()
    .setTitle("ROLE BUTTON")
    .setDescription("Selecione os cargos que deseja!")
    .setColor("RANDOM")
cc.send({embeds: [embed], components: [row]})

  
});






