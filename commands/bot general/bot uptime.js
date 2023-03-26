const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "uptime",
    category: "info",

    run: async (client, message, args) => {

      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

                 const embed = new MessageEmbed()
                 
                 .setTitle("Bot Uptime:")
                 .setDescription(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`)
                 .setColor(15105570)
                 .setTimestamp()
                 .setFooter("Created By Rep Graphics#1419!")
                message.channel.send(embed).catch(err => console.log(err));              
                }    
}