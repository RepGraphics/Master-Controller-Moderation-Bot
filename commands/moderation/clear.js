const { MessageEmbed } = require("discord.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const embedname = new MessageEmbed()

module.exports = {
    name: "clear",
    aliases: ["c"],
    category: "moderation",

    run: async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use that command!");
        
        const deleteCount = parseInt(args[0], 10);

        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      }
    };
                
