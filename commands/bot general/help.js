const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",

    run: async (client, message, args) => {

                 const embed = new MessageEmbed()
  
                 //constant embed for help commands
                 .setTitle("Bot Commands:")
                 .setDescription("My other Bot [MasterController](https://discord.com/api/oauth2/authorize?client_id=703304870035456101&permissions=8&scope=bot).")
                 .setThumbnail("https://i.ibb.co/HTX9nG7/the-hub-3.gif")
                 .setTimestamp()
                 .setFooter("Created By Rep Graphics#1419!", "https://i.ibb.co/B3Ck7tv/mylogo.png")
                 .setColor(15105570)

                 //add more commands below when added
                 .addField("**Prefix:**",                                     "```\n,```")
                 .addField("**Bot Status:**",                                 "```\nstatus```")
                 .addField("**Balance:**",                                    "```\nbal (username)```")         
                 .addField("**Feedback:**",                                   "```\nfeedback s(suggest)/b(bug) (message)```")              
                 .addField("**Server Info:**",                                "```\nserverinfo```")      

                 .addField("\u200B", "\u200B")    //invisible field/space       

                 .addField("**Ban:**",                                        "```\nban (username) (reason)```")         
                 .addField("**Clear:**",                                      "```\nclear (amount)```")    

                message.channel.send(embed).catch(err => console.log(err)); 
                }
}