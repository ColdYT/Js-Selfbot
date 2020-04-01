const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const { promptMessage } = require("../functions.js");
const chooseArr = ["🗻", "📰", "✂"];    


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    let embed = new Discord.RichEmbed()
    .setColor("ffffff")
    .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
    .setDescription("Add a reaction to one of these emoji's to play the game!")
    .setTimestamp();

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await m.clearReactions();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, botChosen) {
        if ((me === "🗻" && botChosen === "✂️")||
        (me === "📄" && botChosen === "🗻")||
        (me === "✂️" && botChosen === "📄")) {
            return "You won!";
        } else if (me === botChosen) {
            return "It's a tie!";
        } else {
            return "You lost!"
        }
    }
}
module.exports.config = {
    name: "rps",
    description: "says hello",
    usage: "+rps",
    accessableby: "Members",
    aliases: ["rock"]
}