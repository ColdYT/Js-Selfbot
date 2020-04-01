const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    bot.user.setActivity(args.join(" "), { type: "STREAMING", url: "https://www.twitch.tv/madsimaasfn"})
    
}
module.exports.config = {
    name: "setstreaming",
    description: "says hello",
    usage: "*setstreaming",
    accessableby: "Members",
    aliases: ["ss"]
}