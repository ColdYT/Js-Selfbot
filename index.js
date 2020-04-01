const config = require("./config.json")
const Discord = require("discord.js");
const colours = require("./colours.json");
const figlet = require("figlet");
const clc = require("cli-color");


const bot = new Discord.Client({disableEveryone: true});


require("./utill/eventHandler.js")(bot)



const fs =require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.lenght <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }
    
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    })
});




bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).split(/ +/g);
    let cmd = args.shift().toLowerCase();

    
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(commandfile) commandfile.run(bot,message,args)
    
    if(cmd === `${prefix}hello`){
        return message.channel.send("hello")
    }
})


bot.login(config.token);