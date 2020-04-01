const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
 
    message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(args.join(" "));
    });
}

module.exports.config = {
    name: "dmall",
    description: "says hello",
    usage: "+dmall",
    accessableby: "Members",
    aliases: ["dm", "dma"]
}