const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    const member = getMember(message, args.join(" "));

    const joined = formatDate(member.joinedAt);
    const roles = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join(", ") || 'none';

    const created = formatDate(member.user.createdAt);

    const embed = new Discord.RichEmbed()
        .setFooter(member.displayName, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

        .addField('Member information:', stripIndents`**> Display name:** ${member.displayName}
        **> Joined at:** ${joined}
        **> Roles:** ${roles}`, true)

        .addField('User information:', stripIndents`**> ID:** ${member.user.id}
        **> Username**: ${member.user.username}
        **> Tag**: ${member.user.tag}
        **> Created at**: ${created}`, true)
        
        .setTimestamp()

    if (member.user.presence.game) 
        embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

    message.channel.send(embed);
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: ".userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}