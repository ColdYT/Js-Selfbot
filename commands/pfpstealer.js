const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    const member = getMember(message, args.join(" "));
    let embed = new Discord.RichEmbed()
    .setColor(colours.green)
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL)
    message.channel.send(embed)
};

module.exports.config = {
    name: "pfpstealer",
    description: "says hello",
    usage: "*pfpstealer",
    accessableby: "Members",
    aliases: ["ps"]
}