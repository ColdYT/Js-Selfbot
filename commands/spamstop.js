const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const spamCtrl = require("../SpamControl")


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    spamCtrl.setStatus(false);
}
module.exports.config = {
    name: "spamstop",
    description: "says hello",
    usage: "+spamstop",
    accessableby: "Members",
    aliases: ["sps"]
}