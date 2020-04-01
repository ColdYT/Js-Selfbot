const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    let embed = new Discord.RichEmbed()
    .setColor("ffffff")
    .setDescription(args.join(" "))
    message.channel.send(embed)
}
module.exports.config = {
    name: "embed",
    description: "says hello",
    usage: "+embed",
    accessableby: "Members",
    aliases: ["e"]
}