const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const randompuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    const subreddits = ["dankmeme", "meme", "me_irl"];
    const random = subreddits[Math.floor(Math.random() * subreddits.length)];

    const img = await randompuppy(random);
    const embed = new Discord.RichEmbed()
    .setColor(colours.green)
    .setImage(img)
    .setFooter(`Form /r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)
    .setTimestamp()
    message.channel.send(embed)
}
module.exports.config = {
    name: "meme",
    description: "says hello",
    usage: "+meme",
    accessableby: "Members",
    aliases: ["m"]
}