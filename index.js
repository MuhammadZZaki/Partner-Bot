const {Client, Collection } = require("discord.js");
const fs = require("fs");
const ping = require("./commands/ping")

const client = new Client({ intents: 32767});
const prefix = "-?";
const { token } = require("./config.json");

const commands = new Collection();
const files = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for(const file of files) {
  const command = require(`./commands/${file}`)
  commands.set(command.name, command)
}

console.log(commands);

client.on("ready", () => {
    console.log(`${client.user.tag} is online now!`)
    client.user.setPresence({ activities: [{ name: `game.gg`, type: "PLAYING"}], status: `idle` });
})

client.on("messageCreate", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === "ping") {
        commands.get("ping").execute(message, args)
    } else if(command === "youtube") {
        commands.get("youtube").execute(message, args)
    } if(command === "embed") {
        commands.get("embed").execute(message, args)
    } else if(command === "clear") {
        commands.get("clear").execute(message, args)
    } if(command === "kick") {
        commands.get("kick").execute(message, args)
    } else if(command === "ban") {
        commands.get("ban").execute(message, args)
    } if(command === "prefix") {
        commands.get("prefix").execute(message, args)
    } else if(command === "play") {
        commands.get("play").execute(message, args)
    } if(command === "leave") {
        commands.get("leave").execute(message, args)        
    }
})

client.login(token)