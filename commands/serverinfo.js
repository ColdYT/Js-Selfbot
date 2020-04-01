const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async (bot,  message, args) => {
    if(message.author.id !== `${config.id}`) return
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.green)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`Zuxbloody`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc"]
}