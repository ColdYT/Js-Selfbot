const Discord = require("discord.js")
const config = require("../config.json")
const figlet = require("figlet")
const clc = require("cli-color");


module.exports = bot => {
     console.clear()
          console.log(clc.green("Connecting to discord's servers..."))
     setTimeout(() => {
          console.clear()
                   console.log(clc.green("Logging in..."))
    setTimeout(() => {
     console.clear()
              console.log(clc.green("Starting up..."))
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
    }, 3000);
    }, 3000);



    }, 3000);


}