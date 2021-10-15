const Discord = require('discord.js');


module.exports = {
name: "setname",
description: "Troque meu nome",
type: "CHAT_INPUT",
options: [
{
name: "nome",
type: "STRING",
description: "Meu novo nome",
required: true

},
],



    run: async(client, interaction, args) => {
        if(interaction.user.id !== "702270810940768507") return interaction.followUp({content: "Você não pode usar esse comando!"});
        if(interaction.user.id == "702270810940768507") {

        let msgs = interaction.options.getString("nome");
        const embed = new Discord.MessageEmbed().setColor('#FF00FF')
        .setDescription('Meu nome foi alterado para: ' + `${msgs}`)
        client.user.setUsername(msgs).then(
            interaction.followUp({embeds:[embed]})
        ).catch(e => e)
      
    
    }
    }
};