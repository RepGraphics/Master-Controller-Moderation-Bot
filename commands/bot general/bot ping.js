const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "info",

    run: async (client, message, args) => {
           
          message.channel.send("Pinging...").catch(err => console.log(err)).then(m =>{

          // Basic embed
            var embed = new MessageEmbed()
            .setAuthor("Bot Ping:")
            .setTitle("Bot ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`")
            .setColor(15105570)
            .setTimestamp()
            .setFooter("Created By Rep Graphics#1419!")
            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed).catch(err => console.log(err));
        });
    }
    } 
