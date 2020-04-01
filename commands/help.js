const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const figlet = require("figlet")
const clc = require("cli-color");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    message.channel.send("Check your console").then(m => m.delete(5000))
    console.log(clc.cyan(`Hi ${bot.user.username} hope you like your selfbot`))
    console.log(clc.cyan("pfpstealer: steals the mentioned users pfp"))
    console.log(clc.cyan("fortnitestats: Checks a players stats"))
    console.log(clc.cyan("ping: sends the ping of the bot"))
    console.log(clc.cyan("uptime: show for how long the bot have been running"))
    console.log(clc.cyan("spamstart: starts a spam"))
    console.log(clc.cyan("Spamstop: stops a spam"))
    console.log(clc.cyan("setlistening: sets your status to listening x"))
    console.log(clc.cyan("setplaying: sets your status to playing x"))
    console.log(clc.cyan("setwatching: sets your status to watching x"))
    console.log(clc.cyan("setstreaming: sets your status to streaming x"))
    console.log(clc.red("Other commands in 30 seconds"))
    setTimeout(() => {
        console.clear()
        figlet.text(`${config.text}`, {
       font: `${config.font}`,
       horizontalLayout: 'default',
       verticalLayout: 'default'
   }, function(err, data) {
       if (err) {
           console.log('Something went wrong...');
           console.dir(err);
           return;
       }
       console.log(clc.red(`${data}`));
       console.log(clc.cyanBright("               Coded by Xaxlii#0001 -- https://discord.gg/dfwaZqW -- "))
       console.log(clc.cyanBright(`               Your prefix is`, clc.redBright(`${config.prefix}`)))
            console.log(clc.cyan("version: shows the current version"))
            console.log(clc.cyan("embed: sends an embed with the givin message"))
            console.log(clc.cyan("userinfo: sends a message with info about your profile"))
            console.log(clc.cyan("servinfo: sends an embed with info about the server you send the message in"))
            console.log(clc.cyan("dmall: Dms every user in the server can get you banned so use with cautions"))
            console.log(clc.cyan("translate: Translates the givin message"))
            console.log(clc.cyan("poll: Makes a poll"))
            console.log(clc.cyan("shutdown: turns off the bot"))
            console.log(clc.cyan("meme: sends a random meme"))
            console.log(clc.cyan("botinfo: shows some info of the bot"))
            console.log(clc.cyan("clearconsole: clears the console"))
            setTimeout(() => {
                console.clear()
                figlet.text(`${config.text}`, {
               font: `${config.font}`,
               horizontalLayout: 'default',
               verticalLayout: 'default'
           }, function(err, data) {
               if (err) {
                   console.log('Something went wrong...');
                   console.dir(err);
                   return;
               }
               console.log(clc.red(`${data}`));
               console.log(clc.cyanBright("               Coded by Xaxlii#0001 -- https://discord.gg/dfwaZqW -- "))
               console.log(clc.cyanBright(`               Your prefix is`, clc.redBright(`${config.prefix}`)))
           });   
            }, 30000);
    }); 
    }, 30000);
}

module.exports.config = {
    name: "help",
    description: "says hello",
    usage: "'help",
    accessableby: "Members",
    aliases: ["h"]
}