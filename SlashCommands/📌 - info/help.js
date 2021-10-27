const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")
module.exports = {
  name: "help",
  description: "Mostra todos meus comandos!",
  /**
   * @param {Client} client
   * @param {ContextMenuInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
   
    if (!args[0]) {
      let categories = [];

      readdirSync("./SlashCommands/").forEach((dir) => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../SlashCommands/${dir}/${command}`);

          if (!file.name) return "Opa esse comando não tem nome";

          let name = file.name.replace(".js", "");
          let description = file.description;

          return `\`${name}\` : ${description} \n`;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "Nada aqui" : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("Olá! Deseja ter ajuda em meus comandos?")
        .addFields(categories)

        .setDescription(
          `COLOQUE ALGUMA INFO SOBRE SEU BOT AQUI`
        )
        .setColor(config.embed)
        .setFooter("By: Pani Kaz#8893 ");


      return interaction.followUp({ embeds: [embed] });
    }
  }
};