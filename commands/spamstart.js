const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const spamCtrl = require("../SpamControl")


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    spamCtrl.setChannel(message.channel);
    spamCtrl.setStatus(true);
}
module.exports.config = {
    name: "spamstart",
    description: "says hello",
    usage: "+spamstart",
    accessableby: "Members",
    aliases: ["ss"]
}