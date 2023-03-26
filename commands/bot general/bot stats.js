const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "botstats",
    category: "info",

    run: async (client, message, args) => {

                 const embed = new MessageEmbed()
                 
                 .setTitle("Bot Stats")
                 .setDescription("My other Bot [MasterController](https://discord.com/api/oauth2/authorize?client_id=703304870035456101&permissions=8&scope=bot).")
                 .setColor(15105570)
                 .addField("**Server Count:**",                              `${client.guilds.cache.size} Servers!`)
                 .addField("**Overall Users:**",                             `${client.users.cache.size} Users!`)
                 .setTimestamp()
                 .setFooter("Created By Rep Graphics#1419!")
                message.channel.send(embed).catch(err => console.log(err));               
                }    
}