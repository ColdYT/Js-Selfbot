const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const translate = require("@vitalets/google-translate-api");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    let translating = args.slice(0).join(" ");
    translate(`${translating}`, {to: `${args[0]}`}).then(res => {
        message.channel.send(res.text)
    }).catch(err => {
        console.error(err)
    });
}
module.exports.config = {
    name: "translate",
    description: "says hello",
    usage: "+translate",
    accessableby: "Members",
    aliases: ["t", "tl"]
}