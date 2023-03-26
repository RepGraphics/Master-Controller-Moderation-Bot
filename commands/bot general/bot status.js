const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "status",
    category: "info",
    description: "Checks to see if the bot is online and gives the current build version",
    run: async (client, message, args) => {

                 const embed = new MessageEmbed()
                 
                 .setTitle("Bot Status")
                 .setDescription("My other Bot [MasterController](https://discord.com/api/oauth2/authorize?client_id=703304870035456101&permissions=8&scope=bot).")
                 .setColor(15105570)
                 .addField("**Bot Owner:**",                                  "```\nRep Graphics#1419```")
                 .addField("**Bot Version:**",                                "```\nv1.0.1```", true)
                 .addField("**Bot Status:**",                                 "```\nOnline```", true)  
                 .setTimestamp()
                 .setFooter("Created By Rep Graphics#1419!")
                message.channel.send(embed).catch(err => console.log(err));            
                }      
    }

