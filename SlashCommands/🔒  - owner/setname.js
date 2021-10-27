const Discord = require('discord.js');


module.exports = {
name: "setname",
description: "Troque meu nome",
type: "CHAT_INPUT",
ownerOnly: true,
options: [
{
name: "nome",
type: "STRING",
description: "Meu novo nome",
required: true

},
],



    run: async(client, interaction, args) => {
   
   

        let msgs = interaction.options.getString("nome");
        const embed = new Discord.MessageEmbed().setColor('#FF00FF')
        .setDescription('Meu nome foi alterado para: ' + `${msgs}`)
        client.user.setUsername(msgs).then(
            interaction.followUp({embeds:[embed]})
        ).catch(e => e)
      
    

    }
};