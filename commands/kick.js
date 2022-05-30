module.exports = {
    name: "kick",
    description: "ini adalah command punishment!",
    execute(message, args) {
      const member = message.mentions.users.first();
      if(member) {
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.kick();
          message.channel.send("User has been kicked from this server!");
      } else {
          message.channel.send('You dont have permission to use this command')
      }
    }
  }