const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "Shows Current Latency❗",
  description_localizations: {"pt-BR":"Mostra a latência atual do bot"},
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const gateway = Date.now() - interaction.createdTimestamp
    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Meu Ping Está Em: \`Calculando...\`.`)
    .setThumbnail(client.user.displayAvatarURL)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor("White");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`**Ping: \`${ping}ms\` (\`MiliSegundos\`)
                       Gateway: \`${gateway}ms\` (\`MiliSegundos\`)
                       Shards: \`0\`**`)
    .setThumbnail(client.user.displayAvatarURL)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor("White");

    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}