const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
    name: "slow-mode",
    description: "Define um slow para o canal",
    type: "CHAT_INPUT",
    options: [
        {
            name: "tempo",
            type: "STRING",
            description: "Qual tempo deseja setar?",
            required: true
            
            },
           
    
    ],
    run: async (client, interaction, args) => {
        if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) returninteraction.followUp('Você não tem permissão para usar este comando.').then(m => m.delete({ timeout: 5000 }));

       let string = interaction.options.getString('tempo');

        const currentCooldown = interaction.channel.rateLimitPerUser;


           



        const time = ms(string) / 1000;


        if(string < 1000) {

            const embed = new MessageEmbed()
            .setTitle('SlowMode desativado!!')
            
      
                .addField('Deseja ativar?',"```/slow-mode <tempo em milisegundos>```", true)
        
                .setColor(config.embed)
    .setFooter("By: Pani Kaz#8893 ")
    
    return interaction.channel.setRateLimitPerUser(time).then(msg =>{
               interaction.followUp({embeds: [embed]});
            });
        };

        if (isNaN(time)) return interaction.followUp({content: 'Tempo invalido!'})

        if (time >= 21600) return interaction.followUp({content: 'Esse limite de modo lento é muito alto!\N\N Limite: 6 horas'} )

        if (currentCooldown === time) return interaction.followUp(`Slowmode já está definido para ${string}`);
        const embed = new MessageEmbed()
        .setTitle('SlowMode ativo!!')
        
  
            .addField('Slowmode: ', `\`\`\`${string}ms\`\`\``, true)
    
            .setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")

        interaction.channel.setRateLimitPerUser(time).then(msg =>{
            interaction.followUp({embeds: [embed]})
        })
      


    }
}