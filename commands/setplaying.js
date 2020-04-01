const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    bot.user.setActivity(args.join(" "), { type: "PLAYING"})
}
module.exports.config = {
    name: "setplaying",
    description: "says hello",
    usage: "*setplaying",
    accessableby: "Members",
    aliases: ["sp"]
}