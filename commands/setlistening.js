const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    bot.user.setActivity(args.join(" "), { type: "LISTENING"})
}
module.exports.config = {
    name: "setlistening",
    description: "says hello",
    usage: "*setlistening",
    accessableby: "Members",
    aliases: ["sl"]
}