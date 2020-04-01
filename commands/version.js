const figlet = require("figlet");
const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const clc = require("cli-color");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    console.log(clc.cyan`The version is ${config.version} so keep in mind there are some bugs and not all commands have been added yet`)
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
    }, 5000);
}
module.exports.config = {
    name: "version",
    description: "says hello",
    usage: "*version",
    accessableby: "Members",
    aliases: ["v"]
}