module.exports = {
    name: "ban",
    description: "ini adalah command punishment!",
    execute(message, args) {
      const member = message.mentions.users.first();
      if(member) {
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.ban();
          message.channel.send("User has been banned from this server with specific reason!");
      } else {
          message.channel.send('You dont have permission to use this command')
      }
    }
  }