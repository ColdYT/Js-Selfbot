const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const figlet = require("figlet")
const clc = require("cli-color");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    console.log(clc.cyan(`Coded by Xaxlii#0001`))
    console.log(clc.cyan(`Version ${config.version}`))
    console.log(clc.cyan("Made with node.js"))
    console.log(clc.cyan("23 commands"))
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
}

module.exports.config = {
    name: "botinfo",
    description: "says hello",
    usage: "+botinfo",
    accessableby: "Members",
    aliases: ["dm", "dma"]
}