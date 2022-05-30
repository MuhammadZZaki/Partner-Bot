module.exports = {
  name: "prefix",
  description: "This command replies with present prefix!",
  execute(message, args) {
    message.reply("Now my prefix is `-?`")
  }
}