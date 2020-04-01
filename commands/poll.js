const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    if (!args.join(" ")) return message.reply("You must have something to vote for!")
      const pollTopic = await message.channel.send(args.join(" "));
      pollTopic.react(`✅`);
      pollTopic.react(`⛔`);
}
module.exports.config = {
    name: "poll",
    description: "says hello",
    usage: "+poll",
    accessableby: "Members",
    aliases: ["sps"]
}