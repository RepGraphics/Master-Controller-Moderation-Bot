const { MessageEmbed } = require("discord.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const embedname = new MessageEmbed()

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Bans member from a server",
    usage: "ban <mention|id>",
    run: async (client, message, args) => {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.reply("Cannot find that user!")
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command!");
    if(bUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That user cannot be kicked!");

    const embed = new MessageEmbed()
    .setTitle("A User Has Been Banned")
    .setColor(15105570)
    .addField("User Banned: ", `${bUser} with ID: ${bUser.id}`)
    .addField("Time: ", message.createdAt)
    .addField("Reason: ", bReason)

    let bChannel = message.guild.channels.cache.find(ch => ch.name === 'scammer-and-insiders-list');
    if(!bChannel) return message.channel.send("Can't find incidents channel")

    if(bUser === message.author) return message.channel.send("You cannot ban yourself!");
    
    message.react("✅").catch(() => console.error('One of the emojis failed to react. (ban.js)'));

    await bUser.send(`You have been banned from **${message.guild.name}** for: **${bReason}**`);
    message.guild.member(bUser).ban(bReason);
    message.reply(`${bUser} has been banned.`);
    bChannel.send(embed).catch(err => console.log(err)); 
    }
}