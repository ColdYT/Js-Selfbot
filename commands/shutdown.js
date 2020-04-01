const Discord =require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");
const clc = require("cli-color")
const figlet = require("figlet")


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    if(message.author.id != `${config.id}`) return

    message.channel.send("Task completed").then(m => m.delete(5000))
            
    try {
        setTimeout(() => {
            console.log(clc.red("10..."))
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
                console.log(clc.red("9..."))
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
                    console.log(clc.red("8..."))
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
                        console.log(clc.red("7..."))
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
                            console.log(clc.red("6..."))
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
                                console.log(clc.red("5..."))
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
                                    console.log(clc.red("4..."))
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
                                        console.log(clc.red("3..."))
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
                                            console.log(clc.red("2..."))
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
                                                console.log(clc.red("1..."))
                                                process.exit()
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    } catch(e) {
        console.log(`ERROR: ${e.message}`)
}}

module.exports.config = {
    name: "shutdown",
    description: "says hello",
    usage: "*shutdown",
    accessableby: "Members",
    aliases: ["sl"]
}