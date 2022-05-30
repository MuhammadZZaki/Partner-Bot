const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ['latency', 'lag'],
  permissions: 'ADMINISTRATOR',
  description: "This command will send client's ping",
  cooldown: 5,
  execute(message, args, client) {
    const Response = new MessageEmbed()
    .setColor('RED')
    .setDescription(`${client.ws.ping}ms`)
    
    message.channel.send({embeds: [Response]});
  }
}