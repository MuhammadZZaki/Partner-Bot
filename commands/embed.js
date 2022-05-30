const {MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  description: "This command replies with an awesome embed!",
  execute(message, args) {
    const embed = new MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("This is embed")
    .setDescription("Are you fucking people?")
    .addFields(
        {name: "Embed 1", value:"Awesome embed!"},
        {name: "Embed 2", value:"A Beautiful embed!"}
    )
    .setImage("https://asset.kompas.com/crops/jNJCw78jRpATerjMmadbBwqblkE=/0x0:1800x1200/750x500/data/photo/2021/05/10/6099375e04acb.jpg")
    .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}